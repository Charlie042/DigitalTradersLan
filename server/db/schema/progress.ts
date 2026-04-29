import { pgTable, serial, integer, timestamp, jsonb, primaryKey, index } from 'drizzle-orm/pg-core';
import { submissionStatusEnum, progressStatusEnum } from './enums';
import { users } from './users';
import { questions } from './questions';

export const submissions = pgTable('submissions', {
  id:              serial('id').primaryKey(),
  userId:          integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  questionId:      integer('question_id').notNull().references(() => questions.id, { onDelete: 'cascade' }),
  answer:          jsonb('answer').notNull(),
  status:          submissionStatusEnum('status').notNull(),
  score:           integer('score').notNull().default(0),
  timeTakenSeconds: integer('time_taken_seconds'),
  gradingDetails:  jsonb('grading_details').default({}),
  submittedAt:     timestamp('submitted_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  userIdx: index('idx_submissions_user_id').on(t.userId),
  questionIdx: index('idx_submissions_question_id').on(t.questionId),
  userQuestionIdx: index('idx_submissions_user_question').on(t.userId, t.questionId),
  submittedAtIdx: index('idx_submissions_submitted_at').on(t.submittedAt),
}));

export const userProgress = pgTable('user_progress', {
  userId:          integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  questionId:      integer('question_id').notNull().references(() => questions.id, { onDelete: 'cascade' }),
  status:          progressStatusEnum('status').notNull().default('attempted'),
  bestScore:       integer('best_score').notNull().default(0),
  attemptsCount:   integer('attempts_count').notNull().default(0),
  firstSolvedAt:   timestamp('first_solved_at', { withTimezone: true }),
  lastAttemptedAt: timestamp('last_attempted_at', { withTimezone: true }).defaultNow(),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.questionId] }),
  userIdx: index('idx_user_progress_user_id').on(t.userId),
  statusIdx: index('idx_user_progress_status').on(t.userId, t.status),
}));
