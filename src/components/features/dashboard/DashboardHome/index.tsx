import { Link } from '@tanstack/react-router';
import { mockUserStats, mockTopics } from '../../../../data/mockDatabase';
import './index.scss';

export default function DashboardHome() {
  return (
    <div className="dash-home">
      {/* Top Action Bar */}
      <div className="action-bar">
        <div className="search-box">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search topics, strategies..." />
        </div>
        <button className="btn-fire">
          🔥 Random Mode
        </button>
      </div>

      {/* Analytics Header */}
      <div className="stats-board">
        <div className="stat-card">
          <div className="stat-label">🔥 Current Streak</div>
          <div className="stat-value">{mockUserStats.streak} Days</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">💰 Total Coins</div>
          <div className="stat-value">{mockUserStats.totalCoins}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">✅ Challenges Completed</div>
          <div className="stat-value">{mockUserStats.challengesCompleted}</div>
        </div>
      </div>

      <div className="section-title">
        <div className="eyebrow"><span className="bar"></span>Training Grounds</div>
        <h2>Available Topics</h2>
      </div>

      {/* Topics Grid */}
      <div className="topics-grid">
        {mockTopics.map((topic) => (
          <Link
            key={topic.id}
            to="/dashboard/topic/$topicId"
            params={{ topicId: topic.id }}
            className="topic-card"
          >
            <div className="topic-icon">{topic.icon}</div>
            <div className="topic-body">
              <h3>{topic.title}</h3>
              <p>{topic.subTopics.length} Subtopics Available</p>
            </div>
            <div className="topic-arrow">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
