import './index.scss';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-inner">
        <div className="features-top">
          <div>
            <div className="eyebrow" style={{ color: 'var(--electric)' }}><span className="bar"></span>What you get</div>
            <h2 className="section-h" style={{ marginBottom: 0 }}>Three systems.<br/>One mission.</h2>
          </div>
          <p style={{ maxWidth: '300px', fontSize: '0.95rem', color: 'rgba(13,13,13,0.6)', lineHeight: 1.8 }}>Everything you need to go from guessing to consistent — built with intention, tested with purpose.</p>
        </div>
        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">🧠</div>
            <div className="feat-num">01</div>
            <h3>Challenge Engine</h3>
            <p>Quiz-style questions from real historical data. Predict direction, identify setups, choose entries. Full explanation after every answer.</p>
          </div>
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">🎮</div>
            <div className="feat-num">02</div>
            <h3>Gamified Rewards</h3>
            <p>Points, badges, levels, streaks — automatic and instant. Every correct call, every consistent session adds up.</p>
          </div>
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">📊</div>
            <div className="feat-num">03</div>
            <h3>Performance Dashboard</h3>
            <p>Real-time accuracy tracking. Streak graphs. Weak zone alerts. See exactly how you're improving — in numbers that matter.</p>
          </div>
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">🎯</div>
            <div className="feat-num">04</div>
            <h3>Level-Based Progression</h3>
            <p>Start at your level. Questions get harder as you get better — keeping you in the zone of maximum growth.</p>
          </div>
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">📈</div>
            <div className="feat-num">05</div>
            <h3>Real Market Simulation</h3>
            <p>All questions derived from real historical price action — the same ambiguity and volatility you'll face live.</p>
          </div>
          <div className="feat-card">
            <div className="feat-accent"></div>
            <div className="feat-icon">🔍</div>
            <div className="feat-num">06</div>
            <h3>Behavioral Insights</h3>
            <p>Understand your decision patterns under pressure. Build the self-awareness that separates consistent traders from gamblers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
