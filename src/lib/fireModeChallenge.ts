import { Challenge, Question, mockTopics } from '../data/mockDatabase';

export const FIRE_MODE_CHALLENGE_ID = 'fire-mode';

const MAX_QUESTIONS = 10;

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Aggregates questions from all challenges, shuffles, caps length, and returns a synthetic challenge.
 */
export function buildFireModeChallenge(): Challenge | null {
  const collected: Question[] = [];
  for (const topic of mockTopics) {
    for (const sub of topic.subTopics) {
      for (const ch of sub.challenges) {
        for (const q of ch.questions) {
          collected.push(q);
        }
      }
    }
  }

  if (collected.length === 0) return null;

  const shuffled = shuffle(collected);
  const questions = shuffled.slice(0, Math.min(MAX_QUESTIONS, shuffled.length));

  const reward = Math.min(200, questions.length * 25);

  return {
    id: FIRE_MODE_CHALLENGE_ID,
    title: 'Fire Mode',
    description:
      'Mixed questions from all topics. No structure. Pure knowledge.',
    difficulty: 'Medium',
    reward,
    questions,
  };
}
