import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';

/** Google OAuth users — refresh token stored server-side only. */
export const users = pgTable('users', {
  id:                  serial('id').primaryKey(),
  googleSub:           text('google_sub').notNull().unique(),
  email:               text('email').notNull(),
  name:                text('name'),
  picture:             text('picture'),
  googleRefreshToken:  text('google_refresh_token'),
  createdAt:           timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt:           timestamp('updated_at', { withTimezone: true }).defaultNow(),
});


export type UserSelect = typeof users.$inferSelect;

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
