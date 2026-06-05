import { Link } from '@tanstack/react-router';
import './index.scss';

export interface DashboardPlaceholderPageProps {
  title: string;
  emoji: string;
  body: string;
}

export default function DashboardPlaceholderPage({ title, emoji, body }: DashboardPlaceholderPageProps) {
  return (
    <div className="dash-placeholder">
      <Link to="/dashboard" className="dash-placeholder__back">← Dashboard</Link>
      <div className="dash-placeholder__card">
        <div className="dash-placeholder__emoji" aria-hidden>{emoji}</div>
        <h1 className="dash-placeholder__title">{title}</h1>
        <p className="dash-placeholder__body">{body}</p>
      </div>
    </div>
  );
}
