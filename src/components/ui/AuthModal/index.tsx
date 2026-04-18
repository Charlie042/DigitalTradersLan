import { useState } from 'react';
import './index.scss';
import { AuthModalProps } from './types';
import { getApiBase } from '../../../lib/api';

const hearAboutOptions = [
  'Twitter / X',
  'Instagram',
  'TikTok',
  'A friend or colleague',
  'Reddit',
  'YouTube',
  'Google search',
  'Other',
];

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    country: '',
    wantsUpdates: true,
    hearAbout: '',
    wishFeatures: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${getApiBase()}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Could not reach the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setLoading(false);
      setError('');
      setForm({ fullName: '', email: '', country: '', wantsUpdates: true, hearAbout: '', wishFeatures: '' });
    }, 300);
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>✕</button>

        {submitted ? (
          /* ── SUCCESS STATE ── */
          <div className="modal-success">
            <div className="success-emoji">🎯</div>
            <h2 className="modal-title">You're on the list.</h2>
            <p className="modal-sub">
              We'll notify you the moment DigitalTradersLab goes live. Thank you for your support — it means everything to us.
            </p>
            <p className="modal-fine">Keep an eye on your inbox. Big things are coming.</p>
          </div>
        ) : (
          /* ── FORM STATE ── */
          <>
            <div className="modal-header">
              <h2 className="modal-title">Join the Waitlist</h2>
              <p className="modal-sub">
                DigitalTradersLab is almost here. Drop your details and be first through the door — plus help us build exactly what you need.
              </p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="field-label" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="field-input"
                  placeholder="Your Name"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label className="field-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label className="field-label" htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="field-input"
                  placeholder="Nigeria"
                  value={form.country}
                  onChange={handleChange}
                />
              </div>

              <div className="field field-check">
                <input
                  id="wantsUpdates"
                  name="wantsUpdates"
                  type="checkbox"
                  className="field-checkbox"
                  checked={form.wantsUpdates}
                  onChange={handleChange}
                />
                <label htmlFor="wantsUpdates" className="field-check-label">
                  Notify me when the product launches and on new releases
                </label>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="hearAbout">How did you hear about us?</label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  className="field-input field-select"
                  value={form.hearAbout}
                  onChange={handleChange}
                >
                  <option value="">Select an option…</option>
                  {hearAboutOptions.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="wishFeatures">
                  What do you most look forward to in the app?
                  <span className="field-hint">What features do you wish to see?</span>
                </label>
                <textarea
                  id="wishFeatures"
                  name="wishFeatures"
                  className="field-input field-textarea"
                  placeholder="e.g. Real chart challenges, AI feedback, funded account rewards…"
                  rows={3}
                  value={form.wishFeatures}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="field-error">{error}</p>}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Adding you…' : 'Join the Waitlist ⚡'}
              </button>

              <p className="modal-fine" style={{ textAlign: 'center', paddingTop: '0.25rem' }}>No spam. We only write when it matters.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
