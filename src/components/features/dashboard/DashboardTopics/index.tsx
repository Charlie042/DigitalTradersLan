import { Link } from '@tanstack/react-router';
import { mockTopics } from '../../../../data/mockDatabase';
import './index.scss';

const topicAccents: Record<string, { color: string; progress: number; description: string }> = {
  'candlesticks':    { color: '#1B4DFF', progress: 65, description: 'Master the language of the markets with deep dives into candlestick anatomy and patterns.' },
  'market-structure':{ color: '#FF3D5A', progress: 30, description: 'Understand the flow of price delivery, identifying breaks, changes of character, and trends.' },
  'liquidity':       { color: '#7C3AED', progress: 10, description: 'Learn where the money rests, stop hunts, and how smart money engineers liquidity.' },
};

export default function DashboardTopics() {
  return (
    <div className="dash-topics">
      <div className="page-header">
        <h1 className="page-title">All Topics</h1>
        <p className="page-sub">Explore the complete curriculum and level up your trading skills.</p>
      </div>

      <div className="topic-grid">
        {mockTopics.map((topic) => {
          const accent = topicAccents[topic.id] ?? { 
            color: '#8A8880', 
            progress: 0, 
            description: 'Dive deep into advanced trading concepts and elevate your execution.' 
          };
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
              <div className="topic-desc">{accent.description}</div>
              <div className="topic-count">{topic.subTopics.length} subtopics · {totalChallenges} challenges</div>
              <div className="topic-progress-wrap">
                <div 
                  className="topic-progress-bar" 
                  style={{ width: `${accent.progress}%`, background: accent.color }} 
                />
              </div>
              <div className="topic-prog-label">{progressLabel}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
