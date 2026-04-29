import { Router, Request, Response } from 'express';
import { and, asc, count, countDistinct, desc, eq, getTableColumns, inArray, max, sql } from 'drizzle-orm';
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
  userStats,
  userChallengeCompletions,
} from '../db/schema.js';
import { getSessionUserIdFromRequest } from '../lib/session.js';

const router = Router();

/** Public tree: topics → subtopics → challenges (no questions). */
router.get('/topics', async (_req: Request, res: Response) => {
  const topicRows = await db.select().from(topics).orderBy(asc(topics.displayOrder), asc(topics.id));
  const subRows = await db.select().from(subtopics).orderBy(asc(subtopics.displayOrder), asc(subtopics.id));
  const chRows = await db.select().from(challenges).orderBy(asc(challenges.displayOrder), asc(challenges.id));

  const subsByTopic = new Map<number, typeof subRows>();
  for (const s of subRows) {
    const list = subsByTopic.get(s.topicId) ?? [];
    list.push(s);
    subsByTopic.set(s.topicId, list);
  }
  const chBySub = new Map<number, typeof chRows>();
  for (const c of chRows) {
    const list = chBySub.get(c.subtopicId) ?? [];
    list.push(c);
    chBySub.set(c.subtopicId, list);
  }

  const payload = topicRows.map((t) => ({
    id: t.slug,
    dbId: t.id,
    title: t.title,
    icon: t.icon,
    subTopics: (subsByTopic.get(t.id) ?? []).map((s) => ({
      id: s.slug,
      dbId: s.id,
      title: s.title,
      challenges: (chBySub.get(s.id) ?? []).map((c) => ({
        id: c.slug,
        dbId: c.id,
        title: c.title,
        description: c.description,
        difficulty: c.difficulty,
        rewardXp: c.rewardXp,
      })),
    })),
  }));

  res.json({ topics: payload });
});

/** Play payload for one challenge: ordered questions + MCQ options (no `isCorrect`). */
function paramSlug(req: Request): string | null {
  const raw = req.params.slug;
  if (typeof raw === 'string' && raw.trim() !== '') return raw;
  if (Array.isArray(raw) && typeof raw[0] === 'string' && raw[0].trim() !== '') return raw[0];
  return null;
}

router.get('/topics/:slug', async (req: Request, res: Response) => {
  const slug = req.params.slug;
  if (!slug) {
    res.status(400).json({ error: 'No topic id provided.' });
    return;
  }
  
  const topicRows = await db.select().from(topics).where(eq(topics.slug, slug as string)).limit(1);
  if (topicRows.length === 0) {
    res.status(404).json({ error: 'Topic not found.' });
    return;
  }

  const subtopicWithChallenges = await db.select()
  .from(subtopics).leftJoin(challenges, eq(subtopics.id, challenges.subtopicId))
  .where(eq(subtopics.topicId, topicRows[0]!.id));

  const topicByid = await db.select({
    ...getTableColumns(topics),
    subTopics: {
      ...getTableColumns(subtopics), 
    }

  }).from(topics).leftJoin(subtopics, eq(topics.id, subtopics.topicId))
  .where(eq(topics.slug, slug as string))

  if (topicByid.length === 0) {
    res.status(404).json({ error: 'Topic not found.' });
    return;
  }

  const { subTopics, ...topic } = topicByid[0]!;


  const topicData = {
    ...topic,
    subTopics: topicByid
      .map(r => r.subTopics)
      .filter(st => st !== undefined)
      .map(st => {
        const challengesForSubtopic = subtopicWithChallenges
          .filter(s => s.subtopics.id === st?.id && s.challenges?.id)
          .map(s => ({
            id: s.challenges!.id,
            dbId: s.challenges!.id,
            title: s.challenges!.title,
            description: s.challenges!.description,
            difficulty: s.challenges!.difficulty,
            rewardXp: s.challenges!.rewardXp,
          }));
  
        return {
          ...st,
          challenges: challengesForSubtopic.length > 0
            ? challengesForSubtopic
            : null, 
        };
      }),
  };

  res.status(200).json( {topic: topicData});
});


router.get('/challenges/:slug', async (req: Request, res: Response) => {
  const slug = paramSlug(req);
  if (!slug) {
    res.status(400).json({ error: 'Missing challenge slug.' });
    return;
  }

  const chList = await db.select().from(challenges).where(eq(challenges.slug, slug as unknown as string)).limit(1);
  if (chList.length === 0) {
    res.status(404).json({ error: 'Challenge not found.' });
    return;
  }
  const ch = chList[0]!;

  const cqRows = await db
    .select({ questionId: challengeQuestions.questionId, displayOrder: challengeQuestions.displayOrder })
    .from(challengeQuestions)
    .where(eq(challengeQuestions.challengeId, ch.id))
    .orderBy(asc(challengeQuestions.displayOrder));

  const questionIds = cqRows.map((r) => r.questionId);
  if (questionIds.length === 0) {
    res.json({
      challenge: {
        id: ch.slug,
        dbId: ch.id,
        title: ch.title,
        description: ch.description,
        difficulty: ch.difficulty,
        rewardXp: ch.rewardXp,
        questions: [],
      },
    });
    return;
  }

  const qRows = await db.select().from(questions).where(inArray(questions.id, questionIds));

  const qById = new Map(qRows.map((q) => [q.id, q]));
  const orderedQuestions = questionIds.map((id) => qById.get(id)).filter(Boolean) as (typeof qRows)[number][];

  const optionsRows = await db
    .select({
      id: mcqOptions.id,
      questionId: mcqOptions.questionId,
      optionText: mcqOptions.optionText,
      displayOrder: mcqOptions.displayOrder,
    })
    .from(mcqOptions)
    .where(inArray(mcqOptions.questionId, questionIds))
    .orderBy(asc(mcqOptions.questionId), asc(mcqOptions.displayOrder));

  const optsByQ = new Map<number, { id: number; text: string }[]>();
  for (const o of optionsRows) {
    const list = optsByQ.get(o.questionId) ?? [];
    list.push({ id: o.id, text: o.optionText });
    optsByQ.set(o.questionId, list);
  }

  res.json({
    challenge: {
      id: ch.slug,
      dbId: ch.id,
      title: ch.title,
      description: ch.description,
      difficulty: ch.difficulty,
      rewardXp: ch.rewardXp,
      questions: orderedQuestions.map((q) => {
        const meta = (q.metadata ?? {}) as { displayType?: string; imageUrl?: string | null };
        return {
          id: q.slug,
          dbId: q.id,
          type: q.type,
          displayType: meta.displayType ?? 'theory',
          text: q.description,
          imageUrl: meta.imageUrl ?? undefined,
          options: optsByQ.get(q.id) ?? [],
        };
      }),
    },
  });
});

/** Record one MCQ attempt; expects `answer: { selectedOptionId: number }`. */
router.post('/submissions', async (req: Request, res: Response) => {
  const userId = await getSessionUserIdFromRequest(req);
  if (userId === null) {
    res.status(401).json({ error: 'Sign in required.' });
    return;
  }

  const body = req.body as {
    questionId?: unknown;
    answer?: { selectedOptionId?: unknown; presentedOptionIds?: unknown };
    timeTakenSeconds?: unknown;
  };

  const questionId = typeof body.questionId === 'number' ? body.questionId : Number(body.questionId);
  const selectedOptionId =
    typeof body.answer?.selectedOptionId === 'number'
      ? body.answer.selectedOptionId
      : Number(body.answer?.selectedOptionId);

  if (!Number.isFinite(questionId) || questionId <= 0) {
    res.status(400).json({ error: 'Invalid questionId.' });
    return;
  }
  if (!Number.isFinite(selectedOptionId) || selectedOptionId <= 0) {
    res.status(400).json({ error: 'Invalid answer.selectedOptionId.' });
    return;
  }

  const [optRows, qRows] = await Promise.all([
    db
      .select()
      .from(mcqOptions)
      .where(and(eq(mcqOptions.id, selectedOptionId), eq(mcqOptions.questionId, questionId)))
      .limit(1),
    db.select({ explanation: questions.explanation }).from(questions).where(eq(questions.id, questionId)).limit(1),
  ]);

  if (optRows.length === 0) {
    res.status(400).json({ error: 'Option does not belong to this question.' });
    return;
  }

  const opt = optRows[0]!;
  const correct = opt.isCorrect;
  const explanation = qRows[0]?.explanation ?? null;
  const status = correct ? 'correct' : 'incorrect';
  const score = correct ? 1 : 0;
  const timeTaken =
    typeof body.timeTakenSeconds === 'number' && Number.isFinite(body.timeTakenSeconds)
      ? Math.max(0, Math.floor(body.timeTakenSeconds))
      : null;

  await db.insert(submissions).values({
    userId,
    questionId,
    answer: body.answer ?? { selectedOptionId },
    status,
    score,
    timeTakenSeconds: timeTaken,
    gradingDetails: { selectedOptionId, correct },
  });

  const existing = await db
    .select()
    .from(userProgress)
    .where(and(eq(userProgress.userId, userId), eq(userProgress.questionId, questionId)))
    .limit(1);

  const now = new Date();
  if (existing.length === 0) {
    await db.insert(userProgress).values({
      userId,
      questionId,
      status: correct ? 'solved' : 'attempted',
      bestScore: score,
      attemptsCount: 1,
      firstSolvedAt: correct ? now : null,
      lastAttemptedAt: now,
    });
  } else {
    const prev = existing[0]!;
    const best = Math.max(prev.bestScore, score);
    const solved = correct || prev.status === 'solved';
    await db
      .update(userProgress)
      .set({
        status: solved ? 'solved' : 'attempted',
        bestScore: best,
        attemptsCount: prev.attemptsCount + 1,
        firstSolvedAt: correct ? (prev.firstSolvedAt ?? now) : prev.firstSolvedAt,
        lastAttemptedAt: now,
      })
      .where(and(eq(userProgress.userId, userId), eq(userProgress.questionId, questionId)));
  }

  const statsRows = await db.select().from(userStats).where(eq(userStats.userId, userId)).limit(1);
  if (statsRows.length === 0) {
    await db.insert(userStats).values({ userId, streak: 0, totalXp: 0, challengesCompleted: 0 });
  }

  res.json({
    ok: true,
    status,
    score,
    correct,
    explanation,
  });
});

/** Aggregate stats for the signed-in user. */
router.get('/stats/me', async (req: Request, res: Response) => {
  const userId = await getSessionUserIdFromRequest(req);
  if (userId === null) {
    res.status(401).json({ error: 'Sign in required.' });
    return;
  }

  const answeredRow = await db
    .select({ n: countDistinct(submissions.questionId) })
    .from(submissions)
    .where(eq(submissions.userId, userId));

  const attemptsRow = await db
    .select({ n: count() })
    .from(submissions)
    .where(eq(submissions.userId, userId));

  const correctRow = await db
    .select({ n: count() })
    .from(submissions)
    .where(and(eq(submissions.userId, userId), eq(submissions.status, 'correct')));

  const statsRows = await db.select().from(userStats).where(eq(userStats.userId, userId)).limit(1);
  const stats = statsRows[0] ?? null;

  res.json({
    questionsAnsweredDistinct: answeredRow[0]?.n ?? 0,
    submissionCount: attemptsRow[0]?.n ?? 0,
    correctSubmissionCount: correctRow[0]?.n ?? 0,
    streak: stats?.streak ?? 0,
    totalXp: stats?.totalXp ?? 0,
    challengesCompleted: stats?.challengesCompleted ?? 0,
  });
});

/** Call when the user finishes a challenge in the UI (awards XP once per challenge per user by upsert). */
router.post('/challenges/:slug/complete', async (req: Request, res: Response) => {
  const userId = await getSessionUserIdFromRequest(req);
  if (userId === null) {
    res.status(401).json({ error: 'Sign in required.' });
    return;
  }

  const slug = paramSlug(req);
  if (!slug) {
    res.status(400).json({ error: 'Missing challenge slug.' });
    return;
  }

  const body = req.body as { correct?: unknown; total?: unknown };
  const correct = typeof body.correct === 'number' ? body.correct : Number(body.correct);
  const total = typeof body.total === 'number' ? body.total : Number(body.total);
  if (!Number.isFinite(correct) || !Number.isFinite(total) || total <= 0) {
    res.status(400).json({ error: 'Invalid correct/total.' });
    return;
  }

  const chList = await db.select().from(challenges).where(eq(challenges.id, slug as unknown as number)).limit(1);
  if (chList.length === 0) {
    res.status(400).json({ error: 'Challenge not found.' });
    return;
  }
  const ch = chList[0]!;

  const summary = {
    correct,
    total,
    accuracy: Math.round((correct / total) * 100),
  };

  const prior = await db
    .select({ userId: userChallengeCompletions.userId })
    .from(userChallengeCompletions)
    .where(and(eq(userChallengeCompletions.userId, userId), eq(userChallengeCompletions.challengeId, ch.id)))
    .limit(1);
  const isFirstCompletion = prior.length === 0;

  await db
    .insert(userChallengeCompletions)
    .values({
      userId,
      challengeId: ch.id,
      summary,
    })
    .onConflictDoUpdate({
      target: [userChallengeCompletions.userId, userChallengeCompletions.challengeId],
      set: {
        completedAt: new Date(),
        summary,
      },
    });

  const statsRows = await db.select().from(userStats).where(eq(userStats.userId, userId)).limit(1);
  if (statsRows.length === 0) {
    await db.insert(userStats).values({
      userId,
      streak: 0,
      totalXp: isFirstCompletion ? ch.rewardXp : 0,
      challengesCompleted: isFirstCompletion ? 1 : 0,
    });
  } else if (isFirstCompletion) {
    const prev = statsRows[0]!;
    await db
      .update(userStats)
      .set({
        totalXp: prev.totalXp + ch.rewardXp,
        challengesCompleted: prev.challengesCompleted + 1,
        updatedAt: new Date(),
      })
      .where(eq(userStats.userId, userId));
  } else {
    await db
      .update(userStats)
      .set({ updatedAt: new Date() })
      .where(eq(userStats.userId, userId));
  }

  res.json({ ok: true, rewardXp: isFirstCompletion ? ch.rewardXp : 0, summary, firstCompletion: isFirstCompletion });
});

/** Random questions from across all challenges for Fire Mode (Quick Play). */
router.get('/fire-mode', async (req: Request, res: Response) => {
  const limit = Math.min(Number(req.query.limit) || 10, 20);

  // Fetch more than needed so deduplication doesn't leave us short
  const rawRows = await db
    .select({
      id: questions.id,
      slug: questions.slug,
      description: questions.description,
      type: questions.type,
      metadata: questions.metadata,
    })
    .from(questions)
    .innerJoin(challengeQuestions, eq(challengeQuestions.questionId, questions.id))
    .orderBy(sql`random()`)
    .limit(limit * 3);

  // Deduplicate by question id (a question can belong to multiple challenges)
  const seen = new Set<number>();
  const uniqueRows = rawRows.filter((q) => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  }).slice(0, limit);

  if (uniqueRows.length === 0) {
    res.json({
      challenge: {
        id: 'fire-mode',
        dbId: -1,
        title: 'Fire Mode',
        description: 'Mixed questions from all topics. No structure. Pure knowledge.',
        difficulty: 'medium',
        rewardXp: 0,
        questions: [],
      },
    });
    return;
  }

  const questionIds = uniqueRows.map((q) => q.id);

  const optionsRows = await db
    .select({
      id: mcqOptions.id,
      questionId: mcqOptions.questionId,
      optionText: mcqOptions.optionText,
      displayOrder: mcqOptions.displayOrder,
    })
    .from(mcqOptions)
    .where(inArray(mcqOptions.questionId, questionIds))
    .orderBy(asc(mcqOptions.questionId), asc(mcqOptions.displayOrder));

  const optsByQ = new Map<number, { id: number; text: string }[]>();
  for (const o of optionsRows) {
    const list = optsByQ.get(o.questionId) ?? [];
    list.push({ id: o.id, text: o.optionText });
    optsByQ.set(o.questionId, list);
  }

  res.json({
    challenge: {
      id: 'fire-mode',
      dbId: -1,
      title: 'Fire Mode',
      description: 'Mixed questions from all topics. No structure. Pure knowledge.',
      difficulty: 'medium',
      rewardXp: uniqueRows.length * 25,
      questions: uniqueRows.map((q) => {
        const meta = (q.metadata ?? {}) as { displayType?: string; imageUrl?: string | null };
        return {
          id: q.slug,
          dbId: q.id,
          type: q.type,
          displayType: meta.displayType ?? 'theory',
          text: q.description,
          imageUrl: meta.imageUrl ?? undefined,
          options: optsByQ.get(q.id) ?? [],
        };
      }),
    },
  });
});

/** Per-topic progress % for the signed-in user (solved questions / total questions). */
router.get('/progress/topics', async (req: Request, res: Response) => {
  const userId = await getSessionUserIdFromRequest(req);
  if (userId === null) {
    res.status(401).json({ error: 'Sign in required.' });
    return;
  }

  const [totalRows, solvedRows] = await Promise.all([
    db
      .select({ topicSlug: topics.slug, total: count(questions.id) })
      .from(topics)
      .innerJoin(subtopics, eq(subtopics.topicId, topics.id))
      .innerJoin(challenges, eq(challenges.subtopicId, subtopics.id))
      .innerJoin(challengeQuestions, eq(challengeQuestions.challengeId, challenges.id))
      .innerJoin(questions, eq(questions.id, challengeQuestions.questionId))
      .groupBy(topics.slug),

    db
      .select({ topicSlug: topics.slug, solved: count(userProgress.questionId) })
      .from(topics)
      .innerJoin(subtopics, eq(subtopics.topicId, topics.id))
      .innerJoin(challenges, eq(challenges.subtopicId, subtopics.id))
      .innerJoin(challengeQuestions, eq(challengeQuestions.challengeId, challenges.id))
      .innerJoin(
        userProgress,
        and(
          eq(userProgress.questionId, challengeQuestions.questionId),
          eq(userProgress.userId, userId),
          eq(userProgress.status, 'solved'),
        ),
      )
      .groupBy(topics.slug),
  ]);

  const solvedMap = new Map(solvedRows.map((r) => [r.topicSlug, r.solved]));
  const progress: Record<string, number> = {};
  for (const row of totalRows) {
    const solved = solvedMap.get(row.topicSlug) ?? 0;
    progress[row.topicSlug] = row.total > 0 ? Math.round((solved / row.total) * 100) : 0;
  }

  res.json({ progress });
});

/** Recently-touched challenges for the signed-in user (Continue Where You Left Off). */
router.get('/progress/recent', async (req: Request, res: Response) => {
  const userId = await getSessionUserIdFromRequest(req);
  if (userId === null) {
    res.status(401).json({ error: 'Sign in required.' });
    return;
  }

  // Challenges the user has submitted answers for, ordered by most recent activity.
  const recentActivity = await db
    .select({
      challengeId: challengeQuestions.challengeId,
      lastActivity: max(submissions.submittedAt).as('last_activity'),
    })
    .from(submissions)
    .innerJoin(challengeQuestions, eq(challengeQuestions.questionId, submissions.questionId))
    .where(eq(submissions.userId, userId))
    .groupBy(challengeQuestions.challengeId)
    .orderBy(desc(sql`last_activity`))
    .limit(5);

  if (recentActivity.length === 0) {
    res.json({ challenges: [] });
    return;
  }

  const challengeIds = recentActivity.map((r) => r.challengeId);

  const [challengeRows, questionCountRows, completionRows] = await Promise.all([
    db
      .select({
        challengeId: challenges.id,
        challengeSlug: challenges.slug,
        title: challenges.title,
        difficulty: challenges.difficulty,
        rewardXp: challenges.rewardXp,
        topicTitle: topics.title,
        topicIcon: topics.icon,
      })
      .from(challenges)
      .innerJoin(subtopics, eq(subtopics.id, challenges.subtopicId))
      .innerJoin(topics, eq(topics.id, subtopics.topicId))
      .where(inArray(challenges.id, challengeIds)),

    db
      .select({ challengeId: challengeQuestions.challengeId, n: count() })
      .from(challengeQuestions)
      .where(inArray(challengeQuestions.challengeId, challengeIds))
      .groupBy(challengeQuestions.challengeId),

    db
      .select({ challengeId: userChallengeCompletions.challengeId })
      .from(userChallengeCompletions)
      .where(
        and(
          eq(userChallengeCompletions.userId, userId),
          inArray(userChallengeCompletions.challengeId, challengeIds),
        ),
      ),
  ]);

  const challengeMap = new Map(challengeRows.map((c) => [c.challengeId, c]));
  const countMap = new Map(questionCountRows.map((r) => [r.challengeId, r.n]));
  const completedSet = new Set(completionRows.map((r) => r.challengeId));

  const result = recentActivity
    .map((r) => {
      const ch = challengeMap.get(r.challengeId);
      if (!ch) return null;
      return {
        id: ch.challengeSlug,
        dbId: ch.challengeId,
        title: ch.title,
        difficulty: ch.difficulty,
        rewardXp: ch.rewardXp,
        questionCount: countMap.get(r.challengeId) ?? 0,
        topicTitle: ch.topicTitle,
        topicIcon: ch.topicIcon,
        status: completedSet.has(r.challengeId) ? 'done' : 'continue',
      };
    })
    .filter(Boolean);

  res.json({ challenges: result });
});

export default router;
