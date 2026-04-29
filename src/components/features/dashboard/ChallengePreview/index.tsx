import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { FIRE_MODE_CHALLENGE_ID } from '../../../../lib/fireModeChallenge';
import { ChallengePreviewProps } from './types';
import { useGetChallenge, useGetFireMode, useGetStats, CatalogQuestion } from '../hooks/useTopic';
import { ChallengePreviewSkeleton } from '../Skeleton';
import { useApiPost } from '@/services/api/hooks';
import './index.scss';

interface SubmissionRequest {
  questionId: number;
  answer: { selectedOptionId: number };
  timeTakenSeconds?: number;
}

interface SubmissionResponse {
  ok: boolean;
  status: 'correct' | 'incorrect';
  score: number;
  correct: boolean;
  explanation: string | null;
}

interface CompleteRequest {
  correct: number;
  total: number;
}

interface CompleteResponse {
  ok: boolean;
  rewardXp: number;
  firstCompletion: boolean;
}

export default function ChallengePreview({ challengeId }: ChallengePreviewProps) {
  const navigate = useNavigate();
  const isFireMode = challengeId === FIRE_MODE_CHALLENGE_ID;

  // Always call hooks unconditionally (React rules)
  const { data: apiChallenge, isLoading: challengeLoading } = useGetChallenge(challengeId, { enabled: !isFireMode });
  const { data: fireChallenge, isLoading: fireLoading } = useGetFireMode();
  const { data: stats } = useGetStats();
  const submitAnswer = useApiPost<SubmissionRequest, SubmissionResponse>();
  const completeChallenge = useApiPost<CompleteRequest, CompleteResponse>();

  const [hasStarted, setHasStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [explanation, setExplanation] = useState<string | null>(null);

  const resetState = () => {
    setIsComplete(false);
    setHasStarted(false);
    setCurrentQIndex(0);
    setScore(0);
    setSelectedKey(null);
    setIsRevealed(false);
    setIsCorrect(null);
    setExplanation(null);
  };

  const isLoading = isFireMode ? fireLoading : challengeLoading;
  const challenge = isFireMode ? fireChallenge : apiChallenge;

  if (isLoading) {
    return <ChallengePreviewSkeleton />;
  }

  if (!challenge) {
    return <div style={{ padding: '2rem' }}>Challenge not found!</div>;
  }

  const { title, description, difficulty, rewardXp } = challenge;
  const questions = challenge.questions as CatalogQuestion[];

  if (questions.length === 0) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow">Under Construction</div>
            <div className="preview-title">{title}</div>
            <div className="preview-desc">This challenge has no questions yet — check back soon.</div>
          </div>
          <div className="preview-actions">
            <button className="btn-maybe" onClick={() => navigate({ to: '/dashboard' })}>← Back to Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── COMPLETE SCREEN ── */
  if (isComplete) {
    const acc = Math.round((score / questions.length) * 100);
    return (
      <div className="cp-screen cp-screen-complete">
        <div className="complete-card">
          <div className="complete-top">
            <span className="complete-emoji">🏆</span>
            <div className="complete-title">{isFireMode ? 'Fire Mode complete!' : 'Challenge Complete!'}</div>
            <div className="complete-sub">{title}</div>
          </div>
          <div className="complete-stats">
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--electric)' }}>{score}/{questions.length}</span>
              <span className="cs-label">Correct</span>
            </div>
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--lime)' }}>{acc}%</span>
              <span className="cs-label">Accuracy</span>
            </div>
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--coral)' }}>{stats?.streak ?? 0}🔥</span>
              <span className="cs-label">Streak</span>
            </div>
          </div>
          <div className="complete-reward">
            <div className="cr-left">
              <div className="cr-label">Coins earned</div>
              <div className="cr-coins">🪙 +{rewardXp} XP</div>
            </div>
            <div className="cr-badge">🎖️ Keep going!</div>
          </div>
          <div className="complete-actions">
            <button className="btn-next-challenge" onClick={() => navigate({ to: '/dashboard' })}>
              Back to Dashboard →
            </button>
            <button className="btn-home" onClick={resetState}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── PREVIEW SCREEN ── */
  if (!hasStarted) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow">{isFireMode ? 'Quick Play' : 'Challenge Preview'}</div>
            <div className="preview-title">{title}</div>
            <div className="preview-desc">{description}</div>
          </div>
          <div className="preview-meta">
            <div className="pm-item">
              <div className="pm-label">Difficulty</div>
              <div className={`pm-val diff-${difficulty.toLowerCase()}`}>{difficulty}</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Questions</div>
              <div className="pm-val">{questions.length} questions</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Type</div>
              <div className="pm-val">Theory</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Reward</div>
              <div className="pm-val" style={{ color: 'var(--amber)' }}>+{rewardXp} XP</div>
            </div>
          </div>
          <div className="preview-reward">
            <div className="cr-label">Reward on completion</div>
            <div className="cr-coins">🪙 +{rewardXp} XP</div>
          </div>
          <div className="preview-actions">
            <button className="btn-start-challenge" onClick={() => setHasStarted(true)}>
              {isFireMode ? 'Start Fire Mode ⚡' : 'Start Challenge ⚡'}
            </button>
            <button className="btn-maybe" onClick={() => navigate({ to: '/dashboard' })}>
              Not now
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── QUESTION SCREEN ── */
  const pct = (currentQIndex / questions.length) * 100;
  const letters = ['A', 'B', 'C', 'D'];
  const isSubmitting = submitAnswer.isPending;

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(q => q + 1);
      setSelectedKey(null);
      setIsRevealed(false);
      setIsCorrect(null);
      setExplanation(null);
    } else {
      if (!isFireMode) {
        completeChallenge.mutate({
          url: `/api/catalog/challenges/${challengeId}/complete`,
          data: { correct: score, total: questions.length },
        });
      }
      setIsComplete(true);
    }
  };

  const currentQ = questions[currentQIndex] as CatalogQuestion;

  const handleApiClick = (optionId: number) => {
    if (isRevealed || isSubmitting) return;
    setSelectedKey(String(optionId));
    submitAnswer.mutate(
      {
        url: '/api/catalog/submissions',
        data: { questionId: currentQ.dbId, answer: { selectedOptionId: optionId } },
      },
      {
        onSuccess: (res) => {
          setIsCorrect(res.data.correct);
          setExplanation(res.data.explanation);
          setIsRevealed(true);
          if (res.data.correct) setScore(s => s + 1);
        },
        onError: () => {
          setSelectedKey(null);
        },
      },
    );
  };

  return (
    <div className="cp-screen cp-screen-question">
      <div className="q-progress-bar-wrap">
        <div className="q-progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <div className="q-content">
        <div className="q-header">
          <div className="q-counter">
            {String(currentQIndex + 1).padStart(2, '0')} <span>/ {questions.length}</span>
          </div>
          <div className={`q-type-tag q-type-${currentQ.type}`}>
            {currentQ.type === 'chart' ? '📊 Chart Based' : '📖 Theory'}
          </div>
        </div>
        <div className="q-card">
          <div className="q-text">{currentQ.text}</div>
          <div className="answers">
            {currentQ.options.map((opt, i) => {
              const isSelected = selectedKey === String(opt.id);
              let cls = 'answer-btn';
              if (isSubmitting && isSelected) cls += ' loading';
              if (isRevealed) {
                if (isSelected && isCorrect) cls += ' correct';
                else if (isSelected && !isCorrect) cls += ' wrong';
                else cls += ' disabled';
              }
              return (
                <button
                  key={opt.id}
                  className={cls}
                  onClick={() => handleApiClick(opt.id)}
                  disabled={isRevealed || isSubmitting}
                >
                  <div className="answer-letter">{letters[i]}</div>
                  <div className="answer-text">{opt.text}</div>
                </button>
              );
            })}
          </div>
        </div>
        {isRevealed && (
          <div className={`feedback-panel ${isCorrect ? 'correct-fb' : 'wrong-fb'}`}>
            <div className="fb-header">
              <span className="fb-icon">{isCorrect ? '✅' : '❌'}</span>
              <span className="fb-result">{isCorrect ? 'Correct!' : 'Not quite.'}</span>
            </div>
            {explanation && <div className="fb-explanation">{explanation}</div>}
          </div>
        )}
        <div className="q-actions">
          {isRevealed && (
            <button className="btn-next-q" onClick={handleNext}>
              {currentQIndex < questions.length - 1 ? 'Next Question →' : 'Complete Challenge ✓'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
