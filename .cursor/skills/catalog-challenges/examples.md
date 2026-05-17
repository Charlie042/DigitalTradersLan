# Catalog challenges — examples

## Minimal input → output

### User paste

```text
Challenge 1 (Basics)

1. What is a Demand Zone?
A. Sellers won
 B. Buyers overwhelmed sellers, sharp rally
 C. Random area
 D. Resistance
✅ Answer: B
 Explanation: Institutional buying pushed price up sharply.
```

### Generated question object

```typescript
{
  id: 'q1',
  type: 'theory',
  text: 'What is a Demand Zone?',
  options: [
    'Sellers won',
    'Buyers overwhelmed sellers, sharp rally',
    'Random area',
    'Resistance',
  ],
  correctAnswerIndex: 1,
  explanation: 'Institutional buying pushed price up sharply.',
},
```

---

## Skipped question number in source

Source has questions `1`, `3`, `4` (no `2`). Output still uses:

- `q1` ← source #1  
- `q2` ← source #3  
- `q3` ← source #4  

---

## Chart recognition question

### User paste

```text
1.
You see on a chart:
Price drops down strongly
Consolidates tightly for 3 candles at the bottom
Then rallies sharply with a large bullish candle
What is this?
A. Supply Zone
 B. Drop-Base-Rally (DBR) Demand Zone
 ...
✅ Answer: B
```

### Output `text` (one line)

```typescript
text: 'You see on a chart: Price drops down strongly, consolidates tightly for 3 candles at the bottom, then rallies sharply with a large bullish candle. What is this?',
```

---

## New subtopic: market structure

**File:** `server/data/catalog/topics/market-structure/uptrends-HH-Hl.ts`

```typescript
import type { SeedSubTopic } from '../../types.js';

export const uptrendsHHHlSubTopic: SeedSubTopic = {
  id: 'uptrends-HH-Hl',
  title: 'Uptrends - HH/Hl',
  challenges: [
    {
      id: 'chal-uptrend-easy-1',
      title: '...',
      description: '...',
      difficulty: 'Easy',
      reward: 50,
      questions: [/* ... */],
    },
  ],
};
```

**Parent:** `server/data/catalog/topics/marketStructure.ts` — import with `.js` and add to `subTopics`.

---

## Reference files in this repo

| Purpose | File |
|---------|------|
| Full 12-challenge subtopic | `supply-zones.ts`, `demand-zones.ts` |
| 8-challenge subtopic | `candlesticks/doji.ts` |
| Types | `server/data/catalog/types.ts` |
| Empty placeholder | `market-structure/uptrends-HH-Hl.ts` |
