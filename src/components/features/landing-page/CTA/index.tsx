import './index.scss';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-corner-tl"></div>
      <div className="cta-corner-br"></div>
      <div className="cta-inner">
        <div className="eyebrow"><span className="bar"></span>Train smarter</div>
        <div className="cta-hl">Stop guessing.<br/><span className="blk">Start winning.</span></div>
        <p className="cta-body">
          DigitalTradersLab turns practice into progress — structured challenges, instant feedback, and rewards that keep you coming back. No live capital on the line.
        </p>
        <p className="cta-fine">No credit card. No live trading. No excuses.</p>
      </div>
    </section>
  );
}
