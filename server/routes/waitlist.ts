import { Router, Request, Response } from 'express';
import { db } from '../db/index.js';
import { waitlist } from '../db/schema.js';
import { sendWaitlistConfirmationEmail } from '../email/waitlistConfirmation.js';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { fullName, email, country, wantsUpdates, hearAbout, wishFeatures } = req.body;

  if (!fullName?.trim() || !email?.trim()) {
    res.status(400).json({ error: 'Name and email are required.' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email address.' });
    return;
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedName = fullName.trim();

    await db.insert(waitlist).values({
      fullName: trimmedName,
      email: normalizedEmail,
      country: country?.trim() || null,
      wantsUpdates: wantsUpdates ?? true,
      hearAbout: hearAbout?.trim() || null,
      wishFeatures: wishFeatures?.trim() || null,
    });

    res.status(201).json({ message: 'You have been added to the waitlist.' });

    void sendWaitlistConfirmationEmail({
      to: normalizedEmail,
      fullName: trimmedName,
    }).then((result) => {
      if (!result.sent) {
        console.warn('[waitlist] Confirmation email not sent:', result.reason);
      }
    });
  } catch (err: unknown) {
    // Postgres unique violation = 23505
    if (err instanceof Error && 'code' in err && (err as NodeJS.ErrnoException).code === '23505') {
      res.status(409).json({ error: 'This email is already on the waitlist.' });
      return;
    }
    console.error('Waitlist insert error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

export default router;
