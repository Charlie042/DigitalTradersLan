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
const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
}));
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
