import { useState } from 'react';
import './index.scss';
import charles from "@/charles.jpeg"
import Akuabata from "@/Akuabata.jpeg"
const RATING_EMOJIS = ['😤', '😕', '😊', '😄', '🔥'];

export default function AboutPage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const openModal = () => {
    setFeedbackOpen(true);
    setIsSuccess(false);
    setName('');
    setEmail('');
    setMessage('');
    setRating(0);
    setErrors({});
    setIsSubmitting(false);
  };

  const closeModal = () => setFeedbackOpen(false);

  const pulse = (field: string) => {
    setErrors(e => ({ ...e, [field]: true }));
    setTimeout(() => setErrors(e => ({ ...e, [field]: false })), 1500);
  };

  const handleSubmit = () => {
    if (!name.trim()) { pulse('name'); return; }
    if (!email.trim() || !email.includes('@')) { pulse('email'); return; }
    if (!message.trim()) { pulse('message'); return; }
    setIsSubmitting(true);
    // TODO: replace with real API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

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
                <img src={Akuabata} alt="Akuabata Okoye" className="founder-photo-img" width={800} height={800} />
              </div>
              <div className="founder-info">
                <span className="founder-name">Akuabata Okoye</span>
                <span className="founder-title founder-title-1">Co-Founder</span>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-photo founder-photo-2">
                <img src={charles} alt="Charlse Ginger-Eke" className="founder-photo-img" width={800} height={800} />
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

      {/* ── FEEDBACK ── */}
      <section className="feedback-section">
        <div className="feedback-inner">
          <div className="feedback-eyebrow">We're listening</div>
          <div className="feedback-headline">
            Help us<br /><span className="blk">get better.</span>
          </div>
          <p className="feedback-body">
            Got a suggestion, spotted a bug, or just want to tell us how it's going? We read everything.
          </p>
          <button className="btn-feedback" onClick={openModal}>
            Share Your Feedback →
          </button>
        </div>
      </section>

      {/* ── FEEDBACK MODAL ── */}
      {feedbackOpen && (
        <div className="fb-overlay" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="fb-modal">

            {!isSuccess ? (
              <>
                {/* Form screen */}
                <div className="fb-modal-top">
                  <button className="fb-modal-close" onClick={closeModal}>✕</button>
                  <div className="fb-modal-eyebrow">DigitalTradersLab</div>
                  <div className="fb-modal-title">Talk to us.<br />We're listening.</div>
                  <div className="fb-modal-sub">Every message gets read by Akuabata &amp; Charlse personally. No bots. No auto-replies.</div>
                </div>

                <div className="fb-modal-body">
                  <div className={`fb-field${errors.name ? ' fb-field--error' : ''}`}>
                    <label>Your Name <span className="fb-req">*</span></label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="What should we call you?"
                    />
                  </div>

                  <div className={`fb-field${errors.email ? ' fb-field--error' : ''}`}>
                    <label>Email Address <span className="fb-req">*</span></label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="we'll reply here"
                    />
                  </div>

                  <div className="fb-rating-label">How would you rate your experience so far?</div>
                  <div className="fb-rating-row">
                    {RATING_EMOJIS.map((emoji, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`fb-rating-btn${rating === i + 1 ? ' active' : ''}`}
                        onClick={() => setRating(i + 1)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>

                  <div className={`fb-field${errors.message ? ' fb-field--error' : ''}`}>
                    <label>Your Message <span className="fb-req">*</span></label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value.slice(0, 600))}
                      placeholder="Tell us anything — what's working, what's not, what you'd love to see. Be honest. We can take it."
                    />
                    <div className="fb-char-count">
                      <span className={message.length > 500 ? 'warn' : ''}>{message.length} / 600</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`fb-submit-btn${isSubmitting ? ' loading' : ''}`}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <span className="fb-spinner" /> : 'Send to Akuabata & Charlse ⚡'}
                  </button>

                  <div className="fb-privacy">
                    Your email is only used to reply to you. We don't share it.<br />
                    Built with love for African traders. 🌍
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Success screen */}
                <div className="fb-success-top">
                  <span className="fb-success-emoji">🎉</span>
                  <div className="fb-success-title">Message Received!</div>
                  <div className="fb-success-sub">We read every single one.</div>
                </div>
                <div className="fb-success-body">
                  <div className="fb-success-message">
                    <strong>Thank you for taking the time.</strong><br /><br />
                    Your feedback goes directly to us — and it genuinely shapes what we build next. If you left your email, we'll be in touch. This is exactly the kind of support that keeps us going.<br /><br />
                    You found us early. That means everything. ⚡
                  </div>
                  <div className="fb-success-from">— Akuabata &amp; Charlse</div>
                  <button type="button" className="fb-close-success" onClick={closeModal}>Close &amp; Go Back</button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
