import { pgEnum } from 'drizzle-orm/pg-core';

export const difficultyEnum = pgEnum('difficulty_level', ['easy', 'medium', 'hard']);
export const questionTypeEnum = pgEnum('question_type', ['mcq', 'data_analysis']);
export const questionStatusEnum = pgEnum('question_status', ['draft', 'published', 'archived']);
export const submissionStatusEnum = pgEnum('submission_status', ['correct', 'incorrect', 'partial']);
export const progressStatusEnum = pgEnum('progress_status', ['attempted', 'solved', 'skipped']);
export const assetTypeEnum = pgEnum('asset_type', [
  'chart_image',
  'dataset_csv',
  'dataset_json',
  'image',
  'video',
]);
