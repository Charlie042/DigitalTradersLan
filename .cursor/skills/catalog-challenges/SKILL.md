---
name: catalog-challenges
description: >-
  Converts pasted trading quiz/challenge content (A/B/C/D + Answer + Explanation)
  into DigitalTradersLan catalog seed TypeScript files (SeedSubTopic). Use when
  adding catalog questions, challenges, subtopics, seed data, or turning content
  into files like demand-zones.ts, supply-zones.ts, or doji.ts.
---

# Catalog challenge seed files

Turn user-pasted challenges into typed catalog data under `server/data/catalog/topics/`.

**Canonical examples** (read before implementing):
- `server/data/catalog/topics/supply-and-demand/demand-zones.ts`
- `server/data/catalog/topics/supply-and-demand/supply-zones.ts`
- `server/data/catalog/topics/candlesticks/doji.ts`
- Types: `server/data/catalog/types.ts`

Do **not** add one-off generator scripts to the repo unless the user explicitly asks. Write the `.ts` file directly.

---

## User input format (what you parse)

Each **challenge** block:

```text
Challenge 1 (Understanding Demand Zones – Basics)

1. What is a Demand Zone?
A. Option one
 B. Option two
 C. Option three
 D. Option four
✅ Answer: B
 Explanation: Full explanation text here.

3. Next question when #2 was skipped...
```

Rules:
- Challenge title is in parentheses after `Challenge N`.
- Questions are numbered `1.`, `2.`, … — **renumber to `q1`, `q2`, … sequentially** in output (no gaps in `id`).
- Options may be labeled `A.` / `B.` / `C.` / `D.` (spacing before letter is OK).
- Correct answer: `✅ Answer: B` (sometimes `Answer: B` without emoji).
- Explanation line follows the answer.
- **Chart / recognition** questions: multiple scenario lines before the final question — merge into **one** `text` string (see below).

---

## Output: subtopic file

**Path:** `server/data/catalog/topics/{topic-folder}/{subtopic-slug}.ts`

```typescript
import type { SeedSubTopic } from '../../types.js';

export const demandZonesSubTopic: SeedSubTopic = {
  id: 'demand-zones',
  title: 'Demand Zones',
  challenges: [
    {
      id: 'chal-demand-easy-1',
      title: 'Understanding Demand Zones – Basics',
      description: 'One sentence describing what this challenge teaches.',
      difficulty: 'Easy',
      reward: 50,
      questions: [
        {
          id: 'q1',
          type: 'theory',
          text: 'What is a Demand Zone?',
          options: [
            'A price area where sellers overwhelmed buyers',
            'A price area where buyers overwhelmed sellers, causing a sharp rally',
            'A random area on the chart',
            'A resistance level',
          ],
          correctAnswerIndex: 1,
          explanation: 'A Demand Zone is an area where institutional or heavy buying occurred...',
        },
      ],
    },
  ],
};
```

### Export naming

| Piece | Convention | Example |
|-------|------------|---------|
| File slug | kebab-case | `demand-zones.ts` |
| `id` | same as slug | `demand-zones` |
| Export const | camelCase + `SubTopic` | `demandZonesSubTopic` |
| Challenge `id` | `chal-{prefix}-{tier}-{n}` | `chal-demand-easy-1` |
| Question `id` | `q1` … `qN` per challenge | restart at `q1` each challenge |

**Challenge prefix** — short, unique per subtopic: `demand`, `supply`, `doji`, `uptrend`, `bear`, etc.

### Answer → `correctAnswerIndex`

| Letter | Index |
|--------|-------|
| A | 0 |
| B | 1 |
| C | 2 |
| D | 3 |

Options array order **must** be A, B, C, D as pasted.

### Question `type`

- Default: `'theory'`
- Use `'chart'` only when supplying `imageUrl` (rare in current catalog).

### String escaping

- Use single-quoted strings; escape `'` as `\'` inside text.
- Prefer one line per `text` / `explanation` — **no** `+` string concatenation.
- Chart scenarios — single sentence style:

```typescript
text: 'You see on a chart: Price drops strongly, consolidates tightly for 3 candles at the bottom, then rallies sharply with a large bullish candle. What is this?',
```

---

## Challenge metadata

### Difficulty

Exactly: `'Easy' | 'Medium' | 'Hard'` (capitalized).

### Description

One short sentence per challenge (see examples in `demand-zones.ts`). Summarize learning goal, not the first question.

### Rewards (12-challenge layout — supply/demand pattern)

Use when the user provides ~10–12 challenges in a progression (basics → recognition):

| Challenge # | Suggested `id` tier | Difficulty | Reward |
|-------------|---------------------|------------|--------|
| 1 | easy-1 | Easy | 50 |
| 2 | easy-2 | Easy | 75 |
| 3 | easy-3 | Easy | 75 |
| 4 | easy-4 | Easy | 100 |
| 5 | med-1 | Medium | 125 |
| 6 | hard-1 | Hard | 150 |
| 7 | hard-2 | Hard | 150 |
| 8 | med-2 | Medium | 125 |
| 9 | med-3 | Medium | 125 |
| 10 | hard-3 | Hard | 175 |
| 11 | med-4 | Medium | 125 |
| 12 | hard-4 | Hard | 175 |

For **8-challenge** subtopics (e.g. doji), use: easy 50, 75, 75, 100 → med 125 → hard 150, 150, 175.

Match difficulty to challenge titles when the user labels them (e.g. "Hard Level – Trap Setups" → `Hard`).

---

## Wire into topic index

1. Create or update `server/data/catalog/topics/{topic-folder}/{subtopic}.ts`.
2. Import in parent topic file with **`.js`** extension:

```typescript
import type { SeedTopic } from '../types.js';
import { uptrendsHHHlSubTopic } from './market-structure/uptrends-HH-Hl.js';

export const marketStructureTopic: SeedTopic = {
  id: 'market-structure',
  title: 'Market Structure',
  icon: '📈',
  subTopics: [uptrendsHHHlSubTopic],
};
```

3. Ensure parent is exported from `server/data/catalog/topics/index.ts` / `catalogSeed.ts` if new topic.

Fix stale imports: use `import type { SeedSubTopic } from '../../types.js'` in subtopic files (not `../../types` without `.js`).

---

## Workflow checklist

Copy and track:

```
- [ ] Parse all challenges and questions from user paste
- [ ] Map every Answer letter → correctAnswerIndex
- [ ] Renumber question ids q1..qN (no skipped ids)
- [ ] Assign challenge ids, difficulty, rewards, descriptions
- [ ] Write subtopic .ts (no + concatenation, escaped quotes)
- [ ] Register subtopic in parent topic file
- [ ] Run: cd server && npx tsc --noEmit
- [ ] Grep file for broken patterns (see below)
```

---

## Validation (required)

From `server/`:

```bash
npx tsc --noEmit
```

Grep the new file — these should be **zero** matches:

- `text: 'You see on a chart:' +`
- `explanation: '...' +`
- Orphan lines like `'What is this?',` on their own (not inside `options`)

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Putting supply content in `demand-zones.ts` | Match subtopic topic; mirror structure, not opposite Q&A |
| Skipped source question numbers | Output still uses `q1`, `q2`, … contiguous |
| `correctAnswerIndex` off by one | A=0, not 1 |
| Concatenated chart `text` | One string with commas / periods |
| User message in `explanation` | Only paste explanation text |
| Generator script in `server/scripts/` | Write `.ts` directly unless user wants a tool |

---

## More examples

See [examples.md](examples.md) for a minimal input → output walkthrough.
