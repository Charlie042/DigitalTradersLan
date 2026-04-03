import './index.scss';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        <div className="stat-block">
          <span className="stat-val">50%</span>
          <span className="stat-lbl">Decision accuracy improvement</span>
        </div>
        <div className="stat-block">
          <span className="stat-val">$0</span>
          <span className="stat-lbl">Risk while you practice</span>
        </div>
        <div className="stat-block">
          <span className="stat-val">∞</span>
          <span className="stat-lbl">Historical market scenarios</span>
        </div>
        <div className="stat-block">
          <span className="stat-val">1</span>
          <span className="stat-lbl">Click to get started</span>
        </div>
      </div>
    </section>
  );
}
