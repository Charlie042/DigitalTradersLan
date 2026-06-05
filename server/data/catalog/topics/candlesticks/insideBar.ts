import type { SeedSubTopic } from '../../types.js';

export const insideBarSubTopic: SeedSubTopic = {
        id: 'inside-bar',
        title: 'Inside Bar',
        challenges: [
          {
            id: 'chal-inside-easy-1',
            title: 'Identify the Pattern',
            description:
              'Learn the core rules of the Inside Bar pattern and practise spotting it on a chart.',
            difficulty: 'Easy',
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'What defines an Inside Bar pattern?',
                options: [
                  'A candle that breaks above the previous high',
                  "A candle completely contained within the previous candle's high and low",
                  'Two candles of the same size',
                  'A candle with no wicks',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "An Inside Bar forms when a candle's high and low are completely within the range of the previous candle (called the mother bar), signaling consolidation.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What is the first candle in an Inside Bar pattern called?',
                options: ['Baby bar', 'Pin bar', 'Mother bar', 'Doji'],
                correctAnswerIndex: 2,
                explanation:
                  'The first (larger) candle that contains the inside bar is called the mother bar.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What must the second candle (inside bar) do?',
                options: [
                  "Break above the mother bar's high",
                  "Break below the mother bar's low",
                  "Stay within the mother bar's high and low",
                  'Have a long wick only',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "The inside bar must have both its high lower than the mother bar's high AND its low higher than the mother bar's low.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "If the second candle's high matches the mother bar's high exactly, is it still valid?",
                options: [
                  'Yes, always',
                  'No, strict definition requires being fully inside',
                  'Only sometimes',
                  'Only in forex',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Strictly, the inside bar must be fully contained; matching highs/lows is technically a range bar, not a pure inside bar.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What does an Inside Bar pattern indicate?',
                options: [
                  'Strong trending market',
                  'Market consolidation / indecision',
                  'Guaranteed reversal',
                  'Strong volume spike',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'It shows a pause in momentum — buyers and sellers are in balance, waiting for the next move.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Which scenario BEST represents an Inside Bar?',
                options: [
                  'Small candle inside a big candle',
                  'Big candle covering previous small candle',
                  'Two candles of equal size',
                  'A candle with long wicks only',
                ],
                correctAnswerIndex: 0,
                explanation:
                  "The key feature is a smaller candle whose range fits entirely within the previous candle's range.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What increases the strength of an Inside Bar pattern?',
                options: [
                  'Appearing randomly',
                  'Appearing in choppy markets',
                  'Appearing at key support or resistance',
                  'Appearing with low volume only',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'When it forms at key levels, it signals a potential breakout setup with clear direction.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'In an Inside Bar pattern, what is the typical trade trigger?',
                options: [
                  'Close of the inside bar',
                  "Break of the mother bar's high or low",
                  'Open of the next candle',
                  'A long wick only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Traders wait for price to break the mother bar's high (bullish) or low (bearish) before entering.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see this on a chart: Candle 1 is a large bullish candle. Candle 2 is a small candle with high and low inside Candle 1's range. What is this?",
                options: ['Inside bar', 'Bullish engulfing', 'Doji', 'Outside bar'],
                correctAnswerIndex: 0,
                explanation:
                  'The second candle is completely contained within the first → inside bar.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Chart shows: Candle 1 is a small green candle. Candle 2 is a large red candle covering Candle 1 completely. What is this?',
                options: [
                  'Inside bar',
                  'Bearish engulfing',
                  'Reversal pattern',
                  'Consolidation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The second candle is larger and engulfs the first → this is bearish engulfing, not inside bar (the opposite).',
              },
              {
                id: 'q11',
                type: 'theory',
                text: "After a strong trend: Candle 1 is a large bearish candle. Candle 2 is a small candle with high below Candle 1's high and low above Candle 1's low. Is this a valid inside bar?",
                options: ['Yes', 'No', 'Only in crypto', 'Only on higher timeframe'],
                correctAnswerIndex: 0,
                explanation:
                  "Both high and low are within the mother bar's range → valid inside bar.",
              },
              {
                id: 'q12',
                type: 'theory',
                text: "You see Candle 1 as a large candle and Candle 2 as a small candle, but Candle 2's high exceeds Candle 1's high by a few pips. What is the correct interpretation?",
                options: [
                  'Valid inside bar',
                  'Strong inside bar',
                  'Not an inside bar (outside the range)',
                  'Break of structure',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'To qualify as an inside bar, BOTH high and low must be contained — breaking either side invalidates it.',
              },
              {
                id: 'q13',
                type: 'theory',
                text: 'Strong uptrend: price pauses with a large bullish candle followed by a small inside bar. What does this suggest?',
                options: [
                  'Reversal down confirmed',
                  'Continuation pause / potential bullish breakout',
                  'Market crash',
                  'Random consolidation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Inside bar in an uptrend = pause before likely continuation higher.',
              },
            ],
          },
          {
            id: 'chal-inside-easy-2',
            title: 'Pattern Characteristics',
            description:
              'Understand the psychology, volume rules, and core attributes that define a valid Inside Bar.',
            difficulty: 'Easy',
            reward: 75,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Inside bar forms followed by a strong break above the mother bar's high. What does this confirm?",
                options: [
                  'Fake pattern',
                  'Bullish breakout confirmation',
                  'Market indecision',
                  'Downtrend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Break above the mother bar = breakout trigger, confirming bullish direction.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What type of market sentiment does an Inside Bar reflect?',
                options: [
                  'Strong buying pressure',
                  'Strong selling pressure',
                  'Indecision / balance between buyers and sellers',
                  'No activity at all',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'It shows neither side is in full control — the market is compressing before the next move.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What happens to the range of the inside bar compared to the mother bar?',
                options: [
                  'Inside bar range is larger',
                  'Inside bar range is smaller',
                  'They are equal',
                  'No rule',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "The inside bar's range is always smaller, contained within the mother bar.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'What does the size of the inside bar usually indicate?',
                options: [
                  'Market strength',
                  'Degree of compression / coiling',
                  'No significance',
                  'Guaranteed reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Smaller inside bars mean tighter compression, often leading to stronger breakouts.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Which of these is NOT required for a valid Inside Bar?',
                options: [
                  'A mother bar',
                  'A smaller candle after',
                  'The inside bar being a specific color',
                  'Containment within mother bar range',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Inside bar color doesn't matter — what matters is containment.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'What role does volume play in an Inside Bar pattern?',
                options: [
                  'No role at all',
                  'Low volume on inside bar + high volume on breakout strengthens it',
                  'High volume on inside bar confirms it',
                  'Volume cancels it',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Low volume during compression + strong volume on breakout = reliable setup.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What is the psychological meaning behind the pattern?',
                options: [
                  'One side has fully taken over',
                  'Market is catching its breath before the next move',
                  'Traders are exiting the market',
                  'Market is closed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Inside bars represent a pause — indecision, accumulation, or distribution before continuation or reversal.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'What is a common expectation/bias after an Inside Bar?',
                options: [
                  'Guaranteed reversal',
                  'Sideways movement forever',
                  'Breakout in the direction of the prevailing trend',
                  'Market closes',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Most inside bars break in the direction of the existing trend — they are often continuation patterns.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'What should traders combine with Inside Bar for better accuracy?',
                options: [
                  'Random entries',
                  'Trend context and key levels',
                  'Guesswork',
                  'News only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Inside bars work best when aligned with trend direction and at key support/resistance.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'What is the main purpose of identifying an Inside Bar pattern?',
                options: [
                  'To predict exact price',
                  'To spot potential breakout setups after consolidation',
                  'To confirm a completed trend',
                  'To avoid trading',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'It highlights compression zones where a strong breakout is likely to follow.',
              },
              {
                id: 'q11',
                type: 'theory',
                text: "You notice an inside bar forms but it happens in a choppy, directionless market with no clear trend. What's the best interpretation?",
                options: [
                  'Strong breakout setup',
                  'Fake signal likely',
                  'Guaranteed continuation',
                  'Reversal signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without trend or level context, inside bars in chop often lead to false breakouts.',
              },
            ],
          },
          {
            id: 'chal-inside-easy-3',
            title: 'Location Matters',
            description:
              'Practise reading where Inside Bars form and why context dictates their reliability.',
            difficulty: 'Easy',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Where is an Inside Bar MOST effective?',
                options: [
                  'Middle of a choppy range',
                  'At support or resistance in a trending market',
                  'At random price',
                  'During low volume only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Key levels + trend context make inside bars high-probability breakout trades.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Inside Bar after a strong trending candle suggests:',
                options: [
                  'Trend reversal confirmed',
                  'Trend continuation likely after breakout',
                  'Market crash',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Inside bar after strong momentum = pause before continuation.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What does an Inside Bar at a key resistance after an uptrend indicate?',
                options: [
                  'Automatic bullish breakout',
                  'Potential reversal or breakout — watch direction',
                  'Trend confirmation only',
                  'Consolidation forever',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'At resistance, inside bars can break either way — direction of break is the signal.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'An Inside Bar breaking against the prevailing trend is:',
                options: [
                  'Strong setup',
                  'Weak and risky signal',
                  'Guaranteed reversal',
                  'Best entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Counter-trend inside bar breaks fail more often than trend-aligned ones.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What happens when an Inside Bar forms at a demand zone in an uptrend?',
                options: [
                  'Sellers dominate',
                  'Likely bullish continuation after break of mother bar high',
                  'Market stops',
                  'No effect',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Demand zone + uptrend + inside bar = strong continuation setup.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Where should you AVOID trading Inside Bars?',
                options: [
                  'Trending markets',
                  'At key levels',
                  'In tight, choppy ranges with no trend',
                  'On higher timeframes',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Inside bars in directionless chop produce many false breakouts.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Inside Bars on higher timeframes (e.g., Daily) are:',
                options: ['Less reliable', 'More reliable', 'Useless', 'Random'],
                correctAnswerIndex: 1,
                explanation:
                  'Higher timeframe inside bars carry more weight and lead to larger breakout moves.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Strong uptrend with inside bar forming at a previous breakout level, then breaks mother bar high. What is the best interpretation?',
                options: [
                  'Ignore trade',
                  'Strong bullish continuation setup',
                  'Reversal signal',
                  'Market closed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Trend + key level + inside bar breakout = high-probability continuation.',
              },
            ],
          },
          {
            id: 'chal-inside-easy-4',
            title: 'Clean Context',
            description:
              'Apply Inside Bar logic to clean, in-trend setups across multiple location types.',
            difficulty: 'Easy',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Inside Bar forming in a strong uptrend suggests:',
                options: [
                  'Sellers are in control',
                  'Pause before likely continuation up',
                  'Market will reverse immediately',
                  'No trading opportunity',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Inside bars in trends are typically continuation patterns.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'When an Inside Bar forms after a sharp move, it indicates:',
                options: [
                  'Trend exhaustion guaranteed',
                  'Market indecision / compression',
                  'Instant reversal',
                  'Strong breakout already happened',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'After a strong move, price consolidates to digest before the next push.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Inside Bar at a trendline means:',
                options: [
                  'Trend is broken',
                  'Trendline is being tested — watch for breakout direction',
                  'Market is reversing',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Trendline + inside bar = decision zone, breakout direction gives the signal.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'What does an Inside Bar breakout in the direction of the trend indicate?',
                options: [
                  'Weak move',
                  'Trend continuation with momentum',
                  'Market crash',
                  'No movement',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Trend-aligned breakouts from inside bars are the highest probability setups.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Multiple stacked Inside Bars (2-3 in a row) show:',
                options: [
                  'Market confusion only',
                  'Tight compression, often leading to a strong breakout',
                  'Weak price action',
                  'Trend is over',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The tighter the compression, the stronger the expected breakout.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'If an Inside Bar forms far away from any key level, it is:',
                options: [
                  'Strong signal',
                  'Weaker / less reliable',
                  'Guaranteed win',
                  'Best setup',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No key level = less meaningful context, lower probability.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Inside Bar forming on a moving average (e.g., 50 EMA) in an uptrend suggests:',
                options: [
                  'Selling pressure',
                  'Dynamic support being tested — potential bullish continuation',
                  'Market crash',
                  'No trend',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'MA support + inside bar = compression before likely bounce and continuation.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price in uptrend, pulls back to support, forms inside bar. What is the best idea?',
                options: [
                  'Sell immediately',
                  'Ignore',
                  'Look for buy on break of mother bar high',
                  'Wait for crash',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Uptrend + support + inside bar = potential bullish breakout setup.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'Price touches trendline, forms inside bar, breaks above mother bar high. What does this confirm?',
                options: [
                  'Trendline is broken',
                  'Bullish continuation from trendline support',
                  'Market is sideways',
                  'Fake breakout',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Breakout from inside bar at trendline confirms the level held.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price in downtrend, inside bar forms mid-move, breaks below mother bar low. What likely happened?',
                options: [
                  'Trend reversal',
                  'Market closed',
                  'Bearish continuation breakout',
                  'Random noise',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Downtrend + inside bar + break of low = continuation of downtrend.',
              },
            ],
          },
          {
            id: 'chal-inside-med-1',
            title: 'Reading Between the Lines',
            description:
              'Read deeper context: volume, wicks, sweeps, and structure shifts around the Inside Bar.',
            difficulty: 'Medium',
            reward: 125,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price is in an uptrend. An inside bar forms, but price breaks below the mother bar low instead of the high. What does this suggest?',
                options: [
                  'Strong bullish continuation',
                  'Trend-aligned breakout',
                  'Potential reversal or false break — caution needed',
                  'Pattern invalid',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'A counter-trend break from an inside bar is a warning sign, not a strong setup.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'An inside bar forms at resistance, but breakout volume is very low. What is the best interpretation?',
                options: [
                  'Strong breakout',
                  'Weak confirmation / likely fake',
                  'Guaranteed trend change',
                  'No significance',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Low volume breakouts from inside bars often fail.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Price forms an inside bar on a moving average, but the inside bar has a very long upper wick. What does this indicate?',
                options: [
                  'Strong buyers',
                  'Rejection from higher prices — bearish pressure',
                  'Perfect buy entry',
                  'No significance',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long upper wick on inside bar = sellers rejecting higher prices, weakening bullish case.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'An inside bar forms after a liquidity sweep above resistance, then breaks below the mother bar low. What should you expect?',
                options: [
                  'Continued rally',
                  'Strong bearish reversal setup',
                  'Immediate breakout up',
                  'Market crash guaranteed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + inside bar + break low = classic reversal pattern.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'You see an inside bar in a strong downtrend with no sign of slowing. What is the best approach?',
                options: [
                  'Buy aggressively',
                  'Trade the break of mother bar low with trend',
                  'Sell on break of high',
                  'Ignore completely',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Trade with the trend — break of low = continuation setup.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'An inside bar forms at a demand zone and immediately breaks the mother bar high with strong volume. What does this indicate?',
                options: [
                  'Weak signal',
                  'Strong bullish intent / valid breakout',
                  'Market indecision',
                  'Fake breakout',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Demand zone + volume + breakout = high probability continuation.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Price forms multiple inside bars in a sideways, range-bound market. What does this suggest?',
                options: [
                  'Strong trend forming',
                  'High reliability breakouts',
                  'False signals likely — wait for clear direction',
                  'Breakout confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Inside bars in chop produce many fake breakouts — wait for clear trend or level.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'An inside bar forms, but its high and low match the mother bar exactly (not fully inside). What is this?',
                options: [
                  'Valid inside bar',
                  'Strong signal',
                  'Not a true inside bar (equal high/low is a range bar)',
                  'Breakout signal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Strict definition requires the inside bar to be fully contained, not equal.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'An inside bar forms at support, followed by a higher low and breakout above mother bar high. What market structure is forming?',
                options: [
                  'Downtrend',
                  'Consolidation only',
                  'Bullish shift / continuation',
                  'Fake move',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Support + inside bar + breakout + higher low = bullish confirmation.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: "After an inside bar breakout, price returns to retest the mother bar's breakout level. What is this commonly used for?",
                options: [
                  'Exit point',
                  'Entry refinement / second chance entry',
                  'Stop loss removal',
                  'Market exit',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Retests of breakout levels offer lower-risk entries with tighter stops.',
              },
            ],
          },
          {
            id: 'chal-inside-hard-1',
            title: 'Trap Setups & Fake Breakouts',
            description:
              'Identify failed Inside Bar breakouts and the liquidity traps that create them.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price is in an uptrend. An inside bar forms, breaks above mother bar high, then immediately reverses and closes below the mother bar low. What is this most likely?',
                options: [
                  'Strong bullish breakout',
                  'Trend continuation',
                  'Bull trap (failed breakout)',
                  'Valid setup',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break above then sharp reversal = classic trap to grab liquidity from breakout buyers.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'An inside bar forms after price breaks above resistance. The breakout from the inside bar fails to close above resistance. What does this indicate?',
                options: [
                  'Valid continuation',
                  'Strong buy',
                  'Failed reclaim — likely fakeout',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'No reclaim of resistance = buyers lack strength, trap likely.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'You see a clean inside bar at support, but it forms during a very strong bearish trend with large momentum candles. What is the risk?',
                options: [
                  'No risk',
                  'Guaranteed reversal',
                  'Counter-trend trap — inside bar likely breaks lower',
                  'Strong buy',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Strong bearish momentum usually overrides inside bars against the trend.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'An inside bar forms, but immediately after, price consolidates in an even tighter range without breaking either side. What does this suggest?',
                options: [
                  'Strong trend up',
                  'Accumulation confirmed',
                  'Extended compression — wait for clear breakout',
                  'Pattern failed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'More compression = bigger eventual breakout, but premature entries fail.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'An inside bar breaks above mother bar high, but quickly reverses and drops below the inside bar low. What is this?',
                options: [
                  'Clean breakout',
                  'Fake breakout (bull trap)',
                  'Strong support',
                  'Trend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Break → reverse → drop = classic trap for breakout buyers.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'You see an inside bar with long upper AND lower wicks on the mother bar with a small body. What does this MOST likely indicate?',
                options: [
                  'Strong trend forming',
                  'Indecision / volatility — unreliable setup',
                  'Perfect entry',
                  'Guaranteed breakout direction',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Wicks on both sides = choppy indecision, not a clean setup.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'An inside bar forms in the middle of a range, breaks up, then breaks down immediately. What is happening?',
                options: [
                  'Strong trend forming',
                  'Market breakout',
                  'Choppy market / fake signals on both sides',
                  'Institutional buying',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Breaks in both directions = liquidity grabs, no clear bias.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price forms an inside bar after sweeping liquidity, but the breakout candle is very small compared to previous momentum candles. What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak breakout — likely fails',
                  'Trend change confirmed',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Small breakout candle vs strong prior momentum = weak conviction.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'An inside bar forms at resistance, breaks up, but never creates a higher high afterward. What does this indicate?',
                options: [
                  'Confirmed uptrend',
                  'Weak structure — breakout likely to fail',
                  'Strong continuation',
                  'Reversal confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without follow-through highs, the breakout lacks structure confirmation.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Inside bar; price breaks above mother bar high, then sharply reverses below the mother bar low. What just happened?',
                options: [
                  'Strong buy',
                  'Market correction',
                  'Liquidity grab above + trap (bull trap)',
                  'Trend continuation up',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break up triggered buyers, then reversal trapped them — liquidity play.',
              },
            ],
          },
          {
            id: 'chal-inside-hard-2',
            title: 'Trap Scenarios',
            description:
              'Read full multi-candle scenarios involving sweeps, reclaims, and trapped traders.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price taps resistance, forms inside bar, breaks above mother bar high, then immediately reverses below mother bar low. What is the best interpretation?',
                options: [
                  'Strong bullish continuation',
                  'Buy more',
                  'Bull trap / failed breakout',
                  'Market consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Fast reversal after breakout = buyers trapped, often leads to strong move down.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Price sweeps liquidity above resistance, forms inside bar, then breaks below mother bar low strongly. What is the best interpretation?',
                options: [
                  'Continue buying',
                  'Strong bearish reversal setup',
                  'Ignore trade',
                  'Weak signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + inside bar + break of low = high-probability reversal.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Inside bar forms at support; breaks below mother bar low with a small candle, then the next candle is small and slow. What is the best interpretation?',
                options: [
                  'Strong sell',
                  'Weak breakout — likely fake',
                  'Confirmed reversal',
                  'Trend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak momentum on break = sellers not in control, possible trap.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'Price in strong uptrend; inside bar forms, breaks mother bar low briefly, then closes back inside. What is the best interpretation?',
                options: [
                  'Trend reversal confirmed',
                  'Failed break / stop hunt — trend likely resumes',
                  'Strong sell',
                  'Market shift',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Brief break then reclaim = trap for sellers, trend continuation likely.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Inside bar forms at a supply zone, breaks mother bar low, and a strong bearish continuation follows. What is the best interpretation?',
                options: [
                  'Weak move',
                  'Strong bearish continuation setup',
                  'Fake signal',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Supply + inside bar + strong break = valid bearish continuation.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Price sweeps liquidity below support, forms inside bar, then breaks above mother bar high. What is the best interpretation?',
                options: [
                  'Strong sell',
                  'Bullish reversal setup after liquidity grab',
                  'Perfect short entry',
                  'Trend continuation down',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + inside bar + bullish break = reversal off support with trap for sellers.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Inside bar; price spikes above mother bar high, then sharply reverses down below the inside bar low. What is the best interpretation?',
                options: [
                  'Strong breakout',
                  'Bullish continuation',
                  'Bull trap / liquidity grab above',
                  'Consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Quick spike and reversal = classic liquidity trap for breakout buyers.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price touches trendline, forms inside bar, then moves sideways for several candles without breaking either side. What is the best interpretation?',
                options: [
                  'Strong continuation',
                  'Extended consolidation / uncertain direction',
                  'Immediate breakout',
                  'Trend reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No breakout yet = wait for clear direction, don't front-run.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'Inside bar breakout up, then a strong bearish engulfing candle wipes out the move. What is the best interpretation?',
                options: [
                  'Strong buy',
                  'Market stability',
                  'Bear trap',
                  'Bull trap / breakout failure',
                ],
                correctAnswerIndex: 3,
                explanation:
                  'Opposite engulfing after breakout = buyers trapped, often signals reversal.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price breaks above resistance, forms inside bar above resistance, but breaks below mother bar low and closes back below resistance. What is the best interpretation?',
                options: [
                  'Strong reversal up',
                  'Fake breakout / continuation likely down',
                  'Buy immediately',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Failed hold above resistance = fakeout, sellers regain control.',
              },
            ],
          },
          {
            id: 'chal-inside-hard-3',
            title: 'Technical Application',
            description:
              'Stress-test Inside Bar trades against weak conviction, equal highs, MA slope, and structural failures.',
            difficulty: 'Hard',
            reward: 175,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Price forms an inside bar at resistance, but breaks above mother bar high by only a few pips and stalls. What does this suggest?',
                options: [
                  'Strong breakout',
                  'Weak breakout / low conviction',
                  'Perfect entry',
                  'Trend reversal confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Marginal break with no follow-through = weak momentum, likely to fail.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'An inside bar forms at a supply zone, followed by a strong bearish candle breaking below mother bar low. What does this confirm?',
                options: [
                  'Fake move',
                  'Weak supply',
                  'Confirmation of bearish continuation',
                  'Market indecision',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Supply + inside bar + strong break = real seller control.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Price forms an inside bar, but the mother bar itself is very small / weak. What is the concern?',
                options: [
                  'Strong signal',
                  'No issue',
                  'Weak context — both candles lack significance',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Inside a weak mother bar = less meaningful compression, weaker setup.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'You see an inside bar at resistance, breakout up, but price stalls and forms equal highs afterward. What does this indicate?',
                options: [
                  'Strong breakout',
                  'Weak momentum / resistance still holding',
                  'Trend continuation',
                  'Perfect buy',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Equal highs after breakout = buyers struggling, risk of reversal.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'An inside bar breaks up, then price retraces deeply into the mother bar and almost breaks its low. What should you think?',
                options: [
                  'Strong buyers',
                  'Weak structure / risk of failure',
                  'Perfect entry',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Deep retrace = breakout lacks conviction, likely to fail.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Price forms an inside bar on a moving average support, but the moving average is sloping downward. What is the implication?',
                options: [
                  'Strong buy',
                  'Trend reversal confirmed',
                  'Counter-trend risk — MA slope says bearish',
                  'Perfect continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Downward MA = bearish context, bullish inside bar breakouts risky.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'An inside bar forms after a liquidity sweep, but the mother bar is smaller than previous trending candles. What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak compression — less reliable setup',
                  'Confirmed trend change',
                  'Perfect setup',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Smaller mother bar = less significant range, weaker setup.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'An inside bar breaks above mother bar high and structure, but immediately returns below the breakout level. What is this?',
                options: [
                  'Strong breakout',
                  'Confirmation',
                  'Fake breakout / trap',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break → fail = liquidity trap above highs, sellers regain control.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'You see an inside bar at support, breakout up, followed by a higher low but no higher high. What does this indicate?',
                options: [
                  'Confirmed uptrend',
                  'Partial strength but no confirmation',
                  'Strong buy',
                  'Market reversal complete',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Higher low is good, but without a higher high, structure shift is incomplete.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'An inside bar forms in an uptrend, breaks up slightly but lacks momentum. What is the best interpretation?',
                options: [
                  'Strong continuation',
                  'Weak breakout / likely failure',
                  'Confirmed trend change',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak momentum on breakout = no strong buyer commitment, risk of reversal.',
              },
            ],
          },
        ],
};
