import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id:            serial('id').primaryKey(),
  fullName:      text('full_name').notNull(),
  email:         text('email').notNull().unique(),
  country:       text('country'),
  wantsUpdates:  boolean('wants_updates').default(true),
  hearAbout:     text('hear_about'),
  wishFeatures:  text('wish_features'),
  createdAt:     timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export type WaitlistInsert = typeof waitlist.$inferInsert;
