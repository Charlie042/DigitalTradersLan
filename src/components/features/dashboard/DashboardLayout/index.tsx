import { Link } from '@tanstack/react-router';
import { mockUserStats } from '../../../../data/mockDatabase';
import { useAuthUser } from '../../../../hooks/useAuthUser';
import { avatarInitial, displayFirstName, greetingTimeLabel } from '../../../../lib/userDisplay';
import './index.scss';

interface NavIconProps {
  icon: string;
  label: string;
  to?: string;
  active?: boolean;
}

function NavIcon({ icon, label, to, active }: NavIconProps) {
  const content = (
    <>
      {icon}
      <span className="tooltip">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`nav-icon ${active ? 'active' : ''}`} activeProps={{ className: 'nav-icon active' }}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`nav-icon ${active ? 'active' : ''}`}>
      {content}
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthUser();
  const greetName = loading ? '…' : displayFirstName(user);

  return (
    <div className="app">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '68px', height: '68px', borderRadius: '4px' }} />
          {/* <span>DTL</span> */}
        </div>

        <NavIcon icon="🎮" label="Dashboard" to="/dashboard" />
        {/* <NavIcon icon="📊" label="Analytics" /> */}
        {/* <NavIcon icon="🏆" label="Leaderboard" /> */}
        {/* <NavIcon icon="📓" label="Journal" /> */}
        <NavIcon icon="ℹ️" label="About" to="/dashboard/about" />

        <div className="sidebar-bottom">
          <NavIcon icon="⚙️" label="Settings" />
          <div
            className={`avatar${user?.picture ? ' avatar--photo' : ''}`}
            title={user?.email ?? (loading ? 'Loading…' : 'Account')}
          >
            {loading ? (
              <span className="avatar__loading">…</span>
            ) : user?.picture ? (
              <img src={user.picture} alt="" />
            ) : (
              avatarInitial(user)
            )}
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="dash-main">
        {/* TOP BAR */}
        <header className="topbar">
          <div className="topbar-left">
            {!loading && user?.picture && (
              <img className="topbar-avatar" src={user.picture} alt="" />
            )}
            {!loading && user && !user.picture && (
              <div className="topbar-avatar topbar-avatar--initial" aria-hidden>
                {avatarInitial(user)}
              </div>
            )}
            <div className="greeting">
              {greetingTimeLabel()}, <span>{greetName}</span> 👋
            </div>
            <div className="live-badge">
              <span className="live-dot"></span> Live
            </div>
          </div>

          <div className="search-wrap">
            <input type="text" placeholder="Search topics, strategies…" />
            <button className="search-btn">🔍</button>
          </div>

          <div className="stats-chips">
            <div className="chip streak">
              <span className="chip-icon">🔥</span>
              <span className="chip-val">{mockUserStats.streak}</span>
              <span className="chip-sub">day streak</span>
            </div>
            <div className="chip coins">
              <span className="chip-icon">🪙</span>
              <span className="chip-val">{mockUserStats.totalCoins.toLocaleString()}</span>
            </div>
            <div className="chip done">
              <span className="chip-icon">✅</span>
              <span className="chip-val">{mockUserStats.challengesCompleted}</span>
              <span className="chip-sub">done</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
