/**
 * Source of truth for catalog content. Consumed by `server/scripts/seedCatalog.ts`
 * to populate topics → subtopics → challenges → questions in the database.
 */
export type {
  SeedChallenge,
  SeedQuestion,
  SeedSubTopic,
  SeedTopic,
} from './catalog/types.js';
export { catalogTopics } from './catalog/topics/index.js';
