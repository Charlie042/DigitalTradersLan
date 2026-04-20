import { Link } from '@tanstack/react-router';
import { mockTopics } from '../../../../data/mockDatabase';
import { topicAccents } from '../../../../data/topicAccents';
import './index.scss';

export default function TopicsPage() {
  return (
    <div className="topics-page">
      <div className="topics-topbar">
        <Link to="/dashboard" className="topics-back">← Dashboard</Link>
      </div>
      <div className="topics-header">
        <div className="topics-eyebrow">Catalog</div>
        <h1 className="topics-title">All topics</h1>
        <p className="topics-sub">Pick a topic to drill into subtopics and challenges.</p>
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
    </div>
  );
}
