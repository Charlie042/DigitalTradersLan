import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { TopicDetailProps } from './types';
import './index.scss';
import { useGetTopicById, useGetStats, CatalogSubTopic } from '../hooks/useTopic';
import { SubtopicRowSkeleton } from '../Skeleton';

const difficultyColors: Record<string, string> = {
  easy:   'var(--lime)',
  medium: 'var(--amber)',
  hard:   'var(--coral)',
};

function getSubtopicStatus(sub: CatalogSubTopic): 'done' | 'inprogress' | 'new' | 'locked' {
  if (!sub.challenges) return 'locked';
  return 'new';
}

export default function TopicDetail({ topicId }: TopicDetailProps) {
  const { data: topic, isLoading, error } = useGetTopicById(topicId);
  const { data: stats } = useGetStats();
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="tf-page">
        <div className="tf-topbar">
          <div className="back-btn" style={{ opacity: 0.4 }}>← Back</div>
        </div>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[0, 1, 2, 3].map((i) => <SubtopicRowSkeleton key={i} />)}
        </div>
      </div>
    );
  }

  if (error || !topic) {
    return <div className="tf-page"><div style={{ padding: '2rem' }}>Failed to load topic.</div></div>;
  }

  const selectedSub = selectedSubId
    ? (topic.subTopics?.find(s => s.id === selectedSubId) ?? null)
    : null;

  /* ── SCREEN 2: CHALLENGES ── */
  if (selectedSub) {
    const challenges = selectedSub.challenges ?? [];
    return (
      <div className="tf-page fade-in">
        <div className="tf-topbar">
          <div className="back-btn" onClick={() => setSelectedSubId(null)} style={{ cursor: 'pointer' }}>← Subtopics</div>
          <div className="topbar-chips">
            <div className="chip streak">🔥 <span className="chip-val">{stats?.streak ?? 0}</span></div>
            <div className="chip coins">🪙 <span className="chip-val">{(stats?.totalXp ?? 0).toLocaleString()}</span></div>
          </div>
        </div>

        <div className="subtopic-hero">
          <div className="topic-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>{topic.title} →</div>
          <h2>{selectedSub.title}</h2>
          <div className="subtopic-desc">
            {challenges.length === 0
              ? 'No challenges available yet — check back soon.'
              : `${challenges.length} challenge${challenges.length === 1 ? '' : 's'} available in this subtopic.`}
          </div>
        </div>

        {challenges.length === 0 ? (
          <div className="empty-state">More challenges coming soon...</div>
        ) : (
          <div className="challenges-grid">
            {challenges.map((chal, i) => (
              <Link
                key={chal.id}
                to="/dashboard/challenge/$challengeId"
                params={{ challengeId: chal.id }}
                className="challenge-card"
              >
                <div className="cc-accent" style={{ background: difficultyColors[chal.difficulty] ?? 'var(--muted)' }} />
                <div className="cc-body">
                  <div className="cc-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="cc-info">
                    <div className="cc-title">{chal.title}</div>
                    <div className="cc-desc">{chal.description}</div>
                    <div className="cc-tags">
                      <span className={`tag tag-${chal.difficulty}`}>{chal.difficulty}</span>
                    </div>
                  </div>
                  <div className="cc-right">
                    <div className="cc-reward">🪙 +{chal.rewardXp} XP</div>
                    <button className="cc-btn start">Start</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ── SCREEN 1: SUBTOPICS ── */
  return (
    <div className="tf-page fade-in">
      <div className="tf-topbar">
        <Link to="/dashboard" className="back-btn">← Back</Link>
        <div className="topbar-chips">
          <div className="chip streak">🔥 <span className="chip-val">{stats?.streak ?? 0}</span></div>
          <div className="chip coins">🪙 <span className="chip-val">{(stats?.totalXp ?? 0).toLocaleString()}</span></div>
        </div>
      </div>

      <div className="topic-hero">
        <div className="topic-eyebrow">Topic</div>
        <h1>{topic.title}</h1>
        <div className="topic-hero-meta">
          <div className="topic-meta-item">📚 <strong>{topic.subTopics?.length ?? 0}</strong> subtopics</div>
        </div>
      </div>

      <div className="subtopic-section-label">Choose a Subtopic</div>

      <div className="subtopics-list">
        {topic.subTopics?.map((sub, i) => {
          const status = getSubtopicStatus(sub);
          const isUnlocked = sub.challenges !== null;
          return (
            <div
              key={sub.id}
              className="subtopic-row"
              onClick={() => isUnlocked && setSelectedSubId(sub.id)}
              style={{ cursor: isUnlocked ? 'pointer' : 'default' }}
            >
              <div className="st-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="st-info">
                <div className="st-name">{sub.title}</div>
                <div className="st-meta">
                  {!sub.challenges ? 'No challenges available yet' : `${sub.challenges.length} challenges`}
                </div>
              </div>
              <div className="st-progress-wrap">
                <div
                  className="st-progress-bar"
                  style={{
                    width: status === 'done' ? '100%' : status === 'inprogress' ? '33%' : '0%',
                    background: status === 'done' ? 'var(--lime)' : 'var(--amber)',
                  }}
                />
              </div>
              <div className={`st-status st-${status}`}>
                {status === 'done' ? '✓ Done' : status === 'inprogress' ? 'In Progress' : status === 'new' ? 'New' : '🔒 Locked'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
