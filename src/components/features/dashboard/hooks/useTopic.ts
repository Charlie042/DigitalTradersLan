import { useApiGet } from "@/services/api/hooks";

export interface CatalogChallengeSummary {
  id: string;
  dbId: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  rewardXp: number;
}

export interface CatalogSubTopic {
  id: string;
  dbId: number;
  title: string;
  challenges: CatalogChallengeSummary[] | null;
}

export interface CatalogTopic {
  id: string;
  dbId: number;
  title: string;
  icon: string;
  subTopics: CatalogSubTopic[];
}

export interface CatalogQuestionOption {
  id: number;
  text: string;
}

export interface CatalogQuestion {
  id: string;
  dbId: number;
  type: string;
  displayType: string;
  text: string;
  imageUrl?: string;
  options: CatalogQuestionOption[];
}

export interface CatalogChallenge {
  id: string;
  dbId: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  rewardXp: number;
  questions: CatalogQuestion[];
}

export const useGetTopics = () => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { topics: CatalogTopic[] } }>(
    { url: '/api/catalog/topics', data: undefined },
    { queryKey: ['catalog', 'topics'] as const, requireAuth: false },
  );
  return {
    data: data?.data.topics,
    isLoading,
    error,
  };
};

export const useGetTopicById = (topicId: string) => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { topic: CatalogTopic } }>(
    { url: `/api/catalog/topics/${topicId}`, data: undefined },
    { queryKey: ['catalog', 'topic', topicId] as const, requireAuth: false },
  );
  return {
    data: data?.data.topic,
    isLoading,
    error,
  };
};

export const useGetChallenge = (challengeSlug: string, options?: { enabled?: boolean }) => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { challenge: CatalogChallenge } }>(
    { url: `/api/catalog/challenges/${challengeSlug}`, data: undefined },
    {
      queryKey: ['catalog', 'challenge', challengeSlug] as const,
      requireAuth: false,
      enabled: options?.enabled ?? true,
    },
  );
  return {
    data: data?.data.challenge,
    isLoading,
    error,
  };
};

export const useGetFireMode = () => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { challenge: CatalogChallenge } }>(
    { url: '/api/catalog/fire-mode', data: undefined },
    { queryKey: ['catalog', 'fire-mode'] as const, requireAuth: false },
  );
  return {
    data: data?.data.challenge,
    isLoading,
    error,
  };
};

export const useGetTopicProgress = () => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { progress: Record<string, number> } }>(
    { url: '/api/catalog/progress/topics', data: undefined },
    { queryKey: ['catalog', 'progress', 'topics'] as const, requireAuth: true },
  );
  return {
    data: data?.data.progress,
    isLoading,
    error,
  };
};

export interface RecentChallenge {
  id: string;
  dbId: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  rewardXp: number;
  questionCount: number;
  topicTitle: string;
  topicIcon: string | null;
  status: 'done' | 'continue';
}

export const useGetRecentChallenges = () => {
  const { data, isLoading, error } = useApiGet<undefined, { data: { challenges: RecentChallenge[] } }>(
    { url: '/api/catalog/progress/recent', data: undefined },
    { queryKey: ['catalog', 'progress', 'recent'] as const, requireAuth: true },
  );
  return {
    data: data?.data.challenges,
    isLoading,
    error,
  };
};

export interface UserStats {
  questionsAnsweredDistinct: number;
  submissionCount: number;
  correctSubmissionCount: number;
  streak: number;
  totalXp: number;
  challengesCompleted: number;
}

export const useGetStats = () => {
  const { data, isLoading, error } = useApiGet<undefined, { data: UserStats }>(
    { url: '/api/catalog/stats/me', data: undefined },
    { queryKey: ['catalog', 'stats', 'me'] as const, requireAuth: true },
  );
  return {
    data: data?.data,
    isLoading,
    error,
  };
};
