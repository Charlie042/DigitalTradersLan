import { Link } from '@tanstack/react-router';
import { mockTopics } from '../../../../data/mockDatabase';
import { TopicDetailProps } from './types';
import './index.scss';

export default function TopicDetail({ topicId }: TopicDetailProps) {
  const topic = mockTopics.find((t) => t.id === topicId);

  if (!topic) {
    return <div style={{ color: 'white' }}>Topic not found.</div>;
  }

  return (
    <div className="topic-detail fade-in">
      <div className="topic-header">
        <Link to="/dashboard" className="btn-back">← Back to Dashboard</Link>
        <div className="title-area">
          <span className="t-icon">{topic.icon}</span>
          <h1>{topic.title}</h1>
        </div>
      </div>

      <div className="subtopics-list">
        {topic.subTopics.map((sub) => (
          <div key={sub.id} className="subtopic-block">
            <div className="subtopic-head">
              <h2>{sub.title}</h2>
              <span className="badge">{sub.challenges.length} Challenges</span>
            </div>
            
            {sub.challenges.length === 0 ? (
              <div className="empty-state">More challenges coming soon...</div>
            ) : (
              <div className="challenges-grid">
                {sub.challenges.map((chal) => (
                  <Link 
                    key={chal.id} 
                    to="/dashboard/challenge/$challengeId"
                    params={{ challengeId: chal.id }}
                    className={`chal-card difficulty-${chal.difficulty.toLowerCase()}`}
                  >
                    <div className="chal-diff">{chal.difficulty}</div>
                    <h3>{chal.title}</h3>
                    <p>{chal.description}</p>
                    <div className="chal-reward">
                      💰 {chal.reward} Coins
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
