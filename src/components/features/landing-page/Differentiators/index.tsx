import './index.scss';

export default function Differentiators() {
  return (
    <section className="diff">
      <div className="diff-inner">
        <div className="eyebrow diff-eyebrow"><span className="bar"></span>Why DigitalTradersLab</div>
        <h2 className="section-h" style={{ color: 'var(--white)' }}>Built different.<br/><span style={{ color: 'var(--electric)' }}>On purpose.</span></h2>
        <p className="section-body diff-body">We didn't copy what exists. We built the platform we wished existed when we were learning to trade.</p>
        <div className="tag-cloud">
          <div className="d-tag blue">Real Historical Data</div>
          <div className="d-tag white">Instant Feedback</div>
          <div className="d-tag coral">Behavioral Insights</div>
          <div className="d-tag lime">Zero Real Money Risk</div>
          <div className="d-tag violet">Confidence-First Design</div>
          <div className="d-tag white">Randomised Scenarios</div>
          <div className="d-tag blue">Self-Paced Learning</div>
          <div className="d-tag coral">Discipline Over Guesswork</div>
          <div className="d-tag lime">Grows With Your Skill</div>
          <div className="d-tag outline">Built For Beginners</div>
          <div className="d-tag violet">No Brokerage Required</div>
        </div>
      </div>
    </section>
  );
}
