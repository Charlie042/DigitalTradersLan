import './index.scss';

export default function AboutPage() {
  return (
    <div className="about-page fade-in">
      <div className="about-content">
        <h1 className="about-title">Hey. Thanks for being here.</h1>
        
        <p>
          We're two builders from Africa. Not corporate guys with investor decks — just two traders who got frustrated enough to stop complaining and start building.
        </p>
        
        <p>
          We kept watching the same thing happen around us. Talented, hungry traders losing confidence — not because the market beat them, but because the tools failed them first. Expensive platforms that taught you nothing. Simulations that felt nothing like real price action. Zero engagement. Feedback that told you what you got wrong but never why.
        </p>
        <p>
          Confidence was dying quietly. And we couldn't unsee it.
        </p>

        <p>
          So two months ago, we sat down and built <strong>DigitalTradersLab</strong>. No big team. No funding. Just two people and a problem we knew intimately. We built the thing we wished existed — real historical data, structured challenges, instant feedback that actually explains the market, and a reward system that makes showing up feel good.
        </p>

        <p>Then something stopped us in our tracks.</p>

        <p>
          Within two months — no ads, no big launch — over 500 traders found us. That number humbles us every single day. We are so grateful.
        </p>

        <p>
          But we want to do so much more. A full strategy library. AI-powered behavioral insights that study how you make decisions under pressure. A simulator mode. And the one we're most excited about — redeeming your earned coins toward a funded trading account. Your consistency, literally rewarded.
        </p>

        <p>
          To build all of it — and keep it free for traders who can't afford the expensive alternatives — we need your support. We're not asking you to invest in a company. We're asking you to invest in a mission: bringing confidence back to African traders.
        </p>

        <p>
          If that means something to you, we'd be honoured to have you in our corner.
        </p>

        <a href="https://gofund.me/" target="_blank" rel="noreferrer" className="btn-gofundme">
          Support us on GoFundMe →
        </a>

        <p className="signature">
          Thank you for reading all the way here. It means everything.
          <br />
          — Founders
        </p>
      </div>
    </div>
  );
}
