import './index.scss';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── HERO BAND ── */}
      <div className="hero-band">
        <div className="hero-band-inner">
          <div className="page-eyebrow">Our story</div>
          <h1>Two builders.<br /><span className="blk">One mission.</span></h1>
        </div>
      </div>

      {/* ── FOUNDERS ── */}
      <section className="founders-section">
        <div className="founders-inner">
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-photo founder-photo-1">
                <span className="founder-initials">AO</span>
              </div>
              <div className="founder-info">
                <span className="founder-name">Akuabata Okoye</span>
                <span className="founder-title founder-title-1">Co-Founder</span>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-photo founder-photo-2">
                <span className="founder-initials">CG</span>
              </div>
              <div className="founder-info">
                <span className="founder-name">Charlse Ginger-Eke</span>
                <span className="founder-title founder-title-2">Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="story-section">
        <div className="story-inner">
          <div className="story-opener">
            Hey. Thanks for<br />being <span className="blue">here.</span>
          </div>
          <div className="story-body">
            <p>We're two builders from Africa. Not corporate guys with investor decks — just two traders who got frustrated enough to stop complaining and start building.</p>

            <p>We kept watching the same thing happen around us. Talented, hungry traders losing confidence — not because the market beat them, but because the tools failed them first. Expensive platforms that taught you nothing. Simulations that felt nothing like real price action. Feedback that told you what you got wrong but never <em>why.</em></p>

            <div className="pull-quote">
              <p>Confidence was dying quietly. And we couldn't unsee it.</p>
            </div>

            <p>So two months ago, we sat down and built <strong>DigitalTradersLab</strong>. No big team. No funding. Just two people and a problem we knew intimately. We built the thing we wished existed — real historical data, structured challenges, instant feedback that actually explains the market, and a reward system that makes showing up feel good.</p>

            <p>Then something stopped us in our tracks.</p>

            <div className="stat-callout">
              <div className="stat-num-big">500+</div>
              <div className="stat-callout-text">
                <p><strong>traders found us in two months.</strong> No ads. No big launch. Just word spreading because the problem is real — and people recognised something finally built for them. That number humbles us every single day.</p>
              </div>
            </div>

            <p>We are so grateful. But we want to do so much more. Here's what we're building toward:</p>

            <div className="future-list">
              <div className="future-item">
                <div className="f-dot blue">01</div>
                A full strategy library — Candlesticks, Market Structure, SMC, ICT, Wyckoff — all as structured learning paths.
              </div>
              <div className="future-item">
                <div className="f-dot lime">02</div>
                AI-powered behavioral insights that study how you make decisions under pressure and help you trade at your best.
              </div>
              <div className="future-item">
                <div className="f-dot coral">03</div>
                A simulator mode with live-feel price action — practice real entries and exits before ever touching real money.
              </div>
              <div className="future-item">
                <div className="f-dot violet">04</div>
                Redeem your earned coins toward a funded trading account. Your consistency, literally rewarded.
              </div>
            </div>

            <p>To build all of it — and keep it free for traders who can't afford the expensive alternatives — we need your support. We're not asking you to invest in a company. We're asking you to invest in a mission: <strong>bringing confidence back to African traders.</strong></p>

            <p>If that means something to you, we'd be honoured to have you in our corner.</p>

            <div className="sign-off">
              Thank you for reading all the way here. It means everything.<br />
              — Akuabata Okoye &amp; Charlse Ginger-Eke
            </div>
          </div>
        </div>
      </section>

      {/* ── GOFUNDME CTA ── */}
      <section className="gofundme-section">
        <div className="gf-corner-tl" />
        <div className="gf-corner-br" />
        <div className="gf-inner">
          <div className="gf-eyebrow">Support the mission</div>
          <div className="gf-headline">
            Back us.<br /><span className="blk">Back them.</span>
          </div>
          <p className="gf-body">
            Every contribution goes directly into building the platform — the strategy library, the AI engine, the simulator — and keeping it free and accessible for every African trader who deserves better.
          </p>
          <a href="https://gofund.me/" target="_blank" rel="noreferrer" className="btn-gofundme">
            Support Us on GoFundMe →
          </a>
          <p className="gf-fine">100% goes toward product development and accessibility.</p>
        </div>
      </section>

    </div>
  );
}
