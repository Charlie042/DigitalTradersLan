import { Link } from '@tanstack/react-router';
import { useTheme } from '../../../../context/ThemeContext';
import './index.scss';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="dash-layout">
      {/* Dashboard Top Navigation */}
      <header className="dash-header">
        <div className="dash-logo">
          <Link to="/dashboard">DigitalTraders<span className="dot">Lab</span></Link>
        </div>
        <nav className="dash-nav">
          <Link to="/dashboard" activeProps={{ className: 'active' }}>Game + Analytics</Link>
          <Link to="/dashboard/about" activeProps={{ className: 'active' }}>About</Link>
        </nav>
        <div className="dash-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className="user-profile">
            <div className="avatar">C</div>
          </div>
        </div>
      </header>

      {/* Main Content Rendered Here */}
      <main className="dash-main">
        {children}
      </main>
    </div>
  );
}
