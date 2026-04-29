import { pgTable, integer, timestamp, jsonb, primaryKey, index } from 'drizzle-orm/pg-core';
import { users } from './users';
import { challenges } from './topics';

export const userStats = pgTable('user_stats', {
  userId:               integer('user_id').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  streak:               integer('streak').notNull().default(0),
  totalXp:              integer('total_xp').notNull().default(0),
  challengesCompleted:  integer('challenges_completed').notNull().default(0),
  updatedAt:            timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const userChallengeCompletions = pgTable('user_challenge_completions', {
  userId:      integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  challengeId: integer('challenge_id').notNull().references(() => challenges.id, { onDelete: 'cascade' }),
  completedAt: timestamp('completed_at', { withTimezone: true }).defaultNow(),
  summary:     jsonb('summary').default({}),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.challengeId] }),
  userIdx: index('idx_user_challenge_completions_user_id').on(t.userId),
  challengeIdx: index('idx_user_challenge_completions_challenge_id').on(t.challengeId),
}));
