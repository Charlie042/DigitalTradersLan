import 'dotenv/config';
import { count, eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { subtopics, challenges, questions } from '../db/schema.js';
import { catalogTopics } from '../data/catalogSeed.js';

async function main() {
  const seedSubs = catalogTopics.find((t) => t.id === 'candlesticks')?.subTopics ?? [];
  const seedChals = seedSubs.reduce((n, s) => n + s.challenges.length, 0);
  console.log(`seed candlesticks: ${seedSubs.length} subtopic(s), ${seedChals} challenge(s)`);

  for (const slug of ['hammer-pin-bar-candle', 'shooting-star', 'rejection-wicks']) {
    const rows = await db
      .select({ slug: subtopics.slug, title: subtopics.title, n: count(challenges.id) })
      .from(subtopics)
      .leftJoin(challenges, eq(challenges.subtopicId, subtopics.id))
      .where(eq(subtopics.slug, slug))
      .groupBy(subtopics.slug, subtopics.title);
    console.log(`db ${slug}:`, rows[0] ?? 'missing');
  }

  const qCount = await db
    .select({ n: count() })
    .from(questions)
    .where(eq(questions.slug, 'chal-hammer-easy-1--q1'));
  console.log('sample hammer question rows:', qCount[0]?.n ?? 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
