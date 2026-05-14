import type { SeedSubTopic } from '../../types.js';

export const shootingStarSubTopic: SeedSubTopic = {
  id: 'shooting-star',
  title: 'Shooting Star',
  challenges: [
          {
            id: "chal-shoot-easy-1",
            title: "Identify the Pattern",
            description:
              "Learn the core rules of the Shooting Star candle and practise spotting it on a chart.",
            difficulty: "Easy",
            reward: 50,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "What defines a Shooting Star candle?",
                options: [
                  "A candle with a large body and no wicks",
                  "A candle with a small body at the bottom and a long upper wick",
                  "Two candles of equal size",
                  "A candle with equal open and close",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A Shooting Star has a small body at the bottom and a long upper wick (at least 2x the body), showing buyers pushed up but got rejected strongly.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "In a Shooting Star, where is the long wick located?",
                options: [
                  "Above the body (upper wick)",
                  "Below the body (lower wick)",
                  "On both sides equally",
                  "No wick at all",
                ],
                correctAnswerIndex: 0,
                explanation:
                  "A Shooting Star has a long upper wick, showing buyers tried to push up but sellers rejected them strongly.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What must the wick-to-body ratio typically be for a valid Shooting Star?",
                options: [
                  "1:1",
                  "At least 2:1 (upper wick twice the body)",
                  "Equal",
                  "1:3 (body larger)",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A valid Shooting Star typically has an upper wick at least 2-3 times the size of the body.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "If a candle has a small body and only a small upper wick (not long), is it a valid Shooting Star?",
                options: [
                  "Yes",
                  "No — the upper wick must be long and dominant",
                  "Only sometimes",
                  "Only in crypto",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a long dominant upper wick, it's just a small-body candle, not a true Shooting Star.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "What does a Shooting Star indicate?",
                options: [
                  "Continuation of uptrend",
                  "Market indecision only",
                  "Rejection of higher prices / potential bearish reversal",
                  "Strong buying pressure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "The long upper wick shows buyers were rejected, suggesting sellers are stepping in.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "Which scenario BEST represents a Shooting Star?",
                options: [
                  "Small body at the top, long lower wick",
                  "Small body at the bottom, long upper wick",
                  "Large body with no wicks",
                  "Candle with equal open and close",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A Shooting Star has the small body at the bottom of the candle with a long upper wick extending above.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "What increases the strength of a Shooting Star pattern?",
                options: [
                  "Appearing randomly",
                  "Appearing in the middle of a tight range",
                  "Appearing at a key resistance level after an uptrend",
                  "Appearing with no context",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "At resistance after an uptrend, the rejection shown by the Shooting Star becomes meaningful and high-probability.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "In a Shooting Star, what should happen to the close?",
                options: [
                  "Close near the high of the candle",
                  "Close near the low of the candle (small body at bottom)",
                  "Close at the exact midpoint",
                  "No rule",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A Shooting Star closes near the low, leaving the long upper wick as evidence of rejection.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see this on a chart after an uptrend:\nCandle: Small body at bottom, long upper wick, very small lower wick\nWhat is this?",
                options: [
                  "Bullish Hammer",
                  "Shooting Star",
                  "Bullish engulfing",
                  "Inside bar",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Small body at bottom + long upper wick at the top of an uptrend = Shooting Star signaling potential reversal down.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "Chart shows:\nCandle: Small body at top, long lower wick, very small upper wick\nAfter a downtrend\nWhat is this?",
                options: [
                  "Shooting Star",
                  "Bullish Hammer / Bullish Pin Bar",
                  "Doji",
                  "Inside bar",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Long lower wick + small body at top after a downtrend = bullish Hammer, not Shooting Star (opposite pattern).",
              },
              {
                id: 'q11',
                type: 'theory',
                text: "After an uptrend:\nCandle with body near bottom and upper wick about 2.5x the body size\nIs this a valid Shooting Star?",
                options: [
                  "Yes",
                  "No",
                  "Only in forex",
                  "Only on higher timeframe",
                ],
                correctAnswerIndex: 0,
                explanation:
                  "Upper wick 2x or more the body + body near bottom + uptrend context = valid Shooting Star.",
              },
              {
                id: 'q12',
                type: 'theory',
                text: "You see:\nCandle with small body\nUpper wick and lower wick both roughly equal in size\nWhat is the correct interpretation?",
                options: [
                  "Strong Shooting Star",
                  "Strong Hammer",
                  "Long-legged Doji / spinning top — not a Shooting Star",
                  "Break of structure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Equal wicks on both sides = indecision candle, not a Shooting Star (must have dominant upper wick).",
              },
              {
                id: 'q13',
                type: 'theory',
                text: "You see:\nUptrend → price hits resistance\nCandle forms with small body at bottom and long upper wick\nWhat does this suggest?",
                options: [
                  "Continuation up",
                  "Strong buying",
                  "Shooting Star — potential reversal down",
                  "Random consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Long upper wick at resistance = buyers pushed up but got rejected → reversal likely.",
              }
            ],
          },
          {
            id: "chal-shoot-easy-2",
            title: "Key Characteristics",
            description:
              "Understand the psychology, volume rules, and core attributes that define a valid Shooting Star.",
            difficulty: "Easy",
            reward: 75,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "You see:\nShooting Star at resistance\nFollowed by a strong bearish candle closing below the Shooting Star's low\nWhat does this confirm?",
                options: [
                  "Fake pattern",
                  "Bearish reversal confirmation",
                  "Market indecision",
                  "Uptrend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shooting Star + bearish confirmation candle = high-probability reversal setup.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "What type of market sentiment does a Shooting Star reflect?",
                options: [
                  "Strong buying pressure",
                  "Rejection of higher prices by sellers",
                  "Market confusion",
                  "No activity",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "The long upper wick shows buyers tried to push price up but sellers rejected them, taking control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What happens to the relationship between wick and body in a Shooting Star?",
                options: [
                  "Body is larger than wick",
                  "Upper wick is significantly larger than body (at least 2x)",
                  "They are equal",
                  "No rule",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "The dominant upper wick is the defining feature — it must be at least 2-3x the body size.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "What does the length of the upper wick usually indicate?",
                options: [
                  "Market weakness",
                  "Strength of rejection at higher price levels",
                  "No significance",
                  "Guaranteed reversal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "A longer upper wick = stronger rejection from above = more meaningful bearish signal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "Which of these is NOT required for a Shooting Star?",
                options: [
                  "A small body at the bottom",
                  "A long dominant upper wick",
                  "A specific color",
                  "Context (prior uptrend / resistance level)",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Color is secondary — structure (body + wick) and context matter most.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "What role does volume play in a Shooting Star pattern?",
                options: [
                  "No role at all",
                  "High volume on the Shooting Star strengthens the rejection",
                  "Low volume strengthens it",
                  "Volume cancels it",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "High volume during the rejection shows strong conviction behind the selling.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "What is the psychological meaning behind a Shooting Star?",
                options: [
                  "Buyers remain in control",
                  "Sellers overwhelm buyers at higher prices, rejecting the move up",
                  "Traders exit the market",
                  "Market stops moving",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Buyers pushed price up, but sellers aggressively sold and pushed price back down → shift in control.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "What is a common expectation/bias after a Shooting Star at resistance?",
                options: [
                  "Immediate continuation up",
                  "Sideways movement only",
                  "Potential bearish reversal with confirmation",
                  "Market closes",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "A valid Shooting Star at resistance often leads to a reversal, but confirmation (next bearish candle) is key.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "What should traders combine with a Shooting Star for better accuracy?",
                options: [
                  "Random entries",
                  "Key levels, trend context, and confirmation candle",
                  "Guesswork",
                  "News only",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shooting Stars alone can be weak — context and confirmation make them reliable.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "What is the main purpose of identifying a Shooting Star pattern?",
                options: [
                  "To predict exact price",
                  "To spot rejection zones where bearish reversals are likely",
                  "To confirm a completed uptrend",
                  "To avoid trading",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shooting Stars highlight strong rejection at highs — high-probability spots for short entries.",
              },
              {
                id: 'q11',
                type: 'theory',
                text: "You notice:\nShooting Star forms\nBut it happens in the middle of a choppy range with no clear level nearby\nWhat's the best interpretation?",
                options: [
                  "Strong reversal",
                  "Fake signal likely",
                  "Guaranteed reversal",
                  "Breakout signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "In chop with no level, Shooting Stars produce many false signals.",
              }
            ],
          },
          {
            id: "chal-shoot-med-1",
            title: "Location Matters",
            description:
              "See how Shooting Star setups change when they form at resistance, supply, trendlines, and liquidity sweeps.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Where is a Shooting Star MOST effective?",
                options: [
                  "Middle of a chart",
                  "At a key resistance level after an uptrend",
                  "At random price",
                  "During low volume only",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Resistance + uptrend + Shooting Star = real rejection, high-probability setup.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A Shooting Star at a trendline resistance suggests:",
                options: [
                  "Trend reversal up",
                  "Trend continuation down after rejection",
                  "Market rally",
                  "No signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Trendline + Shooting Star = sellers defending the level → continuation of downtrend.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "What does a Shooting Star after a liquidity sweep above resistance indicate?",
                options: [
                  "Weak sellers",
                  "Fake signal",
                  "Strong reversal setup — smart money rejection",
                  "Consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Sweep + Shooting Star = stop hunt followed by institutional selling → reversal likely.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A Shooting Star forming at support is:",
                options: [
                  "Strong sell signal",
                  "Weak / risky signal",
                  "Guaranteed reversal",
                  "Best entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Support is a buying zone — selling here fights the structure.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "What happens when a Shooting Star forms at a supply zone?",
                options: [
                  "Buyers dominate",
                  "Strong institutional selling / bearish reversal likely",
                  "Market stops",
                  "No effect",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Supply zones + Shooting Star = big sellers stepping in, high-probability short setup.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "Where should you AVOID trading Shooting Stars?",
                options: [
                  "At key resistance",
                  "At supply zones",
                  "In tight, directionless ranges with no context",
                  "On higher timeframes",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Shooting Stars in chop without level context produce many fake signals.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "Shooting Stars on higher timeframes (e.g., Daily) are:",
                options: [
                  "Less reliable",
                  "More reliable and significant",
                  "Useless",
                  "Random",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Higher timeframe Shooting Stars carry more weight and often lead to larger reversals.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice breaks above resistance (liquidity sweep)\nThen forms a Shooting Star\nFollowed by strong bearish candle\nWhat is the best interpretation?",
                options: [
                  "Continue buying",
                  "Strong bearish reversal setup",
                  "Ignore trade",
                  "Market closed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Shooting Star + bearish confirmation = high-probability reversal.",
              }
            ],
          },
          {
            id: "chal-shoot-med-2",
            title: "Clean Context",
            description:
              "Apply the Shooting Star across clean market conditions — resistance, supply, trendlines, and moving averages.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "A Shooting Star at a resistance level suggests:",
                options: [
                  "Buyers are in full control",
                  "Sellers rejecting higher prices — potential reversal",
                  "Market will rally",
                  "No trading opportunity",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Resistance + Shooting Star = sellers defending the level, potential reversal.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "When a Shooting Star forms after an uptrend, it indicates:",
                options: [
                  "Continuation up",
                  "Market indecision only",
                  "Possible reversal down after seller rejection",
                  "Strong buying pressure",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "After an uptrend, a Shooting Star shows buyers losing control and sellers stepping in.",
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
                  "Trendline resistance + Shooting Star = sellers defending the level strongly.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "What does a Shooting Star at a supply zone indicate?",
                options: [
                  "Weak sellers",
                  "Strong institutional selling / bearish reversal",
                  "Market rally",
                  "No movement",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Supply zones + Shooting Star = big sellers defending → strong reversal setup.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A Shooting Star after a liquidity sweep above resistance shows:",
                options: [
                  "Market confusion",
                  "Stop hunt followed by strong rejection / reversal",
                  "Weak sellers",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Shooting Star = smart money reversing the move after grabbing stops.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "If a Shooting Star forms far away from any key level, it is:",
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
                text: "A Shooting Star rejecting off a moving average (e.g., 50 EMA) suggests:",
                options: [
                  "Buying pressure",
                  "Dynamic resistance holding — potential bearish continuation",
                  "Market rally",
                  "No trend",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "MA resistance + Shooting Star = dynamic rejection, often continuation of downtrend.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice in uptrend\nHits resistance\nForms Shooting Star\nWhat is the best idea?",
                options: [
                  "Buy",
                  "Ignore",
                  "Look for sell after bearish confirmation",
                  "Wait for rally",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Uptrend + resistance + Shooting Star = potential reversal, wait for confirmation.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see:\nPrice touches trendline resistance\nForms Shooting Star\nNext candle closes below the Shooting Star low\nWhat does this confirm?",
                options: [
                  "Trendline is weak",
                  "Trendline holding — bearish continuation confirmed",
                  "Market is sideways",
                  "Fake breakout",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Trendline + Shooting Star + bearish confirmation = valid continuation setup.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nPrice in uptrend\nHits resistance\nForms Shooting Star\nWhat likely happened?",
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
            id: "chal-shoot-med-3",
            title: "Reading Between the Lines",
            description:
              "Judge weaker Shooting Star signals, failed follow-through, and when context undermines the setup.",
            difficulty: "Medium",
            reward: 100,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in an uptrend and taps resistance. A Shooting Star forms, but the next candle breaks above the Shooting Star's high.\nWhat does this suggest?",
                options: [
                  "Strong reversal confirmed",
                  "Pattern confirmed",
                  "Pattern failure / trend continues up",
                  "Strong sell signal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break above the Shooting Star's high invalidates the setup — buyers regained control.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A Shooting Star forms at resistance, but volume is very low.\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak confirmation — may not hold",
                  "Guaranteed sell",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Low volume during a Shooting Star = lack of real conviction behind the rejection.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "Price forms a Shooting Star at a moving average, but the Shooting Star has a very long lower wick too.\nWhat does this indicate?",
                options: [
                  "Strong sellers",
                  "Mixed signal / two-sided rejection — weaker setup",
                  "Perfect sell entry",
                  "No significance",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Wicks on both sides dilute the Shooting Star signal — it's more like indecision than clean rejection.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A Shooting Star forms after a liquidity sweep above resistance, but price does not break below the previous low.\nWhat should you expect?",
                options: [
                  "Strong downtrend",
                  "Weak or temporary drop only",
                  "Immediate breakdown",
                  "Market rally",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without breaking structure, it's likely just a short-term reaction, not full reversal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "You see a Shooting Star at resistance in a very strong uptrend with no sign of slowing.\nWhat is the best approach?",
                options: [
                  "Sell aggressively",
                  "Ignore the trend",
                  "Wait for strong confirmation before countering trend",
                  "Buy immediately",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Counter-trend trades need extra confirmation — don't front-run.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "A Shooting Star forms at a supply zone and immediately breaks a minor support level.\nWhat does this indicate?",
                options: [
                  "Weak signal",
                  "Strong bearish intent / valid reversal",
                  "Market indecision",
                  "Fake breakdown",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Supply + Shooting Star + structure break = sellers in strong control.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "Price forms multiple Shooting Stars in a sideways, range-bound market.\nWhat does this suggest?",
                options: [
                  "Strong trend forming",
                  "High reliability",
                  "False signals likely / market chopping",
                  "Breakdown confirmed",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Shooting Stars in chop often fail — the market is indecisive.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "A \"Shooting Star\" forms, but the upper wick is only slightly longer than the body (about 1.2x).\nWhat is this?",
                options: [
                  "Valid Shooting Star",
                  "Strong reversal",
                  "Not a true Shooting Star — wick ratio too small",
                  "Breakdown signal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Valid Shooting Stars need upper wicks at least 2x the body.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "A Shooting Star forms at resistance, followed by a lower high and lower low.\nWhat market structure is forming?",
                options: [
                  "Uptrend",
                  "Consolidation only",
                  "Bearish shift / trend reversal confirmation",
                  "Fake move",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Shooting Star + lower high + lower low = structural reversal confirmation.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "After a Shooting Star, price returns to retest the Shooting Star's 50% level (midpoint).\nWhat is this commonly used for?",
                options: [
                  "Exit point",
                  "Entry refinement / second chance entry",
                  "Stop loss removal",
                  "Market exit",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Retests to the Shooting Star midpoint offer lower-risk entries with tight stops.",
              }
            ],
          },
          {
            id: "chal-shoot-hard-1",
            title: "Trap Setups & Fake Shooting Stars",
            description:
              "Spot failed Shooting Stars, weak wick dominance, and counter-trend traps that look like reversals.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price is in an uptrend. A Shooting Star forms at resistance, but the next candle closes weak and the candle after breaks the Shooting Star's high.\nWhat is this most likely?",
                options: [
                  "Strong reversal",
                  "Continuation signal",
                  "Failed Shooting Star / bull trap for sellers",
                  "Breakdown",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break of Shooting Star high after weak follow-up = sellers trapped, trend continues up.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A Shooting Star forms after price breaks above resistance. However, the Shooting Star does NOT close back below the broken resistance.\nWhat does this indicate?",
                options: [
                  "Valid reversal",
                  "Strong sell",
                  "Failed reclaim — likely continuation up",
                  "Trend change",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "If price doesn't reclaim below resistance, buyers are still in control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "You see a clean Shooting Star at resistance, but it forms during a very strong bullish trend with large momentum candles.\nWhat is the risk?",
                options: [
                  "No risk",
                  "Guaranteed reversal",
                  "Counter-trend trap — Shooting Star likely overrun by momentum",
                  "Breakdown confirmed",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Strong trends often steamroll over Shooting Star signals against them.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "A Shooting Star forms, but immediately after, price consolidates in a tight range without breaking downward.\nWhat does this suggest?",
                options: [
                  "Strong trend down",
                  "Distribution confirmed",
                  "Weak momentum / possible failure",
                  "Confirmed reversal",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "No follow-through = sellers lack conviction, fake rejection likely.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A Shooting Star breaks below a minor support, but quickly reverses and rallies above the Shooting Star high.\nWhat is this?",
                options: [
                  "Clean breakdown",
                  "Fake breakdown / bear trap",
                  "Strong resistance",
                  "Trend continuation",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Break → fail → rally above Shooting Star = classic liquidity trap.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "You see:\nShooting Star with long upper wick\nBut the body is very large relative to the wick\nWhat does this MOST likely indicate?",
                options: [
                  "Strong rejection",
                  "Weak Shooting Star — not enough wick dominance",
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
                text: "A Shooting Star forms in the middle of a range, immediately followed by a bullish Hammer.\nWhat is happening?",
                options: [
                  "Strong trend forming",
                  "Market breakout",
                  "Choppy market / traps on both sides",
                  "Institutional selling",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Back-to-back opposing Pin Bars = indecision and liquidity grabs, no clear bias.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "Price forms a Shooting Star after sweeping liquidity, but the Shooting Star is much smaller than the prior bullish momentum candles.\nWhat does this suggest?",
                options: [
                  "Strong reversal",
                  "Weak reaction — sellers not matching buyer strength",
                  "Trend change",
                  "Perfect entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Small Shooting Star vs strong trending candles = underwhelming rejection.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "A Shooting Star forms at resistance, but price never creates a lower low afterward.\nWhat does this indicate?",
                options: [
                  "Confirmed reversal",
                  "Weak structure shift / reversal incomplete",
                  "Strong downtrend",
                  "Breakdown",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Without a lower low, structure has not confirmed the reversal.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nShooting Star\nPrice moves slightly down\nThen sharply rallies above the Shooting Star's high\nWhat just happened?",
                options: [
                  "Strong sell",
                  "Market correction",
                  "Liquidity grab below + bear trap",
                  "Trend continuation down",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Price moved down to trigger sells, then reversed → classic Shooting Star trap.",
              }
            ],
          },
          {
            id: "chal-shoot-hard-2",
            title: "Trap Scenarios",
            description:
              "Work through chart scenarios where Shooting Star traps catch traders on the wrong side.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "You see:\nPrice taps resistance\nForms Shooting Star\nNext candle immediately breaks above the Shooting Star's high\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Sell more",
                  "Bear trap / failed Shooting Star",
                  "Market consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break of Shooting Star high = sellers failed, trap setup for reversal traders.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "You see:\nPrice breaks above resistance (liquidity sweep)\nForms Shooting Star\nCloses strongly below resistance\nWhat is the best interpretation?",
                options: [
                  "Continue buying",
                  "Strong bearish reversal setup",
                  "Ignore trade",
                  "Weak signal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Sweep + Shooting Star + reclaim = high-probability reversal.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "You see:\nShooting Star forms at resistance\nBut candle has long lower wick as well\nNext candle is small\nWhat is the best interpretation?",
                options: [
                  "Strong sell",
                  "Two-sided indecision / weak setup",
                  "Confirmed reversal",
                  "Breakdown",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Wicks on both sides = mixed signal, not a clean Shooting Star rejection.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "You see:\nPrice in strong downtrend\nBullish Hammer forms (opposite pattern)\nNo break of previous high\nWhat is the best interpretation?",
                options: [
                  "Trend reversal confirmed",
                  "Temporary pullback — trend likely resumes",
                  "Strong buy",
                  "Market shift",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No structural break = just a pullback, not a reversal.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "You see:\nShooting Star forms at supply\nImmediately breaks minor support\nWhat is the best interpretation?",
                options: [
                  "Weak move",
                  "Strong bearish continuation",
                  "Fake signal",
                  "Market indecision",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shooting Star + structure break = sellers in strong control.",
              },
              {
                id: 'q6',
                type: 'theory',
                text: "You see:\nPrice sweeps liquidity above resistance\nForms small Shooting Star\nNext candles are slow and weak\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak reaction — possible failure",
                  "Perfect entry",
                  "Trend confirmed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Weak follow-through = sellers not strong enough to capitalize on the sweep.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "You see:\nShooting Star\nPrice drops quickly\nThen sharply reverses up above the Shooting Star's high\nWhat is the best interpretation?",
                options: [
                  "Breakdown",
                  "Strong downtrend",
                  "Liquidity grab below + bear trap",
                  "Consolidation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Quick drop = bait, reversal = classic trap for breakdown sellers.",
              },
              {
                id: 'q8',
                type: 'theory',
                text: "You see:\nPrice touches trendline\nForms Shooting Star\nThen moves sideways for several candles without breakdown\nWhat is the best interpretation?",
                options: [
                  "Strong continuation",
                  "Weak confirmation / uncertain setup",
                  "Immediate breakdown",
                  "Trend reversal",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No momentum = setup not confirmed yet, wait for direction.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see:\nShooting Star at resistance\nFollowed by strong bullish candle that engulfs the Shooting Star\nWhat is the best interpretation?",
                options: [
                  "Strong sell",
                  "Market stability",
                  "Bull trap",
                  "Shooting Star failure / reversal invalidated",
                ],
                correctAnswerIndex: 3,
                explanation:
                  "Bullish engulfing wipes out the Shooting Star — sellers trapped, trend continues up.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "You see:\nPrice breaks above resistance\nForms Shooting Star\nBut fails to close back below resistance\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Failed reclaim / continuation likely up",
                  "Sell immediately",
                  "Market indecision",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "No reclaim below resistance = buyers still in control, continuation likely.",
              }
            ],
          },
          {
            id: "chal-shoot-hard-3",
            title: "Technical Application",
            description:
              "Apply Shooting Star rules to structure breaks, moving-average context, and weak confirmation.",
            difficulty: "Hard",
            reward: 150,
            questions: [
              {
                id: 'q1',
                type: 'theory',
                text: "Price forms a Shooting Star at resistance, but the candle closes only slightly below the open.\nWhat does this suggest?",
                options: [
                  "Strong Shooting Star",
                  "Weak Shooting Star / low conviction",
                  "Perfect entry",
                  "Trend reversal confirmed",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Shallow close = weak rejection, lacks seller dominance.",
              },
              {
                id: 'q2',
                type: 'theory',
                text: "A Shooting Star forms at a supply zone, followed by a strong bearish candle breaking recent lows.\nWhat does this confirm?",
                options: [
                  "Fake move",
                  "Weak supply",
                  "Confirmation of bearish reversal",
                  "Market indecision",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Supply + Shooting Star + structure break = real seller control.",
              },
              {
                id: 'q3',
                type: 'theory',
                text: "Price forms a Shooting Star, but the prior candle is very small and weak.\nWhat is the concern?",
                options: [
                  "Strong signal",
                  "No issue",
                  "Weak context — no meaningful move to reverse",
                  "Trend continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Shooting Stars matter most after strong moves — after weak candles, they're less meaningful.",
              },
              {
                id: 'q4',
                type: 'theory',
                text: "You see a Shooting Star at resistance, followed by bearish confirmation, but price then stalls and forms equal lows.\nWhat does this indicate?",
                options: [
                  "Strong breakdown",
                  "Weak momentum / support ahead",
                  "Trend continuation",
                  "Perfect sell",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Equal lows = sellers struggling to push lower, risk of bounce.",
              },
              {
                id: 'q5',
                type: 'theory',
                text: "A Shooting Star forms, then price retraces deeply into the Shooting Star and almost breaks its high.\nWhat should you think?",
                options: [
                  "Strong sellers",
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
                text: "Price forms a Shooting Star on moving average resistance, but the MA is sloping sharply upward.\nWhat is the implication?",
                options: [
                  "Strong sell",
                  "Trend reversal confirmed",
                  "Counter-trend risk — MA slope says bullish",
                  "Perfect continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Upward MA = bullish trend context, Shooting Stars risky against it.",
              },
              {
                id: 'q7',
                type: 'theory',
                text: "A Shooting Star forms after a liquidity sweep, but the upper wick is only slightly longer than the body.\nWhat does this suggest?",
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
                text: "A Shooting Star forms and breaks structure, but immediately returns above the breakdown level.\nWhat is this?",
                options: [
                  "Strong breakdown",
                  "Confirmation",
                  "Fake breakdown / trap",
                  "Trend continuation",
                ],
                correctAnswerIndex: 2,
                explanation:
                  "Break → fail = liquidity trap below lows.",
              },
              {
                id: 'q9',
                type: 'theory',
                text: "You see a Shooting Star at resistance, followed by a lower high but no lower low.\nWhat does this indicate?",
                options: [
                  "Confirmed downtrend",
                  "Partial strength but no structural confirmation",
                  "Strong sell",
                  "Market reversal complete",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Lower high is good, but without a lower low, structure shift is incomplete.",
              },
              {
                id: 'q10',
                type: 'theory',
                text: "A Shooting Star forms in an uptrend, confirmation candle is weak and barely breaks the Shooting Star's low.\nWhat is the best interpretation?",
                options: [
                  "Strong reversal",
                  "Weak breakdown / likely failure",
                  "Confirmed trend change",
                  "Perfect entry",
                ],
                correctAnswerIndex: 1,
                explanation:
                  "Weak confirmation = no real seller commitment, reversal at risk of failing.",
              }
            ],
          }
  ],
};

