import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import waitlistRouter from './routes/waitlist.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Behind Railway / other reverse proxies — needed for correct HTTPS-aware cookies and IPs
app.set('trust proxy', 1);

// ── MIDDLEWARE ──
const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// ── ROUTES ──
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/waitlist', waitlistRouter);

// ── START ──
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
