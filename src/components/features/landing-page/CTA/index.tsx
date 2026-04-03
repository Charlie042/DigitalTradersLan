import './index.scss';
import { CTAProps } from './types';

export default function CTA({ onOpenAuth }: CTAProps) {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-corner-tl"></div>
      <div className="cta-corner-br"></div>
      <div className="cta-inner">
        <div className="eyebrow"><span className="bar"></span>Early Access</div>
        <div className="cta-hl">Stop guessing.<br/><span className="blk">Start winning.</span></div>
        <p className="cta-body">Join the DigitalTradersLab waitlist. Be first to train smarter, earn rewards, and build the trading confidence you actually deserve.</p>
        <a href="#" className="btn btn-coral" style={{ fontSize: '1.1rem', padding: '1.1rem 3rem' }} onClick={(e) => { e.preventDefault(); onOpenAuth(); }}>
          Get Early Access — It's Free ⚡
        </a>
        <p className="cta-fine">No credit card. No live trading. No excuses.</p>
      </div>
    </section>
  );
}
