import type { SeedTopic } from '../types.js';
import { candlesticksTopic } from './candlesticks.js';
import { marketStructureTopic } from './marketStructure.js';
import { liquidityTopic } from './liquidity.js';
import { supplyAndDemandTopic } from './supply-and-demand.js';

export const catalogTopics: SeedTopic[] = [
  candlesticksTopic,
  supplyAndDemandTopic,
  marketStructureTopic,
  liquidityTopic,
];
