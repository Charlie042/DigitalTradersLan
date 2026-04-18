export default function Problem() {
  return (
    <section className="problem">
      <div className="prob-inner">
        <div>
          <div className="eyebrow" style={{ color: 'var(--coral)' }}><span className="bar"></span>The problem</div>
          <h2 className="section-h">The tools <span style={{ color: 'var(--coral)' }}>failed</span> you.<br/>Not the other way around.</h2>
          <p className="section-body">Consistent backtesting can improve a trader's decision accuracy by up to 50%. Yet the platforms that exist are expensive, disengaging, and nothing like real market conditions. Your confidence should not be the price of poor tooling.</p>
        </div>
        <div className="prob-cards">
          <div className="prob-card">
            <div className="prob-tag">Problem 01</div>
            <h4>Way Too Expensive</h4>
            <p>Premium tools cost more than a beginner's entire budget. Locked behind subscriptions nobody asked for.</p>
          </div>
          <div className="prob-card">
            <div className="prob-tag">Problem 02</div>
            <h4>Zero Engagement</h4>
            <p>Boring interfaces that kill motivation before your first real session is even over.</p>
          </div>
          <div className="prob-card">
            <div className="prob-tag">Problem 03</div>
            <h4>No Real Insights</h4>
            <p>You lose and don't know why. Raw data dumps with zero context on how to improve.</p>
          </div>
          <div className="prob-card">
            <div className="prob-tag">Problem 04</div>
            <h4>Fake Conditions</h4>
            <p>Sanitised simulations that look nothing like real market volatility. Practice that doesn't prepare you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
