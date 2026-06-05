import type { SeedTopic } from '../types.js';
import { bearishEngulfingSubTopic } from './candlesticks/bearishEngulfing.js';
import { insideBarSubTopic } from './candlesticks/insideBar.js';
import { dojiSubTopic } from './candlesticks/doji.js';
import { rejectionWicksSubTopic } from './candlesticks/rejectionWicks.js';
import { hammerPinBarCandleSubTopic } from './candlesticks/hammer-pin-bar-candle.js';
import { shootingStarSubTopic } from './candlesticks/shooting-star.js';

export const candlesticksTopic: SeedTopic = {
  id: 'candlesticks',
  title: 'Candlestick Anatomy',
  icon: '🕯️',
  subTopics: [
    bearishEngulfingSubTopic,
    insideBarSubTopic,
    dojiSubTopic,
    rejectionWicksSubTopic,
    hammerPinBarCandleSubTopic,
    shootingStarSubTopic,
  ],
};
