import type { SeedSubTopic } from '../../types.js';

export const hammerPinBarCandleSubTopic: SeedSubTopic = {
  id: 'hammer-pin-bar-candle',
  title: 'Hammer / Pin Bar Candle',
  challenges: [
          {
            id: "chal-hammer-easy-1",
            title: "Identify the Pattern",
            description:
              "Learn the core rules of the Hammer / Pin Bar candle and practise spotting it on a chart.",
            difficulty: "Easy",
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "What defines a Hammer / Pin Bar candle?",
                options: [
                  "A candle with a large body and no wicks",
                  "A candle with a small body and a long wick (tail) on one side",
                  "Two candles of equal size",
                  "A candle with equal open and close",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A Hammer/Pin Bar has a small body and a long wick (at least 2x the body size), showing price was rejected from one direction.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "In a bullish Hammer/Pin Bar, where is the long wick located?",
                options: [
                  "Above the body (upper wick)",
                  "Below the body (lower wick)",
                  "On both sides equally",
                  "No wick at all",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A bullish Hammer has a long lower wick, showing sellers tried to push down but buyers rejected them strongly.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What must the wick-to-body ratio typically be for a valid Pin Bar?",
                options: [
                  "1:1",
                  "At least 2:1 (wick twice the body)",
                  "Equal",
                  "1:3 (body larger)",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A valid Pin Bar typically has a wick at least 2-3 times the size of the body.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "If a candle has a small body and only a small wick (not long), is it a valid Pin Bar?",
                options: [
                  "Yes",
                  "No — the wick must be long and dominant",
                  "Only sometimes",
                  "Only in crypto",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a long dominant wick, it's just a spinning top or small-body candle, not a true Pin Bar.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "What does a bullish Hammer/Pin Bar indicate?",
                options: [
                  "Continuation of downtrend",
                  "Market indecision only",
                  "Rejection of lower prices / potential bullish reversal",
                  "Strong selling pressure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "The long lower wick shows sellers were rejected, suggesting buyers are stepping in.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "Which scenario BEST represents a bullish Hammer?",
                options: [
                  "Small body at the bottom, long upper wick",
                  "Small body at the top, long lower wick",
                  "Large body with no wicks",
                  "Candle with equal open and close",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A bullish Hammer has the small body at the top of the candle with a long lower wick extending below.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "What increases the strength of a Hammer/Pin Bar pattern?",
                options: [
                  "Appearing randomly",
                  "Appearing in the middle of a tight range",
                  "Appearing at a key support or resistance level",
                  "Appearing with no context",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "At key levels, the rejection shown by the Pin Bar becomes meaningful and high-probability.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "In a bullish Hammer/Pin Bar, what should happen to the close?",
                options: [
                  "Close near the low of the candle",
                  "Close near the high of the candle (small body at top)",
                  "Close at the exact midpoint",
                  "No rule",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A bullish Hammer closes near the high, leaving the long lower wick as evidence of rejection.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see this on a chart after a downtrend:\nCandle: Small body at top, long lower wick, very small upper wick\nWhat is this?",
                options: [
                  "Bullish Hammer / Pin Bar",
                  "Shooting Star",
                  "Bearish engulfing",
                  "Inside bar",
                ],
                correctAnswerIndex: 0,
                explanation:
                  "Small body at top + long lower wick at the bottom of a downtrend = bullish Hammer signaling potential reversal.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "Chart shows:\nCandle: Small body at bottom, long upper wick, very small lower wick\nAfter an uptrend\nWhat is this?",
                options: [
                  "Bullish Hammer",
                  "Shooting Star / Bearish Pin Bar",
                  "Doji",
                  "Inside bar",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Long upper wick + small body at bottom after an uptrend = Shooting Star / Bearish Pin Bar → potential reversal down.",
              },
              {
                id: 'q11',
                type: 'theory',
                text: "After a downtrend:\nCandle with body near top and lower wick about 2.5x the body size\nIs this a valid bullish Pin Bar?",
                options: [
                  "Yes",
                  "No",
                  "Only in forex",
                  "Only on higher timeframe",
                ],
                correctAnswerIndex: 0,
                explanation:
                  "Wick 2x or more the body + body near top + downtrend context = valid bullish Pin Bar.",
              },
              {
                id: 'q12',
                type: 'theory',
                text: "You see:\nCandle with small body\nUpper wick and lower wick both roughly equal in size\nWhat is the correct interpretation?",
                options: [
                  "Strong bullish Pin Bar",
                  "Strong bearish Pin Bar",
                  "Long-legged Doji / spinning top — not a Pin Bar",
                  "Break of structure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Equal wicks on both sides = indecision candle, not a Pin Bar (Pin Bars require one dominant wick).",
              },
              {
                id: 'q13',
                type: 'theory',
                text: "You see:\nUptrend → price hits resistance\nCandle forms with small body at bottom and long upper wick\nWhat does this suggest?",
                options: [
                  "Continuation up",
                  "Strong buying",
                  "Bearish Pin Bar — potential reversal down",
                  "Random consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Long upper wick at resistance = buyers pushed up but got rejected → reversal likely.",
              }
            ],
          },
          {
            id: "chal-hammer-easy-2",
            title: "Key Characteristics",
            description:
              "Understand the psychology, volume rules, and core attributes that define a valid Hammer / Pin Bar.",
            difficulty: "Easy",
            reward: 75,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "You see:\nBullish Hammer at support\nFollowed by a strong bullish candle closing above the Hammer's high\nWhat does this confirm?",
                options: [
                  "Fake pattern",
                  "Bullish reversal confirmation",
                  "Market indecision",
                  "Downtrend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Hammer + bullish confirmation candle = high-probability reversal setup.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "What type of market sentiment does a bullish Hammer/Pin Bar reflect?",
                options: [
                  "Strong selling pressure",
                  "Rejection of lower prices by buyers",
                  "Market confusion",
                  "No activity",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "The long lower wick shows sellers tried to push price down but buyers rejected them, taking control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What happens to the relationship between wick and body in a Pin Bar?",
                options: [
                  "Body is larger than wick",
                  "Wick is significantly larger than body (at least 2x)",
                  "They are equal",
                  "No rule",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "The dominant wick is the defining feature — it must be at least 2-3x the body size.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "What does the length of the wick usually indicate?",
                options: [
                  "Market weakness",
                  "Strength of rejection at that price level",
                  "No significance",
                  "Guaranteed reversal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A longer wick = stronger rejection = more meaningful signal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "Which of these is NOT required for a Hammer/Pin Bar?",
                options: [
                  "A small body",
                  "A long dominant wick",
                  "A specific color",
                  "Context (prior trend / level)",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Color is secondary — structure (body + wick) and context matter most.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "What role does volume play in a Hammer/Pin Bar pattern?",
                options: [
                  "No role at all",
                  "High volume on the Pin Bar strengthens the rejection",
                  "Low volume strengthens it",
                  "Volume cancels it",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "High volume during the rejection shows strong conviction behind the move.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "What is the psychological meaning behind a bullish Hammer?",
                options: [
                  "Sellers remain in control",
                  "Buyers overwhelm sellers at lower prices, rejecting the move down",
                  "Traders exit the market",
                  "Market stops moving",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sellers pushed price down, but buyers aggressively bought and pushed price back up → shift in control.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "What is a common expectation/bias after a bullish Hammer at support?",
                options: [
                  "Immediate continuation down",
                  "Sideways movement only",
                  "Potential bullish reversal with confirmation",
                  "Market closes",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "A valid Hammer at support often leads to a reversal, but confirmation (next bullish candle) is key.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "What should traders combine with a Hammer/Pin Bar for better accuracy?",
                options: [
                  "Random entries",
                  "Key levels, trend context, and confirmation candle",
                  "Guesswork",
                  "News only",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Pin Bars alone can be weak — context and confirmation make them reliable.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "What is the main purpose of identifying a Hammer/Pin Bar pattern?",
                options: [
                  "To predict exact price",
                  "To spot rejection zones where reversals are likely",
                  "To confirm a completed trend",
                  "To avoid trading",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Pin Bars highlight strong rejection levels — high-probability spots for reversals or entries.",
              },
              {
                id: 'q11',
                type: 'theory',
                text: "You notice:\nPin Bar forms\nBut it happens in the middle of a choppy range with no clear level nearby\nWhat's the best interpretation?",
                options: [
                  "Strong reversal",
                  "Fake signal likely",
                  "Guaranteed reversal",
                  "Breakout signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "In chop with no level, Pin Bars produce many false signals.",
              }
            ],
          },
          {
            id: "chal-hammer-med-1",
            title: "Location Matters",
            description:
              "See how Hammer / Pin Bar setups change when they form at support, resistance, trendlines, and liquidity sweeps.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Where is a Hammer/Pin Bar MOST effective?",
                options: [
                  "Middle of a chart",
                  "At a key support or resistance level",
                  "At random price",
                  "During low volume only",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Pin Bars at key levels represent real rejection = high-probability setups.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A bullish Hammer at a trendline support suggests:",
                options: [
                  "Trend reversal down",
                  "Trend continuation up after rejection",
                  "Market crash",
                  "No signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Trendline + Hammer = buyers defending the level → continuation of uptrend.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What does a Pin Bar after a liquidity sweep indicate?",
                options: [
                  "Weak buyers/sellers",
                  "Fake signal",
                  "Strong reversal setup — smart money rejection",
                  "Consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Sweep + Pin Bar = stop hunt followed by institutional rejection → reversal likely.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A bullish Hammer forming at resistance is:",
                options: [
                  "Strong buy signal",
                  "Weak / risky signal",
                  "Guaranteed reversal",
                  "Best entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Resistance is a selling zone — buying here fights the structure.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "What happens when a bullish Hammer forms at a demand zone?",
                options: [
                  "Sellers dominate",
                  "Strong institutional buying / bullish reversal likely",
                  "Market stops",
                  "No effect",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Demand zones + Hammer = big buyers stepping in, high-probability long setup.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "Where should you AVOID trading Pin Bars?",
                options: [
                  "At key support",
                  "At key resistance",
                  "In tight, directionless ranges with no context",
                  "On higher timeframes",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Pin Bars in chop without level context produce many fake signals.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "Pin Bars on higher timeframes (e.g., Daily) are:",
                options: [
                  "Less reliable",
                  "More reliable and significant",
                  "Useless",
                  "Random",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Higher timeframe Pin Bars carry more weight and often lead to larger reversals.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice breaks below support (liquidity sweep)\nThen forms a bullish Hammer\nFollowed by strong bullish candle\nWhat is the best interpretation?",
                options: [
                  "Continue selling",
                  "Strong bullish reversal setup",
                  "Ignore trade",
                  "Market closed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Hammer + bullish confirmation = high-probability reversal.",
              }
            ],
          },
          {
            id: "chal-hammer-med-2",
            title: "Clean Context",
            description:
              "Apply the Hammer / Pin Bar across clean market conditions — support, resistance, trendlines, and moving averages.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "A bullish Hammer at a support level suggests:",
                options: [
                  "Sellers are in full control",
                  "Buyers rejecting lower prices — potential reversal",
                  "Market will crash",
                  "No trading opportunity",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Support + Hammer = buyers defending the level, potential reversal.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "When a bullish Hammer forms after a downtrend, it indicates:",
                options: [
                  "Continuation down",
                  "Market indecision only",
                  "Possible reversal up after buyer rejection",
                  "Strong selling pressure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "After a downtrend, a Hammer shows sellers losing control and buyers stepping in.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "A Shooting Star at a trendline resistance means:",
                options: [
                  "Trendline is broken",
                  "Price rejecting the trendline — potential continuation down",
                  "Market is reversing up",
                  "No signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Trendline resistance + Shooting Star = sellers defending the level.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "What does a bullish Pin Bar at a demand zone indicate?",
                options: [
                  "Weak buyers",
                  "Strong institutional buying / bullish reversal",
                  "Market crash",
                  "No movement",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Demand zones + Pin Bar = big buyers defending → strong reversal setup.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A Pin Bar after a liquidity sweep shows:",
                options: [
                  "Market confusion",
                  "Stop hunt followed by strong rejection / reversal",
                  "Weak buyers",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Pin Bar = smart money reversing the move after grabbing stops.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "If a Pin Bar forms far away from any key level, it is:",
                options: [
                  "Strong signal",
                  "Weaker / less reliable",
                  "Guaranteed win",
                  "Best setup",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a key level, the rejection has less meaning.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "A bullish Pin Bar bouncing off a moving average (e.g., 50 EMA) suggests:",
                options: [
                  "Selling pressure",
                  "Dynamic support holding — potential bullish continuation",
                  "Market crash",
                  "No trend",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "MA support + Pin Bar = dynamic rejection, often continuation of uptrend.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice in downtrend\nHits support\nForms bullish Hammer\nWhat is the best idea?",
                options: [
                  "Sell",
                  "Ignore",
                  "Look for buy after bullish confirmation",
                  "Wait for crash",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Downtrend + support + Hammer = potential reversal, wait for confirmation.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see:\nPrice touches trendline support\nForms bullish Pin Bar\nNext candle closes above the Pin Bar high\nWhat does this confirm?",
                options: [
                  "Trendline is weak",
                  "Trendline holding — bullish continuation confirmed",
                  "Market is sideways",
                  "Fake breakout",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Trendline + Pin Bar + bullish confirmation = valid continuation setup.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nPrice in uptrend\nHits resistance\nForms Shooting Star (bearish Pin Bar)\nWhat likely happened?",
                options: [
                  "Strong continuation up",
                  "Market closed",
                  "Buyer exhaustion / rejection at resistance — potential reversal",
                  "Trend continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Long upper wick at resistance = buyers rejected, potential reversal setup.",
              }
            ],
          },
          {
            id: "chal-hammer-med-3",
            title: "Reading Between the Lines",
            description:
              "Judge weaker Hammer / Pin Bar signals, failed follow-through, and when context undermines the setup.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in a downtrend and taps support. A bullish Hammer forms, but the next candle breaks below the Hammer's low.\nWhat does this suggest?",
                options: [
                  "Strong reversal confirmed",
                  "Pattern confirmed",
                  "Pattern failure / trend continues down",
                  "Strong buy signal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break below the Hammer's low invalidates the setup — sellers regained control.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A bullish Pin Bar forms at support, but volume is very low.\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak confirmation — may not hold",
                  "Guaranteed buy",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Low volume during a Pin Bar = lack of real conviction behind the rejection.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "Price forms a bullish Hammer at a moving average, but the Hammer has a very long upper wick too.\nWhat does this indicate?",
                options: [
                  "Strong buyers",
                  "Mixed signal / two-sided rejection — weaker setup",
                  "Perfect buy entry",
                  "No significance",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Wicks on both sides dilute the Pin Bar signal — it's more like indecision than clean rejection.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A bullish Hammer forms after a liquidity sweep below support, but price does not break above the previous high.\nWhat should you expect?",
                options: [
                  "Strong uptrend",
                  "Weak or temporary bounce only",
                  "Immediate breakout",
                  "Market crash",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without breaking structure, it's likely just a short-term reaction, not full reversal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "You see a bullish Hammer at support in a very strong downtrend with no sign of slowing.\nWhat is the best approach?",
                options: [
                  "Buy aggressively",
                  "Ignore the trend",
                  "Wait for strong confirmation before countering trend",
                  "Sell immediately",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Counter-trend trades need extra confirmation — don't front-run.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "A bullish Pin Bar forms at a demand zone and immediately breaks a minor resistance level.\nWhat does this indicate?",
                options: [
                  "Weak signal",
                  "Strong bullish intent / valid reversal",
                  "Market indecision",
                  "Fake breakout",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Demand + Pin Bar + structure break = buyers in strong control.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "Price forms multiple Pin Bars in a sideways, range-bound market.\nWhat does this suggest?",
                options: [
                  "Strong trend forming",
                  "High reliability",
                  "False signals likely / market chopping",
                  "Breakout confirmed",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Pin Bars in chop often fail — the market is indecisive.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "A \"Pin Bar\" forms, but the wick is only slightly longer than the body (about 1.2x).\nWhat is this?",
                options: [
                  "Valid Pin Bar",
                  "Strong reversal",
                  "Not a true Pin Bar — wick ratio too small",
                  "Breakout signal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Valid Pin Bars need wicks at least 2x the body.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "A bullish Pin Bar forms at support, followed by a higher low and higher high.\nWhat market structure is forming?",
                options: [
                  "Downtrend",
                  "Consolidation only",
                  "Bullish shift / trend reversal confirmation",
                  "Fake move",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Pin Bar + higher low + higher high = structural reversal confirmation.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "After a bullish Pin Bar, price returns to retest the Pin Bar's 50% level (midpoint).\nWhat is this commonly used for?",
                options: [
                  "Exit point",
                  "Entry refinement / second chance entry",
                  "Stop loss removal",
                  "Market exit",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Retests to the Pin Bar midpoint offer lower-risk entries with tight stops.",
              }
            ],
          },
          {
            id: "chal-hammer-hard-1",
            title: "Trap Setups & Fake Pin Bars",
            description:
              "Spot failed Hammers, weak wick dominance, and counter-trend traps that look like Pin Bars.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in a downtrend. A bullish Hammer forms at support, but the next candle closes weak and the candle after breaks the Hammer's low.\nWhat is this most likely?",
                options: [
                  "Strong reversal",
                  "Continuation signal",
                  "Failed Pin Bar / bear trap for buyers",
                  "Breakout up",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break of Hammer low after weak follow-up = buyers trapped, trend continues.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A bullish Hammer forms after price breaks below support. However, the Hammer does NOT close back above the broken support.\nWhat does this indicate?",
                options: [
                  "Valid reversal",
                  "Strong buy",
                  "Failed reclaim — likely continuation down",
                  "Trend change",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "If price doesn't reclaim support, sellers are still in control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "You see a clean bullish Hammer at support, but it forms during a very strong bearish trend with large momentum candles.\nWhat is the risk?",
                options: [
                  "No risk",
                  "Guaranteed reversal",
                  "Counter-trend trap — Hammer likely overrun by momentum",
                  "Breakout up confirmed",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Strong trends often steamroll over Pin Bar signals against them.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A bullish Pin Bar forms, but immediately after, price consolidates in a tight range without breaking upward.\nWhat does this suggest?",
                options: [
                  "Strong trend up",
                  "Accumulation confirmed",
                  "Weak momentum / possible failure",
                  "Confirmed reversal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "No follow-through = buyers lack conviction, fake rejection likely.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A bullish Pin Bar breaks above a minor resistance, but quickly reverses and drops below the Pin Bar low.\nWhat is this?",
                options: [
                  "Clean breakout",
                  "Fake breakout / bull trap",
                  "Strong support",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Break → fail → drop below Pin Bar = classic liquidity trap.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "You see:\nPin Bar with long lower wick\nBut the body is very large relative to the wick\nWhat does this MOST likely indicate?",
                options: [
                  "Strong rejection",
                  "Weak Pin Bar — not enough wick dominance",
                  "Perfect setup",
                  "Guaranteed reversal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A big body reduces wick significance — weaker rejection signal.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "A bullish Pin Bar forms in the middle of a range, immediately followed by a bearish Pin Bar.\nWhat is happening?",
                options: [
                  "Strong trend forming",
                  "Market breakout",
                  "Choppy market / traps on both sides",
                  "Institutional buying",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Back-to-back opposing Pin Bars = indecision and liquidity grabs, no clear bias.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "Price forms a bullish Hammer after sweeping liquidity, but the Hammer is much smaller than the prior bearish momentum candles.\nWhat does this suggest?",
                options: [
                  "Strong reversal",
                  "Weak reaction — buyers not matching seller strength",
                  "Trend change",
                  "Perfect entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Small Pin Bar vs strong trending candles = underwhelming rejection.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "A bullish Pin Bar forms at support, but price never creates a higher high afterward.\nWhat does this indicate?",
                options: [
                  "Confirmed reversal",
                  "Weak structure shift / reversal incomplete",
                  "Strong uptrend",
                  "Breakout",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a higher high, structure has not confirmed the reversal.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nBullish Hammer\nPrice moves slightly up\nThen sharply drops below the Hammer's low\nWhat just happened?",
                options: [
                  "Strong buy",
                  "Market correction",
                  "Liquidity grab above Pin Bar + bull trap",
                  "Trend continuation up",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Price moved up to trigger buys, then reversed → classic Pin Bar trap.",
              }
            ],
          },
          {
            id: "chal-hammer-hard-2",
            title: "Trap Scenarios",
            description:
              "Work through chart scenarios where Hammer / Pin Bar traps catch traders on the wrong side.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "You see:\nPrice taps support\nForms bullish Hammer\nNext candle immediately breaks below the Hammer's low\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Buy more",
                  "Bull trap / failed Pin Bar",
                  "Market consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break of Hammer low = buyers failed, trap setup for reversal traders.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "You see:\nPrice breaks below support (liquidity sweep)\nForms bullish Hammer\nCloses strongly above support\nWhat is the best interpretation?",
                options: [
                  "Continue selling",
                  "Strong bullish reversal setup",
                  "Ignore trade",
                  "Weak signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Hammer + reclaim = high-probability reversal.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "You see:\nBullish Pin Bar forms at support\nBut candle has long upper wick as well\nNext candle is small\nWhat is the best interpretation?",
                options: [
                  "Strong buy",
                  "Two-sided indecision / weak setup",
                  "Confirmed reversal",
                  "Breakout",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Wicks on both sides = mixed signal, not a clean Pin Bar rejection.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "You see:\nPrice in strong uptrend\nBearish Pin Bar (Shooting Star) forms\nNo break of previous low\nWhat is the best interpretation?",
                options: [
                  "Trend reversal confirmed",
                  "Temporary pullback — trend likely resumes",
                  "Strong sell",
                  "Market shift",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No structural break = just a pullback, not a reversal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "You see:\nBullish Pin Bar forms at demand\nImmediately breaks minor resistance\nWhat is the best interpretation?",
                options: [
                  "Weak move",
                  "Strong bullish continuation",
                  "Fake signal",
                  "Market indecision",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Pin Bar + structure break = buyers in strong control.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "You see:\nPrice sweeps liquidity below support\nForms small bullish Hammer\nNext candles are slow and weak\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak reaction — possible failure",
                  "Perfect entry",
                  "Trend confirmed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Weak follow-through = buyers not strong enough to capitalize on the sweep.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "You see:\nBullish Hammer\nPrice spikes up quickly\nThen sharply reverses down below the Hammer's low\nWhat is the best interpretation?",
                options: [
                  "Breakout",
                  "Strong uptrend",
                  "Liquidity grab above + bull trap",
                  "Consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Quick spike = bait, reversal = classic trap for breakout buyers.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice touches trendline\nForms bullish Pin Bar\nThen moves sideways for several candles without breakout\nWhat is the best interpretation?",
                options: [
                  "Strong continuation",
                  "Weak confirmation / uncertain setup",
                  "Immediate breakout",
                  "Trend reversal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No momentum = setup not confirmed yet, wait for direction.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see:\nBullish Hammer at support\nFollowed by strong bearish candle that engulfs the Hammer\nWhat is the best interpretation?",
                options: [
                  "Strong buy",
                  "Market stability",
                  "Bear trap",
                  "Pin Bar failure / reversal invalidated",
                ],
                correctAnswerIndex: 3,
                explanation:
                  "Bearish engulfing wipes out the Pin Bar — buyers trapped, trend continues down.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nPrice breaks below support\nForms bullish Hammer\nBut fails to close back above support\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Failed reclaim / continuation likely down",
                  "Buy immediately",
                  "Market indecision",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No reclaim of support = sellers still in control, continuation likely.",
              }
            ],
          },
          {
            id: "chal-hammer-hard-3",
            title: "Technical Application",
            description:
              "Apply Hammer / Pin Bar rules to structure breaks, moving-average context, and weak confirmation.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price forms a bullish Hammer at support, but the candle closes only slightly above the open.\nWhat does this suggest?",
                options: [
                  "Strong Hammer",
                  "Weak Pin Bar / low conviction",
                  "Perfect entry",
                  "Trend reversal confirmed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shallow close = weak rejection, lacks buyer dominance.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A bullish Pin Bar forms at a demand zone, followed by a strong bullish candle breaking recent highs.\nWhat does this confirm?",
                options: [
                  "Fake move",
                  "Weak demand",
                  "Confirmation of bullish reversal",
                  "Market indecision",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Demand + Pin Bar + structure break = real buyer control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "Price forms a bullish Hammer, but the prior candle is very small and weak.\nWhat is the concern?",
                options: [
                  "Strong signal",
                  "No issue",
                  "Weak context — no meaningful move to reverse",
                  "Trend continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Pin Bars matter most after strong moves — after weak candles, they're less meaningful.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "You see a bullish Hammer at support, followed by bullish confirmation, but price then stalls and forms equal highs.\nWhat does this indicate?",
                options: [
                  "Strong breakout",
                  "Weak momentum / resistance ahead",
                  "Trend continuation",
                  "Perfect buy",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Equal highs = buyers struggling to push higher, risk of rejection.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A bullish Pin Bar forms, then price retraces deeply into the Pin Bar and almost breaks its low.\nWhat should you think?",
                options: [
                  "Strong buyers",
                  "Weak structure / risk of failure",
                  "Perfect entry",
                  "Trend confirmed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Deep retrace = rejection wasn't strong enough, reversal at risk.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "Price forms a bullish Hammer on moving average support, but the MA is sloping sharply downward.\nWhat is the implication?",
                options: [
                  "Strong buy",
                  "Trend reversal confirmed",
                  "Counter-trend risk — MA slope says bearish",
                  "Perfect continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Downward MA = bearish trend context, bullish Pin Bars risky against it.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "A bullish Hammer forms after a liquidity sweep, but the lower wick is only slightly longer than the body.\nWhat does this suggest?",
                options: [
                  "Strong reversal",
                  "Weak rejection — less reliable setup",
                  "Confirmed trend change",
                  "Perfect setup",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Weak wick dominance = less convincing rejection signal.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "A bullish Pin Bar forms and breaks structure, but immediately returns below the breakout level.\nWhat is this?",
                options: [
                  "Strong breakout",
                  "Confirmation",
                  "Fake breakout / trap",
                  "Trend continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break → fail = liquidity trap above highs.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see a bullish Hammer at support, followed by a higher low but no higher high.\nWhat does this indicate?",
                options: [
                  "Confirmed uptrend",
                  "Partial strength but no structural confirmation",
                  "Strong buy",
                  "Market reversal complete",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Higher low is good, but without a higher high, structure shift is incomplete.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "A bullish Hammer forms in a downtrend, confirmation candle is weak and barely breaks the Hammer's high.\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak breakout / likely failure",
                  "Confirmed trend change",
                  "Perfect entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Weak confirmation = no real buyer commitment, reversal at risk of failing.",
              }
            ],
          }
  ],
};
