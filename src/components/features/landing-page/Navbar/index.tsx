import './index.scss';
import { NavbarProps } from './types';

export default function Navbar({ onOpenAuth }: NavbarProps) {
  return (
    <header className="landing-nav">
      <div className="logo">DigitalTraders<span className="dot">Lab</span></div>
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
    </header>
  );
}
