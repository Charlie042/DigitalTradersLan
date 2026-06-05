import { useMemo, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useAuthUser } from '../../../../hooks/useAuthUser';
import { useGetStats, useGetTopics } from '../hooks/useTopic';
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

type SearchResult =
  | { kind: 'topic';     label: string; sub: string; topicId: string }
  | { kind: 'subtopic';  label: string; sub: string; topicId: string }
  | { kind: 'challenge'; label: string; sub: string; challengeId: string };

const KIND_ICON: Record<SearchResult['kind'], string> = {
  topic:     '📚',
  subtopic:  '📂',
  challenge: '⚡',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuthUser();
  const { data: stats } = useGetStats();
  const { data: topics } = useGetTopics();
  const greetName = loading ? '…' : displayFirstName(user);

  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.toLowerCase().trim();
    if (!q || !topics) return [];
    const out: SearchResult[] = [];
    for (const topic of topics) {
      if (topic.title.toLowerCase().includes(q))
        out.push({ kind: 'topic', label: topic.title, sub: 'Topic', topicId: topic.id });
      for (const st of topic.subTopics) {
        if (st.title.toLowerCase().includes(q))
          out.push({ kind: 'subtopic', label: st.title, sub: topic.title, topicId: topic.id });
        for (const ch of st.challenges ?? []) {
          if (ch.title.toLowerCase().includes(q))
            out.push({ kind: 'challenge', label: ch.title, sub: topic.title, challengeId: ch.dbId.toString() });
        }
      }
    }
    return out.slice(0, 8);
  }, [query, topics]);

  const showDropdown = focused && query.trim().length > 0;

  const handleSelect = (r: SearchResult) => {
    setQuery('');
    setFocused(false);
    if (r.kind === 'challenge') navigate({ to: '/dashboard/challenge/$challengeId', params: { challengeId: r.challengeId } });
    else navigate({ to: '/dashboard/topic/$topicId', params: { topicId: r.topicId } });
  };

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
            <input
              type="text"
              placeholder="Search topics, challenges…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
            />
            <button className="search-btn" tabIndex={-1}>🔍</button>
            {showDropdown && (
              <div className="search-dropdown">
                {results.length === 0 ? (
                  <div className="search-empty">No results for "{query}"</div>
                ) : (
                  results.map((r, i) => (
                    <button key={i} className="search-result" onMouseDown={() => handleSelect(r)}>
                      <span className="sr-kind-icon">{KIND_ICON[r.kind]}</span>
                      <span className="sr-label">{r.label}</span>
                      <span className="sr-sub">{r.sub}</span>
                    </button>
                  ))
                )}
              </div>
            )}
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
