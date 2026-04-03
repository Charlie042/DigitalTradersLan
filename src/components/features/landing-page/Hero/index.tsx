import './index.scss';
import { HeroProps } from './types';

export default function Hero({ onOpenAuth }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-corner-tl"></div>
      <div className="hero-corner-br"></div>

      {/* floating deco */}
      <div className="deco" style={{top:'20%', left:'7%', fontFamily:'"Bebas Neue",sans-serif', fontSize:'2rem', color:'var(--coral)', animationDelay:'0s'}}>✦</div>
      <div className="deco" style={{top:'25%', right:'8%', fontSize:'2rem', color:'var(--electric)', animationDelay:'0.8s'}}>⚡</div>
      <div className="deco" style={{bottom:'30%', left:'9%', width:'32px', height:'32px', borderRadius:'50%', background:'var(--lime)', border:'3px solid var(--black)', animationDelay:'0.4s'}}></div>
      <div className="deco" style={{bottom:'28%', right:'7%', width:'26px', height:'26px', borderRadius:'50%', background:'var(--violet)', border:'3px solid var(--black)', animationDelay:'1.2s'}}></div>
      <div className="deco" style={{top:'38%', left:'15%', fontSize:'1.4rem', color:'var(--violet)', animationDelay:'1.8s'}}>★</div>
      <div className="deco" style={{top:'32%', right:'16%', width:'20px', height:'20px', borderRadius:'50%', background:'var(--cyan)', border:'2.5px solid var(--black)', animationDelay:'0.6s'}}></div>

      <div className="hero-badge">
        <span className="badge-pulse"></span>
        Beta launching soon — join the waitlist
      </div>

      <div className="hero-hl">
        <span className="l1">TRAIN.</span>
        <span className="l2">EARN.</span>
        <span className="l3">DOMINATE THE MARKET.</span>
      </div>

      <p className="hero-sub">The gamified trading practice platform that turns beginners into consistent traders — through real market challenges, instant rewards, and zero risk.</p>

      <div className="hero-ctas">
        <a href="#cta" className="btn btn-blue" onClick={(e) => { e.preventDefault(); onOpenAuth(); }}>Start Practicing Free ⚡</a>
        <a href="#how" className="btn btn-ghost">See How It Works →</a>
      </div>
    </section>
  );
}
