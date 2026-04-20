import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { mockTopics, mockUserStats, Challenge } from '../../../../data/mockDatabase';
import { buildFireModeChallenge, FIRE_MODE_CHALLENGE_ID } from '../../../../lib/fireModeChallenge';
import { ChallengePreviewProps } from './types';
import './index.scss';

export default function ChallengePreview({ challengeId }: ChallengePreviewProps) {
  const navigate = useNavigate();

  let foundChallenge: Challenge | null = null;
  if (challengeId === FIRE_MODE_CHALLENGE_ID) {
    foundChallenge = buildFireModeChallenge();
  } else {
    for (const topic of mockTopics) {
      for (const sub of topic.subTopics) {
        const chal = sub.challenges.find(c => c.id === challengeId);
        if (chal) { foundChallenge = chal; break; }
      }
      if (foundChallenge) break;
    }
  }

  const isFireMode = challengeId === FIRE_MODE_CHALLENGE_ID;

  const [hasStarted, setHasStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  if (!foundChallenge) {
    return (
      <div style={{ padding: '2rem' }}>
        {isFireMode
          ? 'No questions available for Fire Mode yet — add challenges with questions in the catalog.'
          : 'Challenge not found!'}
      </div>
    );
  }

  if (foundChallenge.questions.length === 0) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow">Under Construction</div>
            <div className="preview-title">{foundChallenge.title}</div>
            <div className="preview-desc">This challenge has no questions yet — check back soon.</div>
          </div>
          <div className="preview-actions">
            <button className="btn-maybe" onClick={() => navigate({ to: '/dashboard' })}>← Back to Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── SCREEN 5: COMPLETE ── */
  if (isComplete) {
    const acc = Math.round((score / foundChallenge.questions.length) * 100);
    return (
      <div className="cp-screen cp-screen-complete">
        <div className="complete-card">
          <div className="complete-top">
            <span className="complete-emoji">🏆</span>
            <div className="complete-title">{isFireMode ? 'Fire Mode complete!' : 'Challenge Complete!'}</div>
            <div className="complete-sub">{foundChallenge.title}</div>
          </div>
          <div className="complete-stats">
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--electric)' }}>{score}/{foundChallenge.questions.length}</span>
              <span className="cs-label">Correct</span>
            </div>
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--lime)' }}>{acc}%</span>
              <span className="cs-label">Accuracy</span>
            </div>
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--coral)' }}>{mockUserStats.streak}🔥</span>
              <span className="cs-label">Streak</span>
            </div>
          </div>
          <div className="complete-reward">
            <div className="cr-left">
              <div className="cr-label">Coins earned</div>
              <div className="cr-coins">🪙 +{foundChallenge.reward} XP</div>
            </div>
            <div className="cr-badge">🎖️ Keep going!</div>
          </div>
          <div className="complete-actions">
            <button className="btn-next-challenge" onClick={() => navigate({ to: '/dashboard' })}>
              Back to Dashboard →
            </button>
            <button className="btn-home" onClick={() => { setIsComplete(false); setHasStarted(false); setCurrentQIndex(0); setScore(0); setSelectedOption(null); setIsRevealed(false); }}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── SCREEN 3: PREVIEW ── */
  if (!hasStarted) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow">{isFireMode ? 'Quick Play' : 'Challenge Preview'}</div>
            <div className="preview-title">{foundChallenge.title}</div>
            <div className="preview-desc">{foundChallenge.description}</div>
          </div>
          <div className="preview-meta">
            <div className="pm-item">
              <div className="pm-label">Difficulty</div>
              <div className={`pm-val diff-${foundChallenge.difficulty.toLowerCase()}`}>{foundChallenge.difficulty}</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Questions</div>
              <div className="pm-val">{foundChallenge.questions.length} questions</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Type</div>
              <div className="pm-val">Theory</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Reward</div>
              <div className="pm-val" style={{ color: 'var(--amber)' }}>+{foundChallenge.reward} XP</div>
            </div>
          </div>
          <div className="preview-reward">
            <div className="cr-label">Reward on completion</div>
            <div className="cr-coins">🪙 +{foundChallenge.reward} XP</div>
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

  /* ── SCREEN 4: QUESTION ── */
  const currentQ = foundChallenge.questions[currentQIndex];
  const pct = (currentQIndex / foundChallenge.questions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;
    setSelectedOption(index);
    setIsRevealed(true);
    if (index === currentQ.correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < foundChallenge.questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setIsRevealed(false);
    } else {
      setIsComplete(true);
    }
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="cp-screen cp-screen-question">
      <div className="q-progress-bar-wrap">
        <div className="q-progress-bar" style={{ width: `${pct}%` }} />
      </div>

      <div className="q-content">
        <div className="q-header">
          <div className="q-counter">
            {String(currentQIndex + 1).padStart(2, '0')} <span>/ {foundChallenge.questions.length}</span>
          </div>
          <div className={`q-type-tag q-type-${currentQ.type}`}>
            {currentQ.type === 'chart' ? '📊 Chart Based' : '📖 Theory'}
          </div>
        </div>

        <div className="q-card">
          <div className="q-text">{currentQ.text}</div>

          <div className="answers">
            {currentQ.options.map((opt, i) => {
              let cls = 'answer-btn';
              if (isRevealed) {
                if (i === currentQ.correctAnswerIndex) cls += ' correct';
                else if (i === selectedOption) cls += ' wrong';
                else cls += ' disabled';
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => handleOptionClick(i)}
                  disabled={isRevealed}
                >
                  <div className="answer-letter">{letters[i]}</div>
                  <div className="answer-text">{opt}</div>
                </button>
              );
            })}
          </div>
        </div>

        {isRevealed && (
          <div className={`feedback-panel ${selectedOption === currentQ.correctAnswerIndex ? 'correct-fb' : 'wrong-fb'}`}>
            <div className="fb-header">
              <span className="fb-icon">{selectedOption === currentQ.correctAnswerIndex ? '✅' : '❌'}</span>
              <span className="fb-result">{selectedOption === currentQ.correctAnswerIndex ? 'Correct!' : 'Not quite.'}</span>
            </div>
            <div className="fb-explanation">{currentQ.explanation}</div>
          </div>
        )}

        <div className="q-actions">
          {isRevealed && (
            <button className="btn-next-q" onClick={handleNext}>
              {currentQIndex < foundChallenge.questions.length - 1 ? 'Next Question →' : 'Complete Challenge ✓'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
