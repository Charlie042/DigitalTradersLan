import './crypto-polyfill.js';
import 'dotenv/config';
import express, { type ErrorRequestHandler } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import waitlistRouter from './routes/waitlist.js';
import authRouter from './routes/auth.js';
import catalogRouter from './routes/catalog.js';
import { isDbConnectionError } from './lib/http.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Behind Railway / other reverse proxies — needed for correct HTTPS-aware cookies and IPs
app.set('trust proxy', 1);

// ── MIDDLEWARE ──
const isProduction = process.env.NODE_ENV === 'production';

/** Local dev origins are always allowed outside production so the Vite dev server works. */
const DEV_ORIGINS = ['http://localhost:5173', 'http://127.0.0.1:5173'];

/**
 * Allowed browser origins. Merges CORS_ORIGINS and FRONTEND_URL (comma-separated, e.g.
 * https://www.site.com,https://site.com for www vs non-www) so setting one never silently
 * drops the other. Local dev origins are included unless NODE_ENV=production.
 */
function parseCorsOrigins(): string[] {
  const sources = [process.env.CORS_ORIGINS, process.env.FRONTEND_URL];
  const fromEnv = sources
    .filter((v): v is string => Boolean(v))
    .flatMap((raw) => raw.split(','))
    .map((s) => s.trim().replace(/\/$/, ''))
    .filter(Boolean);

  const all = isProduction ? fromEnv : [...fromEnv, ...DEV_ORIGINS];
  return [...new Set(all)];
}

app.use(
  cors({
    origin(origin, callback) {
      const allowed = parseCorsOrigins();
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowed.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  }),
);
app.use(cookieParser());
app.use(express.json());

// ── ROUTES ──
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/catalog', catalogRouter);
app.use('/api/waitlist', waitlistRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (isDbConnectionError(err)) {
    console.error('[db] connection error:', err);
    res.status(503).json({
      error: 'Database temporarily unavailable. Please try again in a moment.',
    });
    return;
  }

  console.error('[server] unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
};

app.use(errorHandler);

// ── START ──
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
