import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { mockTopics, mockUserStats, SubTopic } from '../../../../data/mockDatabase';
import { TopicDetailProps } from './types';
import './index.scss';

const difficultyColors: Record<string, string> = {
  Easy:   'var(--lime)',
  Medium: 'var(--amber)',
  Hard:   'var(--coral)',
};

function getSubtopicStatus(sub: SubTopic): 'done' | 'inprogress' | 'new' | 'locked' {
  if (sub.challenges.length === 0) return 'locked';
  // simple heuristic — first subtopic done, second in progress, rest new
  return 'new';
}

export default function TopicDetail({ topicId }: TopicDetailProps) {
  const topic = mockTopics.find((t) => t.id === topicId);
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);

  if (!topic) {
    return <div style={{ padding: '2rem', color: 'var(--black)' }}>Topic not found.</div>;
  }

  const selectedSub = topic.subTopics.find((s) => s.id === selectedSubId) ?? null;
  const totalChallenges = topic.subTopics.reduce((acc, s) => acc + s.challenges.length, 0);

  /* ── SCREEN 1: SUBTOPICS ── */
  if (!selectedSub) {
    return (
      <div className="tf-page fade-in">
        <div className="tf-topbar">
          <Link to="/dashboard" className="back-btn">← Back</Link>
          <div className="topbar-chips">
            <div className="chip streak">🔥 <span className="chip-val">{mockUserStats.streak}</span></div>
            <div className="chip coins">🪙 <span className="chip-val">{mockUserStats.totalCoins.toLocaleString()}</span></div>
          </div>
        </div>

        {/* Topic Hero */}
        <div className="topic-hero">
          <div className="topic-eyebrow">Topic</div>
          <h1>{topic.title}</h1>
          <div className="topic-hero-meta">
            <div className="topic-meta-item">📚 <strong>{topic.subTopics.length}</strong> subtopics</div>
            <div className="topic-meta-item">🎯 <strong>{totalChallenges}</strong> challenges</div>
          </div>
        </div>

        <div className="subtopic-section-label">Choose a Subtopic</div>

        <div className="subtopics-list">
          {topic.subTopics.map((sub, i) => {
            const status = getSubtopicStatus(sub);
            return (
              <div
                key={sub.id}
                className="subtopic-row"
                onClick={() => sub.challenges.length > 0 && setSelectedSubId(sub.id)}
                style={{ cursor: sub.challenges.length > 0 ? 'pointer' : 'default' }}
              >
                <div className="st-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="st-info">
                  <div className="st-name">{sub.title}</div>
                  <div className="st-meta">{sub.challenges.length} challenges</div>
                </div>
                <div className="st-progress-wrap">
                  <div className="st-progress-bar" style={{ width: status === 'done' ? '100%' : status === 'inprogress' ? '33%' : '0%', background: status === 'done' ? 'var(--lime)' : 'var(--amber)' }} />
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

  /* ── SCREEN 2: CHALLENGES ── */
  return (
    <div className="tf-page fade-in">
      <div className="tf-topbar">
        <div className="back-btn" onClick={() => setSelectedSubId(null)} style={{ cursor: 'pointer' }}>← Subtopics</div>
        <div className="topbar-chips">
          <div className="chip streak">🔥 <span className="chip-val">{mockUserStats.streak}</span></div>
          <div className="chip coins">🪙 <span className="chip-val">{mockUserStats.totalCoins.toLocaleString()}</span></div>
        </div>
      </div>

      {/* Subtopic Hero */}
      <div className="subtopic-hero">
        <div className="topic-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>{topic.title} →</div>
        <h2>{selectedSub.title}</h2>
        <div className="subtopic-desc">
          {selectedSub.challenges.length === 0
            ? 'No challenges available yet — check back soon.'
            : `${selectedSub.challenges.length} challenge${selectedSub.challenges.length === 1 ? '' : 's'} available in this subtopic.`}
        </div>
      </div>

      {selectedSub.challenges.length === 0 ? (
        <div className="empty-state">More challenges coming soon...</div>
      ) : (
        <div className="challenges-grid">
          {selectedSub.challenges.map((chal, i) => (
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
                    <span className={`tag tag-${chal.difficulty.toLowerCase()}`}>{chal.difficulty}</span>
                    <span className="tag tag-q">{chal.questions.length} questions</span>
                  </div>
                </div>
                <div className="cc-right">
                  <div className="cc-reward">🪙 +{chal.reward} XP</div>
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
