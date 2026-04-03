export interface Question {
  id: string;
  type: 'theory' | 'chart';
  text: string;
  imageUrl?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: number; // Coins/Points earned
  questions: Question[];
}

export interface SubTopic {
  id: string;
  title: string;
  challenges: Challenge[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  subTopics: SubTopic[];
}

export interface UserStats {
  streak: number;
  totalCoins: number;
  challengesCompleted: number;
}

// ---- MOCK DATA ----

export const mockUserStats: UserStats = {
  streak: 3,
  totalCoins: 450,
  challengesCompleted: 12,
};

export const mockTopics: Topic[] = [
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
            description: 'Learn to spot the primary characteristics of a standard bullish engulfing pattern.',
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
                  'Two green candles of the same size.'
                ],
                correctAnswerIndex: 0,
                explanation: 'A Bullish Engulfing pattern occurs when a large green candle completely engulfs the body of the preceding red candle, indicating a shift from selling pressure to immense buying pressure.'
              },
              {
                id: 'q2',
                type: 'theory',
                text: 'Where is a Bullish Engulfing pattern most effective?',
                options: [
                  'In the middle of a sideways consolidation.',
                  'At the bottom of a prolonged downtrend or key support level.',
                  'At the very top of a massive uptrend.',
                  'After a high-impact news event.'
                ],
                correctAnswerIndex: 1,
                explanation: 'Bullish Engulfing patterns are reversal signals. They hold the highest probability when they form at the bottom of a downtrend or off a major support level, trapping late sellers.'
              }
            ]
          },
          {
            id: 'chal-bull-med-1',
            title: 'Context over Print',
            description: 'Apply candlestick theory into structural market conditions.',
            difficulty: 'Medium',
            reward: 100,
            questions: [] // Intentionally blank for MVP structural demonstration
          }
        ]
      },
      {
        id: 'bearish-engulfing',
        title: 'Bearish Engulfing',
        challenges: []
      },
      {
        id: 'rejection-wicks',
        title: 'Rejection Wicks (Pinbars)',
        challenges: []
      }
    ]
  },
  {
    id: 'market-structure',
    title: 'Market Structure',
    icon: '📈',
    subTopics: [
      {
        id: 'higher-highs',
        title: 'Identifying Trends',
        challenges: []
      }
    ]
  },
  {
    id: 'liquidity',
    title: 'Liquidity Pools',
    icon: '💧',
    subTopics: []
  }
];
