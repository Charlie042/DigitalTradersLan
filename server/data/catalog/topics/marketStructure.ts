import type { SeedTopic } from '../types.js';
import { breakOfStructureSubTopic } from './market-structure/break-of-structure.js';
import { changeOfCharacterSubTopic } from './market-structure/change-of-character.js';
import { downtrendsLHLLSubTopic } from './market-structure/downthrend-LH-LL.js';
import { falseBreakoutSubTopic } from './market-structure/false-breakout.js';
import { rangeConsolidationSubTopic } from './market-structure/range-consolidation.js';
import { uptrendsHHHlSubTopic } from './market-structure/uptrends-HH-Hl.js';

export const marketStructureTopic: SeedTopic = {
    id: 'market-structure',
    title: 'Market Structure',
    icon: '📈',
    subTopics: [
      uptrendsHHHlSubTopic,
      downtrendsLHLLSubTopic,
      rangeConsolidationSubTopic,
      breakOfStructureSubTopic,
      changeOfCharacterSubTopic,
      falseBreakoutSubTopic,
    ],
  };
