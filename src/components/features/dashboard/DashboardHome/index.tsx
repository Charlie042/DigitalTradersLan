import { Link } from '@tanstack/react-router';
import { mockUserStats, mockTopics } from '../../../../data/mockDatabase';
import { topicAccents } from '../../../../data/topicAccents';
import './index.scss';

const recentChallenges = [
  {
    icon: '🕯️',
    iconBg: '#E8EEFF',
    name: 'Bullish Engulfing — The Setup',
    topic: 'Candlesticks',
    questions: 8,
    difficulty: 'Medium' as const,
    reward: 120,
    status: 'continue' as const,
    challengeId: 'chal-bull-med-1',
  },
  {
    icon: '📐',
    iconBg: '#FFE8EC',
    name: 'Break of Structure — Identifying BOS',
    topic: 'Market Structure',
    questions: 10,
    difficulty: 'Easy' as const,
    reward: 80,
    status: 'start' as const,
    challengeId: 'chal-bull-easy-1',
  },
  {
    icon: '⚖️',
    iconBg: '#F0EBFF',
    name: 'Position Sizing Masterclass',
    topic: 'Risk Management',
    questions: 6,
    difficulty: 'Hard' as const,
    reward: 200,
    status: 'done' as const,
    challengeId: 'chal-bull-easy-1',
  },
];

const streakDays = [true, true, true, false, false, false, false]; // last 7 days

export default function DashboardHome() {
  return (
    <div className="dash-home">

      {/* ── FIRE MODE BANNER ── */}
      <Link to="/dashboard/fire-mode" className="fire-banner">
        <div className="fire-left">
          <div className="fire-tag">Quick Play</div>
          <div className="fire-title">🔥 Random <span className="hl">Fire Mode</span></div>
          <div className="fire-sub">Mixed questions from all topics. No structure. Pure knowledge.</div>
        </div>
        <div className="fire-right">
          <div className="fire-emoji">⚡</div>
          <span className="btn-fire">Play Now</span>
        </div>
      </Link>

      {/* ── TOPICS ── */}
      <div className="section-header">
        <div className="section-label">Choose a Topic</div>
        <Link to="/dashboard/topics" className="see-all">View All →</Link>
      </div>

      <div className="topic-grid">
        {mockTopics.map((topic) => {
          const accent = topicAccents[topic.id] ?? { color: '#8A8880', progress: 0 };
          const totalChallenges = topic.subTopics.reduce((acc, s) => acc + s.challenges.length, 0);
          const progressLabel = accent.progress === 0 ? 'Not started' : `${accent.progress}% complete`;

          return (
            <Link
              key={topic.id}
              to="/dashboard/topic/$topicId"
              params={{ topicId: topic.id }}
              className="topic-card"
            >
              <div className="topic-accent" style={{ background: accent.color }} />
              <span className="topic-icon">{topic.icon}</span>
              <div className="topic-name">{topic.title}</div>
              <div className="topic-count">{topic.subTopics.length} subtopics · {totalChallenges} challenges</div>
              <div className="topic-progress-wrap">
                <div className="topic-progress-bar" style={{ width: `${accent.progress}%`, background: accent.color }} />
              </div>
              <div className="topic-prog-label">{progressLabel}</div>
            </Link>
          );
        })}
      </div>

      {/* ── CONTINUE PLAYING ── */}
      <div className="section-header">
        <div className="section-label">Continue Where You Left Off</div>
      </div>

      <div className="challenges-list">
        {recentChallenges.map((ch, i) => (
          <Link
            key={i}
            to="/dashboard/challenge/$challengeId"
            params={{ challengeId: ch.challengeId }}
            className="challenge-row"
          >
            <div className="ch-icon" style={{ background: ch.iconBg }}>{ch.icon}</div>
            <div className="ch-info">
              <div className="ch-name">{ch.name}</div>
              <div className="ch-meta">
                {ch.topic} · {ch.questions} questions
                <span className={`ch-diff diff-${ch.difficulty.toLowerCase()}`}>{ch.difficulty}</span>
              </div>
            </div>
            <div className="ch-reward">🪙 +{ch.reward} XP</div>
            <div className={`ch-status status-${ch.status}`}>
              {ch.status === 'done' ? '✓ Done' : ch.status === 'continue' ? 'Continue' : 'Start'}
            </div>
          </Link>
        ))}
      </div>

      {/* ── BOTTOM STATS ── */}
      <div className="bottom-stats">
        <div className="stat-card">
          <div className="stat-card-label">🔥 Current Streak</div>
          <span className="stat-card-val" style={{ color: 'var(--coral)' }}>{mockUserStats.streak}</span>
          <div className="stat-card-sub">days in a row</div>
          <div className="streak-dots">
            {streakDays.map((on, i) => (
              <div key={i} className={`streak-dot ${i === 6 ? 'today' : on ? 'on' : 'off'}`} />
            ))}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-label">🎯 Accuracy</div>
          <span className="stat-card-val" style={{ color: 'var(--lime)' }}>72%</span>
          <div className="stat-card-sub">across all challenges</div>
          <div className="acc-bar-wrap">
            <div className="acc-bar" style={{ width: '72%' }} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-label">🪙 Total Coins</div>
          <span className="stat-card-val" style={{ color: 'var(--amber)' }}>{mockUserStats.totalCoins.toLocaleString()}</span>
          <div className="stat-card-sub">+120 earned today</div>
          <div className="coins-tag">Funded Account: 4,550 away</div>
        </div>
      </div>
    </div>
  );
}
