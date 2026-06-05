import { pgTable, serial, text, integer, timestamp, index, uniqueIndex } from 'drizzle-orm/pg-core';
import { difficultyEnum } from './enums';

export const topics = pgTable('topics', {
  id:           integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title:        text('title').notNull(),
  slug:         text('slug').notNull(),
  icon:         text('icon'),
  description:  text('description'),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt:    timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt:    timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  slugUq: uniqueIndex('idx_topics_slug').on(t.slug),
  orderIdx: index('idx_topics_display_order').on(t.displayOrder),
}));

export const subtopics = pgTable('subtopics', {
  id:           integer('id').primaryKey().generatedAlwaysAsIdentity(),
  topicId:      integer('topic_id').notNull().references(() => topics.id, { onDelete: 'cascade' }),
  title:        text('title').notNull(),
  slug:         text('slug').notNull(),
  description:  text('description'),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt:    timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt:    timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  topicIdx: index('idx_subtopics_topic_id').on(t.topicId),
  slugTopicUq: uniqueIndex('idx_subtopics_topic_slug').on(t.topicId, t.slug),
  orderIdx: index('idx_subtopics_display_order').on(t.displayOrder),
}));

export const challenges = pgTable('challenges', {
  id:           integer('id').primaryKey().generatedAlwaysAsIdentity(),
  subtopicId:   integer('subtopic_id').notNull().references(() => subtopics.id, { onDelete: 'cascade' }),
  title:        text('title').notNull(),
  slug:         text('slug').notNull(),
  description:  text('description').notNull(),
  difficulty:   difficultyEnum('difficulty').notNull().default('medium'),
  rewardXp:     integer('reward_xp').notNull().default(0),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt:    timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt:    timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  subtopicIdx: index('idx_challenges_subtopic_id').on(t.subtopicId),
  slugSubtopicUq: uniqueIndex('idx_challenges_subtopic_slug').on(t.subtopicId, t.slug),
  difficultyIdx: index('idx_challenges_difficulty').on(t.difficulty),
  orderIdx: index('idx_challenges_display_order').on(t.displayOrder),
}));
