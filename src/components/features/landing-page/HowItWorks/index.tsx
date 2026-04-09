import './index.scss';

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="how-inner">
        <div className="how-header">
          <div className="eyebrow how-eyebrow"><span className="bar"></span>How it works</div>
          <h2 className="section-h" style={{ color: 'var(--white)', textAlign: 'center', fontSize: 'clamp(3rem,7vw,6rem)' }}>Four steps to <span style={{ color: 'var(--electric)' }}>your edge.</span></h2>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-n">01</div>
            <h3>Sign Up In Seconds</h3>
            <p>Google Authentication only. One click and you're in. No forms, no friction — your practice environment is ready immediately.</p>
          </div>
          <div className="step-card">
            <div className="step-n">02</div>
            <h3>Pick Your Topic & Level</h3>
            <p>Choose a trading topic and starting difficulty. Questions are randomised every session — just like real markets, unpredictable by design.</p>
          </div>
          <div className="step-card">
            <div className="step-n">03</div>
            <h3>Answer. Learn. Repeat.</h3>
            <p>Real market scenarios. Instant feedback with market-based explanations. Retry anything you miss until it truly sticks.</p>
          </div>
          <div className="step-card">
            <div className="step-n">04</div>
            <h3>Earn Rewards & Track Your Growth</h3>
            <p>Points, streaks, badges — instant and automatic. Your dashboard updates in real time. Know where you stand, always.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
