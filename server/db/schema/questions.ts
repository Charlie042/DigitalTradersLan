import {
  pgTable,
  serial,
  text,
  integer,
  smallint,
  boolean,
  timestamp,
  jsonb,
  primaryKey,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { difficultyEnum, questionTypeEnum, questionStatusEnum, assetTypeEnum } from './enums';
import { users } from './users';
import { topics, subtopics, challenges } from './topics';

export const questions = pgTable('questions', {
  id:               serial('id').primaryKey(),
  title:            text('title').notNull(),
  slug:             text('slug').notNull(),
  description:      text('description').notNull(),
  explanation:      text('explanation'),
  type:             questionTypeEnum('type').notNull(),
  difficulty:       difficultyEnum('difficulty').notNull().default('medium'),
  status:           questionStatusEnum('status').notNull().default('draft'),
  topicId:          integer('topic_id').references(() => topics.id, { onDelete: 'set null' }),
  subtopicId:       integer('subtopic_id').references(() => subtopics.id, { onDelete: 'set null' }),
  createdByUserId:  integer('created_by_user_id').references(() => users.id, { onDelete: 'set null' }),
  tags:             text('tags').array().default([]),
  metadata:         jsonb('metadata').default({}),
  createdAt:        timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt:        timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  slugUq: uniqueIndex('idx_questions_slug').on(t.slug),
  typeIdx: index('idx_questions_type').on(t.type),
  difficultyIdx: index('idx_questions_difficulty').on(t.difficulty),
  statusIdx: index('idx_questions_status').on(t.status),
  topicIdx: index('idx_questions_topic_id').on(t.topicId),
  subtopicIdx: index('idx_questions_subtopic_id').on(t.subtopicId),
}));

export const challengeQuestions = pgTable('challenge_questions', {
  challengeId: integer('challenge_id').notNull().references(() => challenges.id, { onDelete: 'cascade' }),
  questionId:  integer('question_id').notNull().references(() => questions.id, { onDelete: 'cascade' }),
  displayOrder: integer('display_order').notNull().default(0),
}, (t) => ({
  pk: primaryKey({ columns: [t.challengeId, t.questionId] }),
  challengeIdx: index('idx_challenge_questions_challenge_id').on(t.challengeId),
  questionIdx: index('idx_challenge_questions_question_id').on(t.questionId),
  orderIdx: index('idx_challenge_questions_display_order').on(t.displayOrder),
}));

export const mcqOptions = pgTable('mcq_options', {
  id:           serial('id').primaryKey(),
  questionId:   integer('question_id').notNull().references(() => questions.id, { onDelete: 'cascade' }),
  optionText:   text('option_text').notNull(),
  isCorrect:    boolean('is_correct').notNull().default(false),
  displayOrder: smallint('display_order').notNull().default(0),
  createdAt:    timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  questionIdx: index('idx_mcq_options_question_id').on(t.questionId),
}));

export const questionAssets = pgTable('question_assets', {
  id:           serial('id').primaryKey(),
  questionId:   integer('question_id').notNull().references(() => questions.id, { onDelete: 'cascade' }),
  assetType:    assetTypeEnum('asset_type').notNull(),
  url:          text('url').notNull(),
  filename:     text('filename'),
  altText:      text('alt_text'),
  displayOrder: smallint('display_order').notNull().default(0),
  metadata:     jsonb('metadata').default({}),
  createdAt:    timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  questionIdx: index('idx_question_assets_question_id').on(t.questionId),
}));

export const dataAnalysisAnswers = pgTable('data_analysis_answers', {
  id:            serial('id').primaryKey(),
  questionId:    integer('question_id').notNull().unique().references(() => questions.id, { onDelete: 'cascade' }),
  answerType:    text('answer_type').notNull(),
  correctAnswer: jsonb('correct_answer').notNull(),
  answerOptions: jsonb('answer_options'),
  tolerance:     integer('tolerance'),
  createdAt:     timestamp('created_at', { withTimezone: true }).defaultNow(),
});
