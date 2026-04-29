/**
 * Catalog seed — two modes:
 *
 *   npm run db:seed:dev   → Wipes catalog + related learner rows, then inserts from catalogSeed.
 *   npm run db:seed:prod  → Upserts catalog only (topics → questions). Never deletes submissions
 *                           / progress / completions. MCQ options are replaced only for questions
 *                           that have zero submissions (so past attempts keep valid option ids).
 *
 * From repo root: `cd server && npm run db:seed:dev` (or `:prod`).
 */
import 'dotenv/config';
import { and, count, eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import {
  topics,
  subtopics,
  challenges,
  questions,
  challengeQuestions,
  mcqOptions,
  submissions,
  userProgress,
  userChallengeCompletions,
  questionAssets,
  dataAnalysisAnswers,
} from '../db/schema.js';
import { catalogTopics, type SeedQuestion } from '../data/catalogSeed.js';

type Mode = 'dev' | 'prod';

function parseMode(): Mode {
  const argv = process.argv.slice(2);
  const hasDev = argv.includes('--dev');
  const hasProd = argv.includes('--prod');
  if (hasDev && hasProd) {
    console.error('Use only one of --dev or --prod.');
    process.exit(1);
  }
  if (hasProd) return 'prod';
  if (hasDev) return 'dev';
  console.error('Usage: tsx scripts/seedCatalog.ts --dev | --prod');
  console.error('  --dev  Reset catalog + submissions/progress/completions for seeded content, then insert.');
  console.error('  --prod Upsert catalog only; safe for production (does not wipe learner data).');
  process.exit(1);
}

function mapDifficulty(d: 'Easy' | 'Medium' | 'Hard'): 'easy' | 'medium' | 'hard' {
  if (d === 'Easy') return 'easy';
  if (d === 'Hard') return 'hard';
  return 'medium';
}

async function clearCatalogAndLearnerRows() {
  await db.delete(userChallengeCompletions);
  await db.delete(submissions);
  await db.delete(userProgress);
  await db.delete(challengeQuestions);
  await db.delete(mcqOptions);
  await db.delete(questionAssets);
  await db.delete(dataAnalysisAnswers);
  await db.delete(questions);
  await db.delete(challenges);
  await db.delete(subtopics);
  await db.delete(topics);
}

async function submissionCountForQuestion(questionId: number): Promise<number> {
  const rows = await db
    .select({ n: count() })
    .from(submissions)
    .where(eq(submissions.questionId, questionId));
  return Number(rows[0]?.n ?? 0);
}

async function replaceMcqOptions(questionId: number, q: SeedQuestion) {
  await db.delete(mcqOptions).where(eq(mcqOptions.questionId, questionId));
  for (let idx = 0; idx < q.options.length; idx++) {
    await db.insert(mcqOptions).values({
      questionId,
      optionText: q.options[idx]!,
      isCorrect: idx === q.correctAnswerIndex,
      displayOrder: idx,
    });
  }
}

async function seedDev() {
  await clearCatalogAndLearnerRows();

  let topicOrder = 0;
  for (const t of catalogTopics) {
    const [topicRow] = await db
      .insert(topics)
      .values({
        title: t.title,
        slug: t.id,
        icon: t.icon,
        displayOrder: topicOrder++,
      })
      .returning({ id: topics.id });

    let subOrder = 0;
    for (const s of t.subTopics) {
      const [subRow] = await db
        .insert(subtopics)
        .values({
          topicId: topicRow.id,
          title: s.title,
          slug: s.id,
          displayOrder: subOrder++,
        })
        .returning({ id: subtopics.id });

      let chOrder = 0;
      for (const c of s.challenges) {
        const [chRow] = await db
          .insert(challenges)
          .values({
            subtopicId: subRow.id,
            title: c.title,
            slug: c.id,
            description: c.description,
            difficulty: mapDifficulty(c.difficulty),
            rewardXp: c.reward,
            displayOrder: chOrder++,
          })
          .returning({ id: challenges.id });

        let qOrder = 0;
        for (const q of c.questions) {
          const qSlug = `${c.id}--${q.id}`;
          const [qRow] = await db
            .insert(questions)
            .values({
              title: q.text.slice(0, 200),
              slug: qSlug,
              description: q.text,
              explanation: q.explanation,
              type: 'mcq',
              difficulty: mapDifficulty(c.difficulty),
              status: 'published',
              topicId: topicRow.id,
              subtopicId: subRow.id,
              metadata: {
                legacyQuestionId: q.id,
                displayType: q.type,
                imageUrl: q.imageUrl ?? null,
              },
            })
            .returning({ id: questions.id });

          await db.insert(challengeQuestions).values({
            challengeId: chRow.id,
            questionId: qRow.id,
            displayOrder: qOrder++,
          });

          await replaceMcqOptions(qRow.id, q);
        }
      }
    }
  }

  const topicRows = await db.select({ id: topics.id }).from(topics);
  console.log(`[db:seed:dev] ✓ Reset + seeded ${topicRows.length} topic(s).`);
}

async function seedProd() {
  let topicOrder = 0;
  for (const t of catalogTopics) {
    await db
      .insert(topics)
      .values({
        title: t.title,
        slug: t.id,
        icon: t.icon,
        displayOrder: topicOrder,
      })
      .onConflictDoUpdate({
        target: topics.slug,
        set: {
          title: t.title,
          icon: t.icon,
          displayOrder: topicOrder,
          updatedAt: new Date(),
        },
      });
    topicOrder += 1;

    const [topicRow] = await db.select({ id: topics.id }).from(topics).where(eq(topics.slug, t.id)).limit(1);
    if (!topicRow) throw new Error(`Topic slug missing after upsert: ${t.id}`);

    let subOrder = 0;
    for (const s of t.subTopics) {
      await db
        .insert(subtopics)
        .values({
          topicId: topicRow.id,
          title: s.title,
          slug: s.id,
          displayOrder: subOrder,
        })
        .onConflictDoUpdate({
          target: [subtopics.topicId, subtopics.slug],
          set: {
            title: s.title,
            displayOrder: subOrder,
            updatedAt: new Date(),
          },
        });
      subOrder += 1;

      const [subRow] = await db
        .select({ id: subtopics.id })
        .from(subtopics)
        .where(and(eq(subtopics.topicId, topicRow.id), eq(subtopics.slug, s.id)))
        .limit(1);
      if (!subRow) throw new Error(`Subtopic missing after upsert: ${t.id}/${s.id}`);

      let chOrder = 0;
      for (const c of s.challenges) {
        await db
          .insert(challenges)
          .values({
            subtopicId: subRow.id,
            title: c.title,
            slug: c.id,
            description: c.description,
            difficulty: mapDifficulty(c.difficulty),
            rewardXp: c.reward,
            displayOrder: chOrder,
          })
          .onConflictDoUpdate({
            target: [challenges.subtopicId, challenges.slug],
            set: {
              title: c.title,
              description: c.description,
              difficulty: mapDifficulty(c.difficulty),
              rewardXp: c.reward,
              displayOrder: chOrder,
              updatedAt: new Date(),
            },
          });
        chOrder += 1;

        const [chRow] = await db
          .select({ id: challenges.id })
          .from(challenges)
          .where(and(eq(challenges.subtopicId, subRow.id), eq(challenges.slug, c.id)))
          .limit(1);
        if (!chRow) throw new Error(`Challenge missing after upsert: ${c.id}`);

        let qOrder = 0;
        for (const q of c.questions) {
          const qSlug = `${c.id}--${q.id}`;
          const qValues = {
            title: q.text.slice(0, 200),
            slug: qSlug,
            description: q.text,
            explanation: q.explanation,
            type: 'mcq' as const,
            difficulty: mapDifficulty(c.difficulty),
            status: 'published' as const,
            topicId: topicRow.id,
            subtopicId: subRow.id,
            metadata: {
              legacyQuestionId: q.id,
              displayType: q.type,
              imageUrl: q.imageUrl ?? null,
            },
          };

          await db
            .insert(questions)
            .values(qValues)
            .onConflictDoUpdate({
              target: questions.slug,
              set: {
                title: qValues.title,
                description: qValues.description,
                explanation: qValues.explanation,
                type: qValues.type,
                difficulty: qValues.difficulty,
                status: qValues.status,
                topicId: qValues.topicId,
                subtopicId: qValues.subtopicId,
                metadata: qValues.metadata,
                updatedAt: new Date(),
              },
            });

          const [qRow] = await db.select({ id: questions.id }).from(questions).where(eq(questions.slug, qSlug)).limit(1);
          if (!qRow) throw new Error(`Question missing after upsert: ${qSlug}`);

          await db
            .insert(challengeQuestions)
            .values({
              challengeId: chRow.id,
              questionId: qRow.id,
              displayOrder: qOrder,
            })
            .onConflictDoUpdate({
              target: [challengeQuestions.challengeId, challengeQuestions.questionId],
              set: { displayOrder: qOrder },
            });
          qOrder += 1;

          const subs = await submissionCountForQuestion(qRow.id);
          if (subs === 0) {
            await replaceMcqOptions(qRow.id, q);
          } else {
            const existingOpts = await db.select({ id: mcqOptions.id }).from(mcqOptions).where(eq(mcqOptions.questionId, qRow.id));
            if (existingOpts.length === 0) {
              await replaceMcqOptions(qRow.id, q);
            } else {
              console.warn(
                `[db:seed:prod] Skipped rewriting MCQ options for "${qSlug}" (${subs} submission(s); keeps stable option ids).`,
              );
            }
          }
        }
      }
    }
  }

  const topicRows = await db.select({ id: topics.id }).from(topics);
  console.log(`[db:seed:prod] ✓ Upserted catalog (${topicRows.length} topic(s)). Learner tables untouched.`);
}

async function main() {
  const mode = parseMode();
  if (mode === 'dev') {
    await seedDev();
  } else {
    await seedProd();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
