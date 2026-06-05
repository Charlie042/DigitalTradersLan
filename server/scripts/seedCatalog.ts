/**
 * Catalog seed — safe production mode only:
 *
 *   npm run db:seed       → Upserts catalog only (topics → questions).
 *   npm run db:seed:prod  → Same as above.
 *
 * This never deletes submissions / progress / completions. MCQ options are
 * replaced only for questions that have zero submissions, so past attempts keep
 * valid option ids.
 *
 * From repo root: `cd server && npm run db:seed`.
 */
import 'dotenv/config';
import { count, inArray, sql } from 'drizzle-orm';
import { db } from '../db/index.js';
import {
  topics,
  subtopics,
  challenges,
  questions,
  challengeQuestions,
  mcqOptions,
  submissions,
} from '../db/schema.js';
import { catalogTopics, type SeedChallenge, type SeedQuestion, type SeedSubTopic, type SeedTopic } from '../data/catalogSeed.js';

const CONCURRENCY = 3;
const INSERT_CHUNK = 200;
const RETRY_ATTEMPTS = 4;
const RETRY_BASE_MS = 500;

function ensureProdMode() {
  const argv = process.argv.slice(2);
  const hasDev = argv.includes('--dev');
  const hasProd = argv.includes('--prod');
  if (hasDev) {
    console.error('The destructive --dev seed mode has been removed. Use npm run db:seed instead.');
    process.exit(1);
  }
  if (!hasProd) {
    console.error('Usage: tsx scripts/seedCatalog.ts --prod');
    console.error('  --prod Upsert catalog only; safe for production (does not wipe learner data).');
    process.exit(1);
  }
}

export function mapDifficulty(d: 'Easy' | 'Medium' | 'Hard'): 'easy' | 'medium' | 'hard' {
  if (d === 'Easy') return 'easy';
  if (d === 'Hard') return 'hard';
  return 'medium';
}

function isRetryableError(err: unknown): boolean {
  let current: unknown = err;
  for (let depth = 0; depth < 4 && current; depth++) {
    const e = current as { code?: string; message?: string; cause?: unknown };
    if (e.code && ['EADDRNOTAVAIL', 'ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND'].includes(e.code)) {
      return true;
    }
    const msg = e.message ?? '';
    if (msg.includes('fetch failed') || msg.includes('Error connecting to database')) {
      return true;
    }
    current = e.cause;
  }
  return false;
}

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 0; attempt < RETRY_ATTEMPTS; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (!isRetryableError(err) || attempt === RETRY_ATTEMPTS - 1) throw err;
      const delay = RETRY_BASE_MS * 2 ** attempt;
      console.warn(`[db:seed:prod] ${label} failed (${attempt + 1}/${RETRY_ATTEMPTS}), retrying in ${delay}ms…`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const i = nextIndex++;
      if (i >= items.length) break;
      results[i] = await fn(items[i]!, i);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function bulkSubmissionCounts(questionIds: number[]): Promise<Map<number, number>> {
  if (questionIds.length === 0) return new Map();

  const rows = await db
    .select({ questionId: submissions.questionId, total: count() })
    .from(submissions)
    .where(inArray(submissions.questionId, questionIds))
    .groupBy(submissions.questionId);

  return new Map(rows.map((r) => [r.questionId, Number(r.total)]));
}

async function batchReplaceMcqOptions(items: Array<{ questionId: number; q: SeedQuestion }>) {
  if (items.length === 0) return;

  const questionIds = items.map((i) => i.questionId);
  await db.delete(mcqOptions).where(inArray(mcqOptions.questionId, questionIds));

  const rows = items.flatMap(({ questionId, q }) =>
    q.options.map((optionText, idx) => ({
      questionId,
      optionText,
      isCorrect: idx === q.correctAnswerIndex,
      displayOrder: idx,
    })),
  );

  for (const part of chunk(rows, INSERT_CHUNK)) {
    await db.insert(mcqOptions).values(part);
  }
}

async function processQuestions(c: SeedChallenge, topicId: number, subId: number, challengeId: number) {
  if (c.questions.length === 0) return;

  const qValues = c.questions.map((q) => ({
    title: q.text.slice(0, 200),
    slug: `${c.id}--${q.id}`,
    description: q.text,
    explanation: q.explanation,
    type: 'mcq' as const,
    difficulty: mapDifficulty(c.difficulty),
    status: 'published' as const,
    topicId,
    subtopicId: subId,
    metadata: {
      legacyQuestionId: q.id,
      displayType: q.type,
      imageUrl: q.imageUrl ?? null,
    },
  }));

  const qRows = await withRetry(`upsert questions for ${c.id}`, () =>
    db
      .insert(questions)
      .values(qValues)
      .onConflictDoUpdate({
        target: questions.slug,
        set: {
          title: sql`excluded.title`,
          description: sql`excluded.description`,
          explanation: sql`excluded.explanation`,
          type: sql`excluded.type`,
          difficulty: sql`excluded.difficulty`,
          status: sql`excluded.status`,
          topicId: sql`excluded.topic_id`,
          subtopicId: sql`excluded.subtopic_id`,
          metadata: sql`excluded.metadata`,
          updatedAt: new Date(),
        },
      })
      .returning({ id: questions.id, slug: questions.slug }),
  );

  const qIdBySlug = new Map(qRows.map((r) => [r.slug, r.id]));

  await withRetry(`upsert challenge_questions for ${c.id}`, () =>
    db
      .insert(challengeQuestions)
      .values(
        c.questions.map((q, i) => ({
          challengeId,
          questionId: qIdBySlug.get(`${c.id}--${q.id}`)!,
          displayOrder: i,
        })),
      )
      .onConflictDoUpdate({
        target: [challengeQuestions.challengeId, challengeQuestions.questionId],
        set: { displayOrder: sql`excluded.display_order` },
      }),
  );

  const allQIds = qRows.map((r) => r.id);
  const submissionCounts = await bulkSubmissionCounts(allQIds);

  const existingOptions = await db
    .select({ questionId: mcqOptions.questionId })
    .from(mcqOptions)
    .where(inArray(mcqOptions.questionId, allQIds));

  const qIdsWithOptions = new Set(existingOptions.map((r) => r.questionId));

  const toReplace: Array<{ questionId: number; q: SeedQuestion }> = [];

  for (const q of c.questions) {
    const slug = `${c.id}--${q.id}`;
    const qId = qIdBySlug.get(slug);
    if (!qId) throw new Error(`Question id missing after upsert: ${slug}`);

    const subCount = submissionCounts.get(qId) ?? 0;
    const hasOptions = qIdsWithOptions.has(qId);

    if (subCount === 0 || !hasOptions) {
      toReplace.push({ questionId: qId, q });
    } else {
      console.warn(
        `[db:seed:prod] Skipped rewriting MCQ options for "${slug}" (${subCount} submission(s); keeps stable option ids).`,
      );
    }
  }

  if (toReplace.length > 0) {
    await withRetry(`replace MCQ options for ${c.id}`, () => batchReplaceMcqOptions(toReplace));
  }
}

async function processChallenges(s: SeedSubTopic, topicId: number, subId: number) {
  if (s.challenges.length === 0) return;

  const chRows = await withRetry(`upsert challenges for ${s.id}`, () =>
    db
      .insert(challenges)
      .values(
        s.challenges.map((c, i) => ({
          subtopicId: subId,
          title: c.title,
          slug: c.id,
          description: c.description,
          difficulty: mapDifficulty(c.difficulty),
          rewardXp: c.reward,
          displayOrder: i,
        })),
      )
      .onConflictDoUpdate({
        target: [challenges.subtopicId, challenges.slug],
        set: {
          title: sql`excluded.title`,
          description: sql`excluded.description`,
          difficulty: sql`excluded.difficulty`,
          rewardXp: sql`excluded.reward_xp`,
          displayOrder: sql`excluded.display_order`,
          updatedAt: new Date(),
        },
      })
      .returning({ id: challenges.id, slug: challenges.slug }),
  );

  const chIdBySlug = new Map(chRows.map((r) => [r.slug, r.id]));

  for (const c of s.challenges) {
    const chId = chIdBySlug.get(c.id);
    if (!chId) throw new Error(`Challenge id missing after upsert: ${c.id}`);
    await processQuestions(c, topicId, subId, chId);
  }
}

async function processSubtopics(t: SeedTopic, topicId: number) {
  if (t.subTopics.length === 0) return;

  const subRows = await withRetry(`upsert subtopics for ${t.id}`, () =>
    db
      .insert(subtopics)
      .values(
        t.subTopics.map((s, i) => ({
          topicId,
          title: s.title,
          slug: s.id,
          displayOrder: i,
        })),
      )
      .onConflictDoUpdate({
        target: [subtopics.topicId, subtopics.slug],
        set: {
          title: sql`excluded.title`,
          displayOrder: sql`excluded.display_order`,
          updatedAt: new Date(),
        },
      })
      .returning({ id: subtopics.id, slug: subtopics.slug }),
  );

  const subIdBySlug = new Map(subRows.map((r) => [r.slug, r.id]));

  await mapLimit(t.subTopics, CONCURRENCY, async (s) => {
    const subId = subIdBySlug.get(s.id);
    if (!subId) throw new Error(`Subtopic id missing after upsert: ${t.id}/${s.id}`);
    await processChallenges(s, topicId, subId);
  });
}

async function seedProd() {
  const topicRows = await withRetry('upsert topics', () =>
    db
      .insert(topics)
      .values(
        catalogTopics.map((t, i) => ({
          title: t.title,
          slug: t.id,
          icon: t.icon,
          displayOrder: i,
        })),
      )
      .onConflictDoUpdate({
        target: topics.slug,
        set: {
          title: sql`excluded.title`,
          icon: sql`excluded.icon`,
          displayOrder: sql`excluded.display_order`,
          updatedAt: new Date(),
        },
      })
      .returning({ id: topics.id, slug: topics.slug }),
  );

  const topicIdBySlug = new Map(topicRows.map((r) => [r.slug, r.id]));

  for (const t of catalogTopics) {
    const topicId = topicIdBySlug.get(t.id);
    if (!topicId) throw new Error(`Topic id missing after upsert: ${t.id}`);
    await processSubtopics(t, topicId);
  }

  console.log(`[db:seed:prod] ✓ Upserted catalog (${topicRows.length} topic(s)). Learner tables untouched.`);
}

async function main() {
  ensureProdMode();
  await seedProd();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
