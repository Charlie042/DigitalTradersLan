import type { SeedTopic } from '../types.js';
import { candlesticksTopic } from './candlesticks.js';
import { marketStructureTopic } from './marketStructure.js';
import { liquidityTopic } from './liquidity.js';

export const catalogTopics: SeedTopic[] = [
  candlesticksTopic,
  marketStructureTopic,
  liquidityTopic,
];
