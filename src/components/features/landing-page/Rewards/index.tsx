import './index.scss';

export default function Rewards() {
  return (
    <section className="rewards" id="rewards">
      <div className="rewards-inner">
        <div className="rewards-header">
          <div className="eyebrow" style={{ color: 'var(--violet)', justifyContent: 'center' }}><span className="bar" style={{ background: 'var(--violet)' }}></span>Gamification</div>
          <h2 className="section-h">Practice that feels like <span style={{ color: 'var(--violet)' }}>playing.</span></h2>
          <p className="section-body" style={{ maxWidth: '480px', margin: '0 auto' }}>Every session adds to a reward system built to celebrate consistency — not luck.</p>
        </div>
        <div className="rewards-grid">
          <div className="reward-card">
            <span className="r-emoji">🏆</span>
            <h4>Points</h4>
            <p>Every correct answer earns you points. Keep stacking.</p>
          </div>
          <div className="reward-card">
            <span className="r-emoji">🔥</span>
            <h4>Streaks</h4>
            <p>Daily consistency rewarded. Keep the flame alive.</p>
          </div>
          <div className="reward-card">
            <span className="r-emoji">🎖️</span>
            <h4>Badges</h4>
            <p>Unlock achievements for milestones and mastery.</p>
          </div>
          <div className="reward-card">
            <span className="r-emoji">⬆️</span>
            <h4>Levels</h4>
            <p>Progress through tiers as your real skill grows.</p>
          </div>
        </div>
        <div className="coming-strip">
          <span className="c-tag">Coming Soon</span>
          <p>Token rewards redeemable for real trading benefits — including discounted funded accounts. Your practice will literally pay off.</p>
        </div>
      </div>
    </section>
  );
}
