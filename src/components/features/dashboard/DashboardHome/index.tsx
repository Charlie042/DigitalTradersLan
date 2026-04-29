import { Link } from '@tanstack/react-router';
import { topicAccents } from '../../../../data/topicAccents';
import './index.scss';
import { useGetTopics, useGetStats, useGetRecentChallenges, useGetTopicProgress } from '../hooks/useTopic';
import { TopicCardSkeleton, ChallengeRowSkeleton, StatCardSkeleton } from '../Skeleton';

const difficultyIconBg: Record<string, string> = {
  easy: '#E8FFEE',
  medium: '#E8EEFF',
  hard: '#FFE8EC',
};

const streakDays = [true, true, true, false, false, false, false]; // last 7 days

export default function DashboardHome() {
  const { data: topics, isLoading, error } = useGetTopics();
  const { data: stats } = useGetStats();
  const { data: recentChallenges, isLoading: recentLoading } = useGetRecentChallenges();
  const { data: topicProgress } = useGetTopicProgress();

  const accuracy = stats && stats.submissionCount > 0
    ? Math.round((stats.correctSubmissionCount / stats.submissionCount) * 100)
    : 0;
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
        {topics?.map((topic) => {
          const accent = topicAccents[topic.id] ?? { color: '#8A8880' };
          const totalChallenges = topic.subTopics.reduce((acc, s) => acc + (s.challenges?.length ?? 0), 0);
          const progress = topicProgress?.[topic.id] ?? 0;
          const progressLabel = progress === 0 ? 'Not started' : `${progress}% complete`;

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
                <div className="topic-progress-bar" style={{ width: `${progress}%`, background: accent.color }} />
              </div>
              <div className="topic-prog-label">{progressLabel}</div>
            </Link>
          );
        })}

        {isLoading && [0, 1, 2, 3].map((i) => <TopicCardSkeleton key={i} />)}
      </div>

      {/* ── CONTINUE PLAYING ── */}
      <div className="section-header">
        <div className="section-label">Continue Where You Left Off</div>
      </div>

      <div className="challenges-list">
        {recentLoading && [0, 1, 2].map((i) => <ChallengeRowSkeleton key={i} />)}
        {!recentLoading && recentChallenges?.length === 0 && (
          <div style={{ padding: '1rem', opacity: 0.5 }}>No challenges started yet — pick a topic above to begin.</div>
        )}
        {recentChallenges?.map((ch) => (
          <Link
            key={ch.id}
            to="/dashboard/challenge/$challengeId"
            params={{ challengeId: ch.id }}
            className="challenge-row"
          >
            <div className="ch-icon" style={{ background: difficultyIconBg[ch.difficulty] ?? '#E8EEFF' }}>
              {ch.topicIcon ?? '📖'}
            </div>
            <div className="ch-info">
              <div className="ch-name">{ch.title}</div>
              <div className="ch-meta">
                {ch.topicTitle} · {ch.questionCount} questions
                <span className={`ch-diff diff-${ch.difficulty}`}>{ch.difficulty}</span>
              </div>
            </div>
            <div className="ch-reward">🪙 +{ch.rewardXp} XP</div>
            <div className={`ch-status status-${ch.status}`}>
              {ch.status === 'done' ? '✓ Done' : 'Continue'}
            </div>
          </Link>
        ))}
      </div>

      {/* ── BOTTOM STATS ── */}
      <div className="bottom-stats">
        {!stats ? (
          [0, 1, 2].map((i) => <StatCardSkeleton key={i} />)
        ) : (
          <>
            <div className="stat-card">
              <div className="stat-card-label">🔥 Current Streak</div>
              <span className="stat-card-val" style={{ color: 'var(--coral)' }}>{stats.streak}</span>
              <div className="stat-card-sub">days in a row</div>
              <div className="streak-dots">
                {streakDays.map((on, i) => (
                  <div key={i} className={`streak-dot ${i === 6 ? 'today' : on ? 'on' : 'off'}`} />
                ))}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-label">🎯 Accuracy</div>
              <span className="stat-card-val" style={{ color: 'var(--lime)' }}>{accuracy}%</span>
              <div className="stat-card-sub">across all challenges</div>
              <div className="acc-bar-wrap">
                <div className="acc-bar" style={{ width: `${accuracy}%` }} />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-label">🪙 Total XP</div>
              <span className="stat-card-val" style={{ color: 'var(--amber)' }}>{stats.totalXp.toLocaleString()}</span>
              <div className="stat-card-sub">{stats.challengesCompleted} challenges completed</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
