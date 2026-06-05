import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  // List TS modules explicitly so drizzle-kit resolves them (avoids CJS `require('./file.js')`
  // when only `file.ts` exists on disk).
  schema: [
    './db/schema/enums.ts',
    './db/schema/users.ts',
    './db/schema/topics.ts',
    './db/schema/questions.ts',
    './db/schema/progress.ts',
    './db/schema/rewards.ts',
    './db/schema/relations.ts',
  ],
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
