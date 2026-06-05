import './index.scss';
import { AuthModalProps } from './types';

export default function AuthModal({ isOpen, onClose, googleAuthUrl }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content modal-content--signin" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Sign in</h2>
          <p className="modal-sub">
            Continue with your Google account to access your dashboard and saved progress.
          </p>
        </div>

        <a href={googleAuthUrl} className="btn-signin-google">
          Continue with Google
        </a>

        <p className="modal-fine modal-fine--center">
          We use Google only to verify your identity. No password to remember.
        </p>
      </div>
    </div>
  );
}
