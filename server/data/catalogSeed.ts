/**
 * Mirrors `src/data/mockDatabase.ts` for DB seeding. Keep in sync when you change the mock catalog.
 */
export type SeedQuestion = {
  id: string;
  type: 'theory' | 'chart';
  text: string;
  imageUrl?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type SeedChallenge = {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: number;
  questions: SeedQuestion[];
};

export type SeedSubTopic = {
  id: string;
  title: string;
  challenges: SeedChallenge[];
};

export type SeedTopic = {
  id: string;
  title: string;
  icon: string;
  subTopics: SeedSubTopic[];
};

export const catalogTopics: SeedTopic[] = [
  {
    id: 'candlesticks',
    title: 'Candlestick Anatomy',
    icon: '🕯️',
    subTopics: [
      {
        id: 'bullish-engulfing',
        title: 'Bullish Engulfing',
        challenges: [
          {
            id: 'chal-bull-easy-1',
            title: 'Identify the Engulfing',
            description:
              'Learn to spot the primary characteristics of a standard bullish engulfing pattern.',
            difficulty: 'Easy',
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'What defines a Bullish Engulfing pattern?',
                options: [
                  'A large green candle completely covering the body of the previous red candle.',
                  'A red candle followed by a doji.',
                  'A green candle that is smaller than the previous red candle.',
                  'Two green candles of the same size.',
                ],
                correctAnswerIndex: 0,
                explanation:
                  'A Bullish Engulfing pattern occurs when a large green candle completely engulfs the body of the preceding red candle, indicating a shift from selling pressure to immense buying pressure.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Where is a Bullish Engulfing pattern most effective?',
                options: [
                  'In the middle of a sideways consolidation.',
                  'At the bottom of a prolonged downtrend or key support level.',
                  'At the very top of a massive uptrend.',
                  'After a high-impact news event.',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Bullish Engulfing patterns are reversal signals. They hold the highest probability when they form at the bottom of a downtrend or off a major support level, trapping late sellers.',
              },
            ],
          },
          {
            id: 'chal-bull-med-1',
            title: 'Context over Print',
            description: 'Apply candlestick theory into structural market conditions.',
            difficulty: 'Medium',
            reward: 100,
            questions: [],
          },
        ],
      },
      {
        id: 'bearish-engulfing',
        title: 'Bearish Engulfing',
        challenges: [
          {
            id: 'chal-bear-easy-1',
            title: 'Identify the Pattern',
            description:
              'Learn the core rules of the Bearish Engulfing pattern and practise spotting it on a chart.',
            difficulty: 'Easy',
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'What defines a Bearish Engulfing pattern?',
                options: [
                  'A small bearish candle after a big bullish candle',
                  'A bearish candle completely covering the previous bullish candle',
                  'Two bearish candles in a row',
                  'A candle with long wicks',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A bearish engulfing happens when a strong bearish candle fully covers (engulfs) the previous bullish candle\'s body, signalling a shift to selling pressure.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What is the colour of the first candle in a Bearish Engulfing?',
                options: ['Red', 'Blue', 'Green', 'Any colour'],
                correctAnswerIndex: 2,
                explanation:
                  'The first candle must be bullish (green), showing buyers were initially in control.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What must the second candle do?',
                options: [
                  'Be smaller than the first',
                  'Close above the first candle',
                  'Completely cover the first candle\'s body',
                  'Have a long wick only',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'The second (bearish) candle must engulf the body of the first candle, showing strong seller dominance.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'If the second candle only partially covers the first, is it a valid Bearish Engulfing?',
                options: ['Yes', 'No', 'Only sometimes', 'Only in crypto'],
                correctAnswerIndex: 1,
                explanation:
                  'For a true engulfing, the body must be fully covered. Partial coverage weakens the signal.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What does a Bearish Engulfing pattern indicate?',
                options: [
                  'Continuation of uptrend',
                  'Market indecision',
                  'Potential bearish reversal',
                  'Strong buying pressure',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'It shows sellers have taken control, suggesting a possible downward move.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Which scenario BEST represents a Bearish Engulfing?',
                options: [
                  'Small red candle inside a big green candle',
                  'Big red candle covering previous green candle',
                  'Two small candles side by side',
                  'A doji candle',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The key feature is a large bearish candle that completely engulfs the previous bullish one.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What increases the strength of a Bearish Engulfing pattern?',
                options: [
                  'Appearing randomly',
                  'Appearing at support',
                  'Appearing at a resistance level',
                  'Appearing in the middle of a trend',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'When it forms at resistance, it confirms sellers are defending that level, making the reversal stronger.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'In a Bearish Engulfing pattern, what should happen to the close of the second candle?',
                options: [
                  'Close above the first candle',
                  'Close below the first candle\'s open',
                  'Close at the same level',
                  'Close with a long wick only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The bearish candle should close below the open of the previous bullish candle, confirming full engulfing.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'After an uptrend: Candle 1 is a small green candle. Candle 2 is a large red candle that opens above Candle 1\'s close and closes below Candle 1\'s open. What is this?',
                options: ['Bearish engulfing', 'Bullish engulfing', 'Doji', 'Inside bar'],
                correctAnswerIndex: 0,
                explanation:
                  'The red candle fully engulfs the green candle\'s body, showing strong seller takeover — bearish engulfing.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'A chart shows: Candle 1 is a large green candle. Candle 2 is a small red candle sitting inside the body of Candle 1. What is this?',
                options: ['Bearish engulfing', 'Inside bar', 'Reversal pattern', 'Breakout'],
                correctAnswerIndex: 1,
                explanation:
                  'The second candle is inside the first — not engulfing. This is an inside bar, not a reversal signal.',
              },
              {
                id: 'q11',
                type: 'theory',
                text: 'After an uptrend: a green candle is followed by a red candle that closes below the green candle\'s open but opens inside it. Is this a valid bearish engulfing?',
                options: ['Yes', 'No', 'Only in forex', 'Only on higher timeframe'],
                correctAnswerIndex: 0,
                explanation:
                  'What matters is the body engulfing. Even if it opens inside, as long as it closes below the previous open, it\'s valid.',
              },
              {
                id: 'q12',
                type: 'theory',
                text: 'A green candle is followed by a red candle with a long lower wick but a small body that does NOT cover the green candle\'s body. What is the correct interpretation?',
                options: [
                  'Strong bearish engulfing',
                  'Weak bearish engulfing',
                  'Not an engulfing pattern',
                  'Break of structure',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'The body does not engulf, so it\'s not a bearish engulfing — wicks do not count.',
              },
              {
                id: 'q13',
                type: 'theory',
                text: 'An uptrend leads price to resistance. A green candle is followed by a strong red engulfing candle. What does this suggest?',
                options: [
                  'Continuation up',
                  'Fake breakout',
                  'Potential reversal down',
                  'Consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Resistance + engulfing = sellers stepping in, high-probability reversal setup.',
              },
              {
                id: 'q14',
                type: 'theory',
                text: 'A bearish engulfing is followed by a strong break below recent support. What does this confirm?',
                options: [
                  'Fake pattern',
                  'Strong bearish continuation',
                  'Market indecision',
                  'Uptrend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Engulfing + structure break = confirmation of real selling strength.',
              },
            ],
          },
          {
            id: 'chal-bear-easy-2',
            title: 'Key Characteristics',
            description:
              'Understand the psychology, volume rules, and core attributes that define a valid Bearish Engulfing.',
            difficulty: 'Easy',
            reward: 75,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'What type of market sentiment does a Bearish Engulfing reflect?',
                options: [
                  'Strong buying pressure',
                  'Seller dominance',
                  'Market confusion',
                  'No activity',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'It shows sellers overpower buyers, signalling a potential shift downward.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What happens to the relationship between open and close in the engulfing candle?',
                options: [
                  'Open is lower than close',
                  'Open equals close',
                  'Close is lower than open',
                  'No rule',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'The engulfing candle is bearish, so it must close lower than it opens.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What does the size of the engulfing candle usually indicate?',
                options: [
                  'Market weakness',
                  'Low volatility',
                  'Strength of sellers',
                  'No significance',
                ],
                correctAnswerIndex: 2,
                explanation: 'A large bearish candle shows strong selling momentum.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'Which of these is NOT required for a Bearish Engulfing?',
                options: [
                  'A previous bullish candle',
                  'A bearish candle after',
                  'Equal candle sizes',
                  'Body engulfing',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Candle sizes don\'t have to be equal — the second just needs to engulf the first body.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What role does volume play in a Bearish Engulfing pattern?',
                options: [
                  'No role at all',
                  'High volume strengthens it',
                  'Low volume strengthens it',
                  'Volume cancels it',
                ],
                correctAnswerIndex: 1,
                explanation: 'Higher volume = stronger conviction behind the move.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'What is the psychological meaning behind the Bearish Engulfing pattern?',
                options: [
                  'Buyers remain in control',
                  'Sellers are unsure',
                  'Sellers suddenly take control from buyers',
                  'Market stops moving',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'It represents a shift in control — sellers step in aggressively.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What is a common expectation after a valid Bearish Engulfing?',
                options: [
                  'Immediate reversal up',
                  'Sideways movement only',
                  'Continued downward movement',
                  'Market closes',
                ],
                correctAnswerIndex: 2,
                explanation: 'A valid setup is often followed by further bearish movement.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'What should traders combine with Bearish Engulfing for better accuracy?',
                options: [
                  'Random entries',
                  'Indicators or support/resistance',
                  'Guesswork',
                  'News only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Combining with support/resistance or indicators improves decision-making.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'What is the main purpose of identifying a Bearish Engulfing pattern?',
                options: [
                  'To predict exact price',
                  'To identify potential market reversal',
                  'To confirm uptrend',
                  'To avoid trading',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'It helps traders spot possible reversal points, not exact price levels.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'A bearish engulfing forms in the middle of a choppy, ranging market. What\'s the best interpretation?',
                options: [
                  'Strong sell',
                  'Fake signal likely',
                  'Guaranteed reversal',
                  'Breakout signal',
                ],
                correctAnswerIndex: 1,
                explanation: 'In consolidation, engulfing patterns are often unreliable.',
              },
            ],
          },
          {
            id: 'chal-bear-med-1',
            title: 'Location Matters',
            description:
              'Learn where the Bearish Engulfing carries the most weight and where it should be avoided.',
            difficulty: 'Medium',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Where is a Bearish Engulfing MOST effective?',
                options: [
                  'Middle of the chart',
                  'At resistance level',
                  'At random price',
                  'During news only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Resistance is a seller interest zone, making the engulfing more reliable.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Bearish Engulfing at a trendline resistance suggests:',
                options: [
                  'Trend reversal up',
                  'Trend continuation down',
                  'Market rally',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'It shows price respecting the trendline, continuing downward.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What does a Bearish Engulfing after a liquidity sweep indicate?',
                options: ['Weak sellers', 'Fake signal', 'Strong reversal', 'Consolidation'],
                correctAnswerIndex: 2,
                explanation: 'Stop hunt + engulfing = smart-money reversal setup.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'Bearish Engulfing forming at support is:',
                options: ['Strong sell', 'Weak signal', 'Guaranteed reversal', 'Best entry'],
                correctAnswerIndex: 1,
                explanation: 'Support is a buying zone, so selling against it is risky.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What happens when a Bearish Engulfing forms at a supply zone?',
                options: [
                  'Buyers dominate',
                  'Sellers step in strongly',
                  'Market stops',
                  'No effect',
                ],
                correctAnswerIndex: 1,
                explanation: 'Supply zones are institutional selling areas.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Where should you AVOID trading a Bearish Engulfing?',
                options: [
                  'Resistance',
                  'Trendline',
                  'Middle of a ranging market',
                  'Supply zone',
                ],
                correctAnswerIndex: 2,
                explanation: 'In consolidation, signals are unreliable.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Bearish Engulfing on higher timeframe zones is:',
                options: ['Less reliable', 'More reliable', 'Useless', 'Random'],
                correctAnswerIndex: 1,
                explanation: 'Higher timeframe levels carry more weight.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price breaks above resistance (liquidity sweep) then forms a bearish engulfing. Best interpretation?',
                options: [
                  'Continue buying',
                  'Strong reversal setup',
                  'Ignore trade',
                  'Market closed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Classic trap + reversal → high-probability sell setup.',
              },
            ],
          },
          {
            id: 'chal-bear-med-2',
            title: 'Clean Context',
            description:
              'Apply the Bearish Engulfing across clean market conditions — resistance, supply, trendlines, and moving averages.',
            difficulty: 'Medium',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Bearish Engulfing at a resistance level suggests:',
                options: [
                  'Buyers are in control',
                  'Sellers are defending the level',
                  'Market will go sideways',
                  'No trading opportunity',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Resistance is where sellers step in — engulfing confirms selling strength.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'When a Bearish Engulfing forms after an uptrend, it indicates:',
                options: [
                  'Continuation up',
                  'Market indecision',
                  'Possible reversal down',
                  'Strong buying pressure',
                ],
                correctAnswerIndex: 2,
                explanation: 'After a rally, engulfing shows sellers taking over.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Bearish Engulfing at a trendline resistance means:',
                options: [
                  'Trend is broken',
                  'Trend is continuing downward',
                  'Market is reversing up',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Price respects the trendline → continuation of downtrend.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'What does a Bearish Engulfing at a supply zone indicate?',
                options: [
                  'Weak sellers',
                  'Strong institutional selling',
                  'Market rally',
                  'No movement',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Supply zones are areas where big sellers enter the market.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Bearish Engulfing after a liquidity sweep shows:',
                options: [
                  'Market confusion',
                  'Stop hunt and reversal',
                  'Weak sellers',
                  'Trend continuation up',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Price grabs liquidity (stops) → then reverses strongly.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'If a Bearish Engulfing forms far away from resistance or supply, it is:',
                options: [
                  'Strong signal',
                  'Weak or unreliable',
                  'Guaranteed win',
                  'Best setup',
                ],
                correctAnswerIndex: 1,
                explanation: 'No key level = low-probability trade.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A Bearish Engulfing rejecting off a moving average (e.g., 50 EMA) suggests:',
                options: [
                  'Buying pressure',
                  'Dynamic resistance holding',
                  'Market rally',
                  'No trend',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Moving averages act as dynamic resistance, confirming a rejection.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price is in an uptrend, hits resistance, and forms a bearish engulfing. What is the best idea?',
                options: ['Buy', 'Ignore', 'Look for sell', 'Wait for rally'],
                correctAnswerIndex: 2,
                explanation:
                  'Uptrend + resistance + engulfing = potential reversal sell setup.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'Price touches a trendline, forms a bearish engulfing, then moves downward. What does this confirm?',
                options: [
                  'Trendline is weak',
                  'Trendline is respected',
                  'Market is sideways',
                  'Fake breakout',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Engulfing confirms trendline resistance is valid.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price breaks above resistance and quickly forms a bearish engulfing. What likely happened?',
                options: [
                  'Strong buying',
                  'Market closed',
                  'Liquidity sweep',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break above resistance → grabs stops → engulfing = reversal setup.',
              },
            ],
          },
          {
            id: 'chal-bear-med-3',
            title: 'Reading Between the Lines',
            description:
              'Evaluate Bearish Engulfing signals that appear valid on the surface but carry hidden weaknesses.',
            difficulty: 'Medium',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price is in an uptrend and taps resistance. A bearish engulfing forms, but the next candle breaks above the engulfing high. What does this suggest?',
                options: [
                  'Strong sell signal',
                  'Pattern confirmed',
                  'Pattern failure',
                  'Trend reversal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Breaking above the engulfing high invalidates the setup — sellers failed to hold control.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, but volume is very low. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak confirmation',
                  'Guaranteed sell',
                  'Trend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Low volume = lack of conviction, making the move less reliable.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Price forms a bearish engulfing at a moving average, but the candle has a long lower wick. What does this indicate?',
                options: [
                  'Strong sellers',
                  'Rejection from lower prices',
                  'Perfect entry',
                  'No significance',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long lower wick shows buying pressure at the bottom, weakening the bearish signal.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A bearish engulfing forms after a liquidity sweep above resistance, but price does not break the previous low. What should you expect?',
                options: [
                  'Strong downtrend',
                  'Weak or temporary drop',
                  'Immediate breakdown',
                  'Market rally',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without breaking structure, it\'s likely just a short-term reaction, not a full reversal.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance in a strong uptrend with no sign of slowing. What is the best approach?',
                options: [
                  'Sell aggressively',
                  'Ignore the trend',
                  'Be cautious or wait for confirmation',
                  'Buy immediately',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Counter-trend trades need extra confirmation — don\'t rush in.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'A bearish engulfing forms at a supply zone and immediately breaks a minor support level. What does this indicate?',
                options: [
                  'Weak signal',
                  'Strong bearish intent',
                  'Market indecision',
                  'Fake breakdown',
                ],
                correctAnswerIndex: 1,
                explanation: 'Engulfing + structure break = sellers gaining control.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Price forms multiple bearish engulfing patterns in a sideways market. What does this suggest?',
                options: [
                  'Strong trend',
                  'High reliability',
                  'False signals likely',
                  'Breakdown confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'In consolidation, engulfing patterns often fail or give mixed signals.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'A bearish engulfing forms, but it does NOT engulf the previous candle\'s body fully — only the wick. What is this?',
                options: [
                  'Valid engulfing',
                  'Strong reversal',
                  'Invalid pattern',
                  'Breakdown signal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Only the body matters, not the wick — so this is invalid.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, followed by a lower high and lower low. What market structure is forming?',
                options: ['Uptrend', 'Consolidation', 'Downtrend shift', 'Fake move'],
                correctAnswerIndex: 2,
                explanation:
                  'Lower low + lower high = trend reversal confirmation.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'After a bearish engulfing, price returns to retest the engulfing candle\'s midpoint. What is this commonly used for?',
                options: [
                  'Exit point',
                  'Entry refinement',
                  'Stop loss removal',
                  'Market exit',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Traders use retracement into the candle (often 50%) for a better entry with lower risk.',
              },
            ],
          },
          {
            id: 'chal-bear-hard-1',
            title: 'Trap Setups & Fake Engulfings',
            description:
              'Identify the situations where a Bearish Engulfing traps sellers and what warning signs to watch for.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price is in an uptrend. A bearish engulfing forms at resistance, but the candle closes weak (near its midpoint) and the next candle is bullish. What is this most likely?',
                options: [
                  'Strong reversal',
                  'Continuation signal',
                  'Bear trap',
                  'Breakdown',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Weak close + bullish follow-up = sellers lacked control → trap setup.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A bearish engulfing forms after price breaks above resistance. However, the engulfing candle does NOT close back below the broken resistance. What does this indicate?',
                options: [
                  'Valid reversal',
                  'Strong sell',
                  'Failed reclaim (trap likely)',
                  'Trend change',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'If price doesn\'t reclaim resistance to the downside, buyers are still in control → likely continuation up.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'A perfect bearish engulfing forms at resistance during a very strong bullish trend with large momentum candles. What is the risk?',
                options: [
                  'No risk',
                  'Guaranteed reversal',
                  'Counter-trend trap',
                  'Breakdown',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Strong trend can overpower the pattern, trapping early sellers.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A bearish engulfing forms, then price consolidates in a tight range without breaking downward. What does this suggest?',
                options: [
                  'Strong trend down',
                  'Distribution',
                  'Weak supply / possible failure',
                  'Confirmed reversal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'No follow-through = lack of selling strength, possible fake move.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'A bearish engulfing breaks a minor support, but quickly reverses and rallies above the engulfing high. What is this?',
                options: [
                  'Clean breakdown',
                  'Fake breakdown (bear trap)',
                  'Strong resistance',
                  'Trend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Break → fail → rally = classic trap to take liquidity below.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'A bearish engulfing forms with a long lower wick and small body. What does this MOST likely indicate?',
                options: [
                  'Strong selling',
                  'Weak sellers / rejection',
                  'Perfect setup',
                  'Trend reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long wick = price rejected lower levels, weakening the pattern.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A bearish engulfing forms in the middle of a range and is immediately followed by another engulfing in the opposite direction. What is happening?',
                options: [
                  'Strong trend forming',
                  'Market breakdown',
                  'Choppy market / fake signals',
                  'Institutional selling',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Back-to-back engulfings = indecision → traps on both sides.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'After a liquidity sweep, a bearish engulfing forms but is smaller than the previous bullish candles. What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak reaction',
                  'Trend change',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Small engulfing vs strong bullish candles = sellers are weak.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, but price never creates a lower low afterward. What does this indicate?',
                options: [
                  'Confirmed reversal',
                  'Weak structure shift',
                  'Strong downtrend',
                  'Breakdown',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without a lower low, there\'s no real confirmation of trend change.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'A bearish engulfing forms, price moves slightly down, then sharply rallies above the engulfing high. What just happened?',
                options: [
                  'Strong sell',
                  'Market correction',
                  'Liquidity grab below + trap',
                  'Trend continuation down',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Price moved down to trigger sells, then reversed → classic bear trap.',
              },
            ],
          },
          {
            id: 'chal-bear-hard-2',
            title: 'Trap Scenarios',
            description:
              'Work through real-world trapping scenarios to distinguish high-probability setups from failed patterns.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price taps resistance and forms a bearish engulfing. The next candle immediately breaks above the engulfing high. Best interpretation?',
                options: [
                  'Strong reversal',
                  'Sell more',
                  'Bear trap / failed setup',
                  'Market consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Engulfing failed → sellers lost control → trap for early sellers.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Price breaks above resistance (liquidity sweep), forms a bearish engulfing, and closes strongly below resistance. Best interpretation?',
                options: [
                  'Continue buying',
                  'Strong reversal setup',
                  'Ignore trade',
                  'Weak signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + reclaim + strong close = high-probability reversal.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance with a long lower wick. The next candle is small. Best interpretation?',
                options: [
                  'Strong sell',
                  'Weak sellers / hesitation',
                  'Confirmed reversal',
                  'Breakdown',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Wick = rejection, small follow-up = lack of momentum.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'Price is in a strong uptrend. A bearish engulfing forms but there is no break of the previous low. Best interpretation?',
                options: [
                  'Trend reversal confirmed',
                  'Temporary pullback',
                  'Strong sell',
                  'Market shift',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No structure break = likely just a pullback, not reversal.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Price forms a bearish engulfing at supply and immediately breaks minor support. Best interpretation?',
                options: [
                  'Weak move',
                  'Strong bearish continuation',
                  'Fake signal',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation: 'Engulfing + support break = sellers in control.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'After a liquidity sweep, a small bearish engulfing forms. The next candles are slow and weak. Best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak reaction / possible failure',
                  'Perfect entry',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak follow-through = sellers not strong enough.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A bearish engulfing forms, price drops quickly, then sharply reverses up. Best interpretation?',
                options: [
                  'Breakdown',
                  'Strong downtrend',
                  'Liquidity grab + trap',
                  'Consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Quick drop = bait, reversal = trap for sellers.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price touches trendline resistance, forms a bearish engulfing, then moves sideways for several candles. Best interpretation?',
                options: [
                  'Strong continuation',
                  'Weak confirmation',
                  'Immediate breakdown',
                  'Trend reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No momentum = uncertain setup, not confirmed yet.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, then a strong bullish candle engulfs it. Best interpretation?',
                options: [
                  'Strong sell',
                  'Market stability',
                  'Bull trap',
                  'Bear trap / reversal failure',
                ],
                correctAnswerIndex: 3,
                explanation:
                  'Opposite engulfing wipes out the bearish setup → sellers trapped.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price breaks above resistance, forms a bearish engulfing, but fails to close below resistance. Best interpretation?',
                options: [
                  'Strong reversal',
                  'Fake reclaim / continuation likely',
                  'Sell immediately',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No reclaim = buyers still in control → continuation likely.',
              },
            ],
          },
          {
            id: 'chal-bear-hard-3',
            title: 'Technical Application',
            description:
              'Dissect advanced nuances of the Bearish Engulfing — candle quality, structure context, and high-risk scenarios.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, but the candle closes just slightly below the previous open. What does this suggest?',
                options: [
                  'Strong engulfing',
                  'Weak engulfing / low conviction',
                  'Perfect entry',
                  'Trend reversal confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A shallow close = weak selling pressure, not a strong takeover.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A bearish engulfing forms at a supply zone, followed by a strong bearish candle breaking recent lows. What does this confirm?',
                options: [
                  'Fake move',
                  'Weak supply',
                  'Confirmation of bearish shift',
                  'Market indecision',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Engulfing + strong continuation = real seller control.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'A bearish engulfing forms after a very small bullish candle. What is the concern?',
                options: [
                  'Strong signal',
                  'No issue',
                  'Weak engulfing context',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Engulfing a weak candle = less meaningful shift in control.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, but price stalls and forms equal lows afterward. What does this indicate?',
                options: [
                  'Strong breakdown',
                  'Weak momentum / support ahead',
                  'Trend continuation',
                  'Perfect sell',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Equal lows = sellers struggling to push lower.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'A bearish engulfing forms, then price retraces deeply into the candle and almost breaks its high. What should you think?',
                options: [
                  'Strong sellers',
                  'Weak structure / risk of failure',
                  'Perfect entry',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Deep retrace = sellers not in full control.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'A bearish engulfing forms at moving average resistance, but the moving average is sloping upward. What is the implication?',
                options: [
                  'Strong sell',
                  'Trend reversal confirmed',
                  'Counter-trend risk',
                  'Perfect continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Upward MA = bullish context → higher risk trade.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'After a liquidity sweep, a bearish engulfing forms but is smaller than previous bullish candles. What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak seller strength',
                  'Confirmed trend change',
                  'Perfect setup',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sellers couldn\'t match bullish strength → weak reaction.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price forms a bearish engulfing and breaks structure, but immediately returns above the breakdown level. What is this?',
                options: [
                  'Strong breakdown',
                  'Confirmation',
                  'Fake breakdown / trap',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break → fail = liquidity trap below lows.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A bearish engulfing forms at resistance, followed by a lower high but no lower low. What does this indicate?',
                options: [
                  'Confirmed downtrend',
                  'Partial strength but no confirmation',
                  'Strong sell',
                  'Market reversal complete',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Lower high = good, but no lower low = incomplete structure shift.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'A bearish engulfing forms in an uptrend, then price breaks slightly downward but lacks momentum. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak breakdown / likely failure',
                  'Confirmed trend change',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak breakdown = no strong seller commitment, risk of reversal back up.',
              },
            ],
          },
        ],
      },
      {
        id: 'rejection-wicks',
        title: 'Rejection Wicks (Pinbars)',
        challenges: [],
      },
    ],
  },
  {
    id: 'market-structure',
    title: 'Market Structure',
    icon: '📈',
    subTopics: [
      {
        id: 'higher-highs',
        title: 'Identifying Trends',
        challenges: [],
      },
    ],
  },
  {
    id: 'liquidity',
    title: 'Liquidity Pools',
    icon: '💧',
    subTopics: [],
  },
];
