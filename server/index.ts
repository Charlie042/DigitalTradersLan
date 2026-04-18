import './crypto-polyfill.js';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import waitlistRouter from './routes/waitlist.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Behind Railway / other reverse proxies — needed for correct HTTPS-aware cookies and IPs
app.set('trust proxy', 1);

// ── MIDDLEWARE ──
/** Comma-separated list, e.g. https://www.site.com,https://site.com (www vs non-www). */
function parseCorsOrigins(): string[] {
  const raw = process.env.CORS_ORIGINS || process.env.FRONTEND_URL || 'http://localhost:5173';
  return raw
    .split(',')
    .map((s) => s.trim().replace(/\/$/, ''))
    .filter(Boolean);
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
  }),
);
app.use(cookieParser());
app.use(express.json());

// ── ROUTES ──
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/waitlist', waitlistRouter);

// ── START ──
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
