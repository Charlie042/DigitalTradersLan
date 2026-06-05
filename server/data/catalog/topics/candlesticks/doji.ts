import type { SeedSubTopic } from '../../types.js';

export const dojiSubTopic: SeedSubTopic = {
        id: 'doji',
        title: 'Doji / Indecision Candles',
        challenges: [
          {
            id: 'chal-doji-easy-1',
            title: 'Identify the Pattern',
            description:
              'Learn the core rules of the Doji candle and practise spotting its common variants.',
            difficulty: 'Easy',
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'What defines a Doji candle?',
                options: [
                  'A candle with a large bullish body',
                  'A candle where open and close are almost equal (little or no body)',
                  'A candle with no wicks',
                  'A strong bearish candle',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A Doji forms when the open and close are virtually the same, creating little to no body — signaling indecision between buyers and sellers.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What color is a Doji candle?',
                options: [
                  'Always green',
                  'Always red',
                  "Usually neutral / color doesn't matter",
                  'Always blue',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'A true Doji has no real body, so color is insignificant — what matters is the near-equal open and close.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What must be true about a Doji's open and close?",
                options: [
                  'They must be far apart',
                  'They must be nearly equal',
                  'Open must be higher than close',
                  'Close must be higher than open',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The defining feature of a Doji is the open and close being at or very near the same price.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'If a candle has a small body but a noticeable open-close difference, is it still a Doji?',
                options: [
                  'Yes, always',
                  "No, it's a spinning top or small-body candle, not a true Doji",
                  'Only in forex',
                  'Only on higher timeframe',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'True Dojis require near-identical open and close — larger bodies are classified as spinning tops or indecision candles but not pure Dojis.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What does a Doji candle indicate?',
                options: [
                  'Strong buying pressure',
                  'Strong selling pressure',
                  'Market indecision / balance between buyers and sellers',
                  'Guaranteed reversal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'A Doji reflects a moment where neither side wins — indecision that may lead to reversal or continuation depending on context.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Which scenario BEST represents a Doji?',
                options: [
                  'Large green body with small wicks',
                  'Candle with tiny body and wicks on both sides',
                  'Candle with no wicks but large body',
                  'Two candles of the same size',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'The classic Doji has a tiny or no body with wicks showing that price moved but returned to the open.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What increases the strength of a Doji signal?',
                options: [
                  'Appearing randomly in the middle of a trend',
                  'Appearing at a key support or resistance level',
                  'Appearing during low volume only',
                  'Appearing with no context',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'At key levels, a Doji becomes meaningful — it signals potential reversal or exhaustion.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'What is typically needed to confirm a Doji signal?',
                options: [
                  'Nothing — the Doji alone is enough',
                  'A follow-up candle confirming direction',
                  'A news release',
                  'A second Doji right after',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Dojis alone are weak — the next candle's direction (breaking the Doji's high or low) confirms the bias.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'After an uptrend you see a candle with a small body, long upper wick, small lower wick, and open and close nearly equal. What is this?',
                options: [
                  'Gravestone Doji',
                  'Dragonfly Doji',
                  'Bullish engulfing',
                  'Inside bar',
                ],
                correctAnswerIndex: 0,
                explanation:
                  'A Gravestone Doji has a long upper wick with open/close at the bottom — often a bearish reversal signal at resistance.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'A candle has a small body, long lower wick, small upper wick, and open and close nearly equal. What is this?',
                options: [
                  'Gravestone Doji',
                  'Dragonfly Doji',
                  'Bearish engulfing',
                  'Outside bar',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A Dragonfly Doji has a long lower wick with open/close at the top — often a bullish reversal signal at support.',
              },
              {
                id: 'q11',
                type: 'theory',
                text: 'After a downtrend a candle forms with a tiny body in the middle and long wicks on both sides. Is this a valid Doji?',
                options: [
                  'Yes — long-legged Doji',
                  'No',
                  'Only in crypto',
                  'Only on higher timeframe',
                ],
                correctAnswerIndex: 0,
                explanation:
                  'This is a long-legged Doji, showing major indecision with large price swings in both directions.',
              },
              {
                id: 'q12',
                type: 'theory',
                text: 'You see a candle with open and close exactly equal and no wicks at all (flat line). What is the correct interpretation?',
                options: [
                  'Standard Doji',
                  'Four-price Doji (extremely rare / low liquidity)',
                  'Invalid pattern',
                  'Break of structure',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A four-price Doji has identical open, high, low, and close — usually seen in illiquid markets.',
              },
              {
                id: 'q13',
                type: 'theory',
                text: 'Strong uptrend → price hits resistance and a Doji candle forms right at the resistance level. What does this suggest?',
                options: [
                  'Continuation up guaranteed',
                  'Potential reversal / exhaustion signal',
                  'Market crash',
                  'No significance',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Doji at resistance after uptrend = buyer exhaustion, potential reversal if confirmed.',
              },
            ],
          },
          {
            id: 'chal-doji-easy-2',
            title: 'Pattern Characteristics',
            description:
              'Understand the psychology, wicks, body rules, and confirmation logic behind a Doji.',
            difficulty: 'Easy',
            reward: 75,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Doji at support followed by a strong bullish candle closing above the Doji's high. What does this confirm?",
                options: [
                  'Fake pattern',
                  'Bullish reversal confirmation',
                  'Market indecision continues',
                  'Downtrend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Doji + bullish confirmation candle = reversal setup at support.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'What type of market sentiment does a Doji reflect?',
                options: [
                  'Strong buying pressure',
                  'Strong selling pressure',
                  'Indecision / equilibrium between buyers and sellers',
                  'No activity at all',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'A Doji shows neither side is in control — the battle ended in a draw.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What happens to the relationship between open and close in a Doji?',
                options: [
                  'Open is much higher than close',
                  'Open equals or nearly equals close',
                  'Close is much higher than open',
                  'No rule',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'By definition, open and close are at or near the same level.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'What does the length of the wicks on a Doji usually indicate?',
                options: [
                  'Market weakness',
                  'Degree of volatility / intensity of the battle',
                  'No significance',
                  'Guaranteed direction',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Longer wicks mean wider price swings during the session, reflecting strong two-sided fighting.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'Which of these is NOT required for a Doji?',
                options: [
                  'Near-equal open and close',
                  'Wicks (optional but common)',
                  'A specific color',
                  'Small or no body',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Color doesn't matter — the body is so small it's insignificant.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'What role does context play in a Doji pattern?',
                options: [
                  'No role at all',
                  'Context (location + trend) determines meaning',
                  'Context cancels the Doji',
                  'Only color matters',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A Doji at a key level means reversal potential; in the middle of a trend, it means consolidation.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'What is the psychological meaning behind a Doji?',
                options: [
                  'One side has fully won',
                  'Buyers and sellers fought and ended in a stalemate',
                  'Traders have all left the market',
                  'Market is closed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A Doji is a visual representation of a tug-of-war ending in a draw — momentum is paused.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'What is a common expectation/bias after a Doji at a key level?',
                options: [
                  'Immediate continuation',
                  'Guaranteed reversal',
                  'Potential reversal or pause — confirmation needed',
                  'Market closes',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Dojis signal possibility, not certainty — wait for the next candle to confirm direction.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'What should traders combine with a Doji for better accuracy?',
                options: [
                  'Random entries',
                  'Key levels, trend context, and a confirmation candle',
                  'Guesswork',
                  'News only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Dojis are weak alone — they need confluence with levels and confirmation to be reliable.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'What is the main purpose of identifying a Doji pattern?',
                options: [
                  'To predict exact price',
                  'To spot potential exhaustion or pause points in the market',
                  'To confirm a strong trend',
                  'To avoid trading',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Dojis highlight moments where momentum weakens, often preceding reversals or consolidation.',
              },
              {
                id: 'q11',
                type: 'theory',
                text: "You notice a Doji forms in the middle of a strong trending move with no key level nearby. What's the best interpretation?",
                options: [
                  'Strong reversal signal',
                  'Weak / insignificant — likely just a pause',
                  'Guaranteed reversal',
                  'Major breakout signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without a key level, a mid-trend Doji is usually just consolidation, not a reversal.',
              },
            ],
          },
          {
            id: 'chal-doji-easy-3',
            title: 'Location Matters',
            description:
              'Practise reading where Dojis form and why context dictates their reliability.',
            difficulty: 'Easy',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Where is a Doji MOST effective?',
                options: [
                  'Middle of a trending move',
                  'At a key support or resistance after a strong move',
                  'At random price',
                  'During low volume only',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Key level + prior trend + Doji = high-probability exhaustion signal.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A Doji at the top of a strong uptrend suggests:',
                options: [
                  'Trend continuation guaranteed',
                  'Buyer exhaustion / potential reversal',
                  'Market crash imminent',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'After sustained buying, a Doji shows buyers can no longer push higher.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'What does a Dragonfly Doji at support indicate?',
                options: [
                  'Weak buyers',
                  'Strong buyer defence / potential bullish reversal',
                  'Fake signal',
                  'Consolidation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long lower wick at support = sellers tried to push down but buyers rejected them strongly.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A Doji appearing in the middle of a tight range is:',
                options: [
                  'Strong reversal signal',
                  'Weak / meaningless — market is already indecisive',
                  'Guaranteed breakout',
                  'Best entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'In chop, Dojis add no new information — the whole market is already indecisive.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'What happens when a Gravestone Doji forms at resistance in an uptrend?',
                options: [
                  'Buyers dominate',
                  'Strong bearish reversal potential — sellers rejecting higher prices',
                  'Market stops',
                  'No effect',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long upper wick at resistance = buyers pushed up but sellers rejected strongly → reversal likely.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Where should you AVOID trading Dojis?',
                options: [
                  'At major support or resistance',
                  'After a strong trending move',
                  'In choppy, directionless ranges',
                  'On higher timeframes',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Dojis in chop produce many false signals since the whole market is already indecisive.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Dojis on higher timeframes (e.g., Daily, Weekly) are:',
                options: [
                  'Less reliable',
                  'More reliable and significant',
                  'Useless',
                  'Random',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Higher timeframe Dojis represent major indecision and often precede significant moves.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price breaks above resistance (liquidity sweep), then forms a Gravestone Doji, followed by a strong bearish candle. What is the best interpretation?',
                options: [
                  'Continue buying',
                  'Strong bearish reversal setup',
                  'Ignore trade',
                  'Market closed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + Gravestone Doji + bearish confirmation = high-probability reversal.',
              },
            ],
          },
          {
            id: 'chal-doji-easy-4',
            title: 'Clean Context',
            description:
              'Apply Doji logic to clean, in-context setups across multiple location types.',
            difficulty: 'Easy',
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: 'Doji at a support level suggests:',
                options: [
                  'Sellers are in full control',
                  'Indecision — buyers may be stepping in',
                  'Market will crash',
                  'No trading opportunity',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Support + Doji = sellers losing momentum, buyers potentially defending.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'When a Doji forms after a strong uptrend, it indicates:',
                options: [
                  'Trend continuation guaranteed',
                  'Possible exhaustion / slowdown in momentum',
                  'Instant reversal',
                  'Strong buying pressure',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'After sustained buying, a Doji shows buyers are running out of steam.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'A Doji at a trendline means:',
                options: [
                  'Trendline is broken',
                  'Trendline is being tested — watch for confirmation',
                  'Market is reversing for sure',
                  'No signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Trendline + Doji = decision point; direction of next candle matters.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'What does a Doji at a demand zone indicate?',
                options: [
                  'Weak buyers',
                  'Potential institutional buying / bullish reversal possible',
                  'Market crash',
                  'No movement',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Demand zones + Doji = possible reversal as big buyers defend the level.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'A Dragonfly Doji after a downtrend shows:',
                options: [
                  'Market confusion',
                  'Strong rejection of lower prices — potential bullish reversal',
                  'Weak buyers',
                  'Trend continuation down',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long lower wick shows price was rejected at the lows — buyers took control.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'If a Doji forms far away from any key level, it is:',
                options: [
                  'Strong signal',
                  'Weaker / less reliable',
                  'Guaranteed reversal',
                  'Best setup',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No key level = no meaningful context, low-probability signal.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A Doji rejecting off a moving average (e.g., 50 EMA) suggests:',
                options: [
                  'Selling pressure only',
                  'Dynamic support or resistance holding — potential bounce',
                  'Market crash',
                  'No trend',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'MA + Doji = compression at dynamic level, often followed by a bounce.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price in downtrend hits support and forms a Dragonfly Doji. What is the best idea?',
                options: [
                  'Sell',
                  'Ignore',
                  'Look for buy after a bullish confirmation candle',
                  'Wait for crash',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Downtrend + support + Dragonfly Doji = potential reversal, wait for confirmation.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'Price touches trendline, forms a Doji, and the next candle closes strongly in the trend direction. What does this confirm?',
                options: [
                  'Trendline is weak',
                  'Trendline holding — trend likely to continue',
                  'Market is sideways',
                  'Fake breakout',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Doji at trendline + trend-aligned confirmation = valid continuation.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price in uptrend hits resistance and forms a Gravestone Doji. What likely happened?',
                options: [
                  'Strong buying continues',
                  'Market closed',
                  'Buyer exhaustion / potential reversal',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Gravestone at resistance = buyers pushed up but got rejected → reversal likely.',
              },
            ],
          },
          {
            id: 'chal-doji-med-1',
            title: 'Reading Between the Lines',
            description:
              'Read deeper context: volume, wicks, sweeps, and structure shifts around Doji candles.',
            difficulty: 'Medium',
            reward: 125,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in an uptrend and forms a Doji at resistance, but the next candle breaks above the Doji's high. What does this suggest?",
                options: [
                  'Reversal confirmed',
                  'Trend continuation — Doji was just a pause',
                  'Pattern failure',
                  'Trend reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Breaking above the Doji's high invalidates the reversal idea — trend continues.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A Doji forms at support, but volume is very low throughout. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak signal / lacks conviction',
                  'Guaranteed buy',
                  'Trend continuation',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Low volume during a Doji = no real interest yet, wait for volume on confirmation.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Price forms a Doji on a moving average, but the Doji has a very long upper wick. What does this indicate?',
                options: [
                  'Strong buyers',
                  'Rejection from higher prices — bearish bias',
                  'Perfect buy entry',
                  'No significance',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long upper wick on Doji = sellers pushed back from highs, hinting bearish.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A Doji forms after a liquidity sweep below support, followed by a strong bullish candle. What should you expect?',
                options: [
                  'Continued downtrend',
                  'Bullish reversal after liquidity grab',
                  'Immediate crash',
                  'Market closes',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + Doji + bullish confirmation = classic reversal pattern.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'You see a Doji in a strong downtrend with no key level nearby. What is the best approach?',
                options: [
                  'Buy aggressively',
                  'Ignore — likely just a pause in the trend',
                  'Sell immediately',
                  'Close all positions',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Without a key level, a Doji mid-trend is usually just consolidation.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: "A Doji forms at a demand zone and is immediately followed by a strong bullish candle breaking the Doji's high. What does this indicate?",
                options: [
                  'Weak signal',
                  'Strong bullish confirmation at demand',
                  'Market indecision continues',
                  'Fake breakout',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Demand zone + Doji + bullish confirmation = high-probability reversal.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'Price forms multiple Dojis in a row in a sideways market. What does this suggest?',
                options: [
                  'Strong trend forming',
                  'High reliability reversal',
                  'Extended indecision / choppy market — false signals likely',
                  'Breakout confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Repeated Dojis in chop = ongoing indecision, often leads to whipsaws.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'A "Doji" forms, but its body is clearly visible (about 15% of total range). What is this?',
                options: [
                  'Valid Doji',
                  'Strong reversal signal',
                  'Spinning top (not a true Doji)',
                  'Breakout signal',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'A true Doji needs near-identical open and close — visible bodies are spinning tops.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A Doji forms at resistance, followed by a lower high and lower low on subsequent candles. What market structure is forming?',
                options: [
                  'Uptrend',
                  'Consolidation only',
                  'Bearish shift / reversal confirmation',
                  'Fake move',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Doji + lower high + lower low = structure confirming reversal.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: "After a Doji at support, price retraces to retest the Doji's low before moving up. What is this commonly used for?",
                options: [
                  'Exit point',
                  'Entry refinement / second chance entry',
                  'Stop loss removal',
                  'Market exit',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Retests of the Doji's low offer lower-risk entries with tight stops.",
              },
            ],
          },
          {
            id: 'chal-doji-hard-1',
            title: 'Trap Setups & Fake Dojis',
            description:
              'Identify failed Doji reversals and the liquidity traps that wreck them.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in a downtrend. A Doji forms at support, but the next candle closes weak and below the Doji's low. What is this most likely?",
                options: [
                  'Strong reversal',
                  'Continuation signal',
                  'Failed reversal / trend continues down',
                  'Breakout up',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break below Doji's low = buyers failed to step in, trend continues.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'A Doji forms after price breaks above resistance. However, the very next candle closes back below resistance. What does this indicate?',
                options: [
                  'Valid continuation',
                  'Strong buy',
                  'Fakeout / failed reclaim — likely reversal down',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Doji + failed hold above resistance = trap for breakout buyers.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'You see a clean Doji at support, but it forms during a very strong bearish trend with large momentum candles. What is the risk?',
                options: [
                  'No risk',
                  'Guaranteed reversal',
                  'Counter-trend trap — Doji likely overrun by trend',
                  'Strong buy',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Strong momentum usually steamrolls over Doji signals against the trend.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'A Doji forms, but immediately after, price forms another Doji, then another — three in a row. What does this suggest?',
                options: [
                  'Strong trend forming',
                  'Accumulation confirmed',
                  'Extreme indecision / wait for clear breakout',
                  'Reversal confirmed',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Stacked Dojis = extended indecision, direction not yet determined.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A Doji forms at resistance, the next candle breaks below the Doji, but the candle after reverses and breaks above the Doji's high. What is this?",
                options: [
                  'Clean breakdown',
                  'Stop hunt / fake bearish signal → bullish continuation',
                  'Strong reversal confirmed',
                  'Trend continuation down',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Break down then reclaim up = liquidity grab below the Doji, trap for sellers.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'You see a Doji with very long upper AND lower wicks (long-legged Doji) at no particular level. What does this MOST likely indicate?',
                options: [
                  'Strong directional bias',
                  'Extreme volatility / high indecision — unreliable on its own',
                  'Perfect entry',
                  'Guaranteed reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Long-legged Dojis without level context = noise, not a clean setup.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A Doji forms in the middle of a range, and price breaks up, then breaks down, both within a few candles. What is happening?',
                options: [
                  'Strong trend forming',
                  'Market breakout',
                  'Choppy market / fake signals on both sides',
                  'Institutional buying',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break in both directions = liquidity plays, no clear bias.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price forms a Doji after sweeping liquidity, but the confirmation candle is very small and weak. What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak conviction — likely fails',
                  'Trend change confirmed',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak confirmation = buyers/sellers not committed, signal likely to fail.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'A Doji forms at resistance, price breaks down, but never creates a lower low afterward. What does this indicate?',
                options: [
                  'Confirmed downtrend',
                  'Weak structure — reversal may fail',
                  'Strong bearish move',
                  'Reversal confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a lower low, there's no structural confirmation of reversal.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "Doji at support; price drops below the Doji's low, then sharply reverses up and rallies. What just happened?",
                options: [
                  'Strong sell',
                  'Market correction',
                  'Liquidity grab below + trap (bear trap)',
                  'Trend continuation down',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Drop triggered sellers, reversal trapped them — classic liquidity play off Doji support.',
              },
            ],
          },
          {
            id: 'chal-doji-hard-2',
            title: 'Trap Scenarios',
            description:
              'Read full multi-candle scenarios involving Doji-based sweeps, reclaims, and trapped traders.',
            difficulty: 'Hard',
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price taps resistance, forms a Gravestone Doji, and the next candle immediately breaks above the Doji's high. What is the best interpretation?",
                options: [
                  'Strong bearish reversal',
                  'Sell more',
                  'Failed reversal / bullish continuation',
                  'Market consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break above Doji's high invalidates the bearish signal — buyers in control.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Price sweeps liquidity below support, forms a Dragonfly Doji, and a strong bullish candle follows. What is the best interpretation?',
                options: [
                  'Continue selling',
                  'Strong bullish reversal setup',
                  'Ignore trade',
                  'Weak signal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Sweep + Dragonfly + bullish confirmation = high-probability reversal at support.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Doji forms at support; the next candle is small and slow with no clear direction. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak confirmation / wait for clearer signal',
                  'Confirmed reversal',
                  'Breakdown',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Doji needs strong confirmation — weak follow-up = no trade yet.',
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'Price in strong uptrend; a Doji forms with no break of either Doji high or low for several candles. What is the best interpretation?',
                options: [
                  'Trend reversal confirmed',
                  'Extended consolidation / trend likely resumes',
                  'Strong sell',
                  'Market shift',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Prolonged indecision in a trend usually ends with trend continuation.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: "Doji forms at a supply zone; the next candle is strong bearish and breaks the Doji's low. What is the best interpretation?",
                options: [
                  'Weak move',
                  'Strong bearish reversal setup',
                  'Fake signal',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Supply + Doji + bearish confirmation = valid reversal.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Price sweeps liquidity above resistance, forms a Doji, but the next candle is weak and small. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Weak reaction / possible failure',
                  'Perfect entry',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak follow-through after a Doji = signal unreliable.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: "Doji; price spikes above the Doji, then sharply reverses below the Doji's low. What is the best interpretation?",
                options: [
                  'Breakout up',
                  'Strong uptrend',
                  'Liquidity grab above + bull trap',
                  'Consolidation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Spike + reversal off Doji = classic trap for breakout buyers.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'Price touches trendline, forms a Doji, then moves sideways for several candles without clear direction. What is the best interpretation?',
                options: [
                  'Strong continuation',
                  'Weak confirmation / uncertain setup',
                  'Immediate breakout',
                  'Trend reversal',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No momentum after Doji = setup not confirmed yet.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'Doji at support, followed by a bullish candle, then a strong bearish candle that engulfs everything. What is the best interpretation?',
                options: [
                  'Strong buy',
                  'Market stability',
                  'Bear trap',
                  'Bull trap / reversal failure',
                ],
                correctAnswerIndex: 3,
                explanation:
                  'Strong bearish engulfing wipes out reversal — buyers trapped.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: 'Price breaks below support, forms a Doji, but fails to close back above support. What is the best interpretation?',
                options: [
                  'Strong reversal',
                  'Failed reclaim / continuation likely down',
                  'Buy immediately',
                  'Market indecision',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'No reclaim of support = sellers still in control, continuation likely.',
              },
            ],
          },
          {
            id: 'chal-doji-hard-3',
            title: 'Technical Application',
            description:
              'Stress-test Doji trades against weak confirmation, MA slope, structure failures, and fake breakouts.',
            difficulty: 'Hard',
            reward: 175,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price forms a Doji at support, but the confirmation candle closes only slightly above the Doji's high. What does this suggest?",
                options: [
                  'Strong reversal',
                  'Weak confirmation / low conviction',
                  'Perfect entry',
                  'Trend reversal confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'A marginal close above = weak buying strength, not a strong takeover.',
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A Doji forms at a supply zone, followed by a strong bearish candle closing below the Doji's low. What does this confirm?",
                options: [
                  'Fake move',
                  'Weak supply',
                  'Confirmation of bearish reversal',
                  'Market indecision',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Supply + Doji + strong bearish confirmation = real seller control.',
              },
              {
                id: 'q3',
                type: 'theory',
                text: 'Price forms a Doji, but it happens after a very small, weak candle. What is the concern?',
                options: [
                  'Strong signal',
                  'No issue',
                  'Weak context — no strong prior move to reverse',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Dojis matter most after strong moves — after weak candles, they're less meaningful.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: 'You see a Doji at support with bullish confirmation, but then price stalls and forms equal highs afterward. What does this indicate?',
                options: [
                  'Strong breakout',
                  'Weak momentum / resistance ahead',
                  'Trend continuation',
                  'Perfect buy',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Equal highs after reversal = buyers struggling, risk of rejection.',
              },
              {
                id: 'q5',
                type: 'theory',
                text: 'A Doji forms with a strong confirmation candle, then price retraces deeply into the Doji and almost breaks its low. What should you think?',
                options: [
                  'Strong buyers',
                  'Weak structure / risk of failure',
                  'Perfect entry',
                  'Trend confirmed',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Deep retrace = reversal lacks conviction, risk of failure.',
              },
              {
                id: 'q6',
                type: 'theory',
                text: 'Price forms a Doji on moving average support, but the moving average is sloping sharply downward. What is the implication?',
                options: [
                  'Strong buy',
                  'Trend reversal confirmed',
                  'Counter-trend risk — MA slope says bearish',
                  'Perfect continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Downward MA = bearish context, bullish Dojis risky against trend.',
              },
              {
                id: 'q7',
                type: 'theory',
                text: 'A Doji forms after a liquidity sweep, but the wicks are very small (not dramatic). What does this suggest?',
                options: [
                  'Strong reversal',
                  'Weak rejection — less reliable setup',
                  'Confirmed trend change',
                  'Perfect setup',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Small wicks = weak rejection, less convincing reversal signal.',
              },
              {
                id: 'q8',
                type: 'theory',
                text: 'A Doji forms; the confirmation breaks structure, but immediately returns below the breakout level. What is this?',
                options: [
                  'Strong breakout',
                  'Confirmation',
                  'Fake breakout / trap',
                  'Trend continuation',
                ],
                correctAnswerIndex: 2,
                explanation:
                  'Break → fail = liquidity trap, reversal invalidated.',
              },
              {
                id: 'q9',
                type: 'theory',
                text: 'You see a Doji at support with bullish confirmation, followed by a higher low but no higher high. What does this indicate?',
                options: [
                  'Confirmed uptrend',
                  'Partial strength but no structural confirmation',
                  'Strong buy',
                  'Market reversal complete',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Higher low is good, but no higher high means structure shift is incomplete.',
              },
              {
                id: 'q10',
                type: 'theory',
                text: "A Doji forms in a downtrend at support; the confirmation candle is weak and barely breaks the Doji's high. What is the best interpretation?",
                options: [
                  'Strong reversal',
                  'Weak signal / likely failure',
                  'Confirmed trend change',
                  'Perfect entry',
                ],
                correctAnswerIndex: 1,
                explanation:
                  'Weak confirmation = no real buyer commitment, reversal at risk of failing.',
              },
            ],
          },
        ],
};
