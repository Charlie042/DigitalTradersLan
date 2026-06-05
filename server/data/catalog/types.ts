/**
 * Shared catalog seed types.
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
