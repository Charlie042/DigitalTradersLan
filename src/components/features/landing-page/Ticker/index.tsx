import './index.scss';
import { TickerProps } from './types';

export default function Ticker({ type }: TickerProps) {
  if (type === 'electric') {
    return (
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span className="ticker-item">EURUSD <span className="up">+0.32%</span></span>
          <span className="ticker-item">XAUUSD <span className="dn">-0.18%</span></span>
          <span className="ticker-item">GBPUSD <span className="up">+0.51%</span></span>
          <span className="ticker-item">US30 <span className="up">+1.24%</span></span>
          <span className="ticker-item">BTCUSD <span className="dn">-2.03%</span></span>
          <span className="ticker-item">NASDAQ <span className="up">+0.78%</span></span>
          <span className="ticker-item">USDJPY <span className="dn">-0.45%</span></span>
          <span className="ticker-item">SP500 <span className="up">+0.63%</span></span>
          <span className="ticker-item">EURUSD <span className="up">+0.32%</span></span>
          <span className="ticker-item">XAUUSD <span className="dn">-0.18%</span></span>
          <span className="ticker-item">GBPUSD <span className="up">+0.51%</span></span>
          <span className="ticker-item">US30 <span className="up">+1.24%</span></span>
          <span className="ticker-item">BTCUSD <span className="dn">-2.03%</span></span>
          <span className="ticker-item">NASDAQ <span className="up">+0.78%</span></span>
        </div>
      </div>
    );
  }

  // Black Marquee
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="marquee-item">Practice Smarter <span className="star">✦</span></span>
        <span className="marquee-item">Build Consistency <span className="star">✦</span></span>
        <span className="marquee-item">Earn Rewards <span className="star">✦</span></span>
        <span className="marquee-item">Zero Risk <span className="star">✦</span></span>
        <span className="marquee-item">Real Market Data <span className="star">✦</span></span>
        <span className="marquee-item">Level Up Daily <span className="star">✦</span></span>
        <span className="marquee-item">Practice Smarter <span className="star">✦</span></span>
        <span className="marquee-item">Build Consistency <span className="star">✦</span></span>
        <span className="marquee-item">Earn Rewards <span className="star">✦</span></span>
        <span className="marquee-item">Zero Risk <span className="star">✦</span></span>
        <span className="marquee-item">Real Market Data <span className="star">✦</span></span>
        <span className="marquee-item">Level Up Daily <span className="star">✦</span></span>
      </div>
    </div>
  );
}
