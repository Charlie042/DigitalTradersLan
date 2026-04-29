import { relations } from 'drizzle-orm';
import { users } from './users';
import { topics, subtopics, challenges } from './topics';
import {
  questions,
  challengeQuestions,
  mcqOptions,
  questionAssets,
  dataAnalysisAnswers,
} from './questions';
import { submissions, userProgress } from './progress';
import { userStats, userChallengeCompletions } from './rewards';

export const usersRelations = relations(users, ({ many, one }) => ({
  submissions: many(submissions),
  progress: many(userProgress),
  stats: one(userStats),
  challengeCompletions: many(userChallengeCompletions),
  createdQuestions: many(questions),
}));

export const topicsRelations = relations(topics, ({ many }) => ({
  subtopics: many(subtopics),
  questions: many(questions),
}));

export const subtopicsRelations = relations(subtopics, ({ one, many }) => ({
  topic: one(topics, { fields: [subtopics.topicId], references: [topics.id] }),
  challenges: many(challenges),
  questions: many(questions),
}));

export const challengesRelations = relations(challenges, ({ one, many }) => ({
  subtopic: one(subtopics, { fields: [challenges.subtopicId], references: [subtopics.id] }),
  challengeQuestions: many(challengeQuestions),
  completions: many(userChallengeCompletions),
}));

export const questionsRelations = relations(questions, ({ one, many }) => ({
  topic: one(topics, { fields: [questions.topicId], references: [topics.id] }),
  subtopic: one(subtopics, { fields: [questions.subtopicId], references: [subtopics.id] }),
  author: one(users, { fields: [questions.createdByUserId], references: [users.id] }),
  mcqOptions: many(mcqOptions),
  assets: many(questionAssets),
  dataAnalysisAnswer: one(dataAnalysisAnswers, {
    fields: [questions.id],
    references: [dataAnalysisAnswers.questionId],
  }),
  submissions: many(submissions),
  userProgress: many(userProgress),
  challengeQuestions: many(challengeQuestions),
}));

export const challengeQuestionsRelations = relations(challengeQuestions, ({ one }) => ({
  challenge: one(challenges, { fields: [challengeQuestions.challengeId], references: [challenges.id] }),
  question: one(questions, { fields: [challengeQuestions.questionId], references: [questions.id] }),
}));

export const mcqOptionsRelations = relations(mcqOptions, ({ one }) => ({
  question: one(questions, { fields: [mcqOptions.questionId], references: [questions.id] }),
}));

export const questionAssetsRelations = relations(questionAssets, ({ one }) => ({
  question: one(questions, { fields: [questionAssets.questionId], references: [questions.id] }),
}));

export const dataAnalysisAnswersRelations = relations(dataAnalysisAnswers, ({ one }) => ({
  question: one(questions, { fields: [dataAnalysisAnswers.questionId], references: [questions.id] }),
}));

export const submissionsRelations = relations(submissions, ({ one }) => ({
  user: one(users, { fields: [submissions.userId], references: [users.id] }),
  question: one(questions, { fields: [submissions.questionId], references: [questions.id] }),
}));

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, { fields: [userProgress.userId], references: [users.id] }),
  question: one(questions, { fields: [userProgress.questionId], references: [questions.id] }),
}));

export const userStatsRelations = relations(userStats, ({ one }) => ({
  user: one(users, { fields: [userStats.userId], references: [users.id] }),
}));

export const userChallengeCompletionsRelations = relations(userChallengeCompletions, ({ one }) => ({
  user: one(users, { fields: [userChallengeCompletions.userId], references: [users.id] }),
  challenge: one(challenges, {
    fields: [userChallengeCompletions.challengeId],
    references: [challenges.id],
  }),
}));
