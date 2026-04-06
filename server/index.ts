import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import waitlistRouter from './routes/waitlist.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ── MIDDLEWARE ──
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
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
