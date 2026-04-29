import { Link, useNavigate } from '@tanstack/react-router';
import { useAuthUser } from '../../../../hooks/useAuthUser';
import { useGetStats } from '../hooks/useTopic';
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
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuthUser();
  const { data: stats } = useGetStats();
  const greetName = loading ? '…' : displayFirstName(user);

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: '/' });
  };

  return (
    <div className="app">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">DTL</div>

        <NavIcon icon="🎮" label="Dashboard" to="/dashboard" />
        {/* <NavIcon icon="📊" label="Analytics" to="/dashboard/analytics" />
        <NavIcon icon="🏆" label="Leaderboard" to="/dashboard/leaderboard" />
        <NavIcon icon="📓" label="Journal" to="/dashboard/journal" /> */}
        <NavIcon icon="ℹ️" label="About" to="/dashboard/about" />

        <div className="sidebar-bottom">
          {/* <NavIcon icon="⚙️" label="Settings" to="/dashboard/settings" /> */}
          <button
            type="button"
            className="nav-icon nav-icon--signout"
            onClick={() => { void handleSignOut(); }}
            aria-label="Sign out"
          >
            🚪
            <span className="tooltip">Sign out</span>
          </button>
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
              <span className="chip-val">{stats?.streak ?? 0}</span>
              <span className="chip-sub">day streak</span>
            </div>
            <div className="chip coins">
              <span className="chip-icon">🪙</span>
              <span className="chip-val">{(stats?.totalXp ?? 0).toLocaleString()}</span>
            </div>
            <div className="chip done">
              <span className="chip-icon">✅</span>
              <span className="chip-val">{stats?.challengesCompleted ?? 0}</span>
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
