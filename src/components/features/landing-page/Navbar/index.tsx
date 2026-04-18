import { useState } from 'react';
import './index.scss';
import { useTheme } from '../../../../context/ThemeContext';
import { NavbarProps } from './types';

function SunIcon() {
  return (
    <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden>
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg className="hamburger__icon" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      {open ? (
        <>
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="landing-nav">
      <div className="logo">DigitalTraders<span className="dot">Lab</span></div>
      <div className="landing-nav__right">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#rewards">Rewards</a></li>
          <li>
            <a href="#cta" className="nav-cta" onClick={(e) => { e.preventDefault(); onOpenAuth(); }}>
              Get Early Access
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <ul>
            <li><a href="#features" onClick={closeMenu}>Features</a></li>
            <li><a href="#how" onClick={closeMenu}>How it works</a></li>
            <li><a href="#rewards" onClick={closeMenu}>Rewards</a></li>
            <li>
              <a
                href="#cta"
                className="nav-cta"
                onClick={(e) => { e.preventDefault(); closeMenu(); onOpenAuth(); }}
              >
                Get Early Access
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
