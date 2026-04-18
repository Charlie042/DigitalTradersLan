import { useState, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { mockTopics, mockUserStats, Question } from '../../../../data/mockDatabase';
// We reuse the ChallengePreview styles since Fire Mode is essentially a randomized challenge
import '../ChallengePreview/index.scss';

export default function FireMode() {
  const navigate = useNavigate();

  // 1. Gather all questions
  const allQuestions = useMemo(() => {
    const qs: Question[] = [];
    mockTopics.forEach(topic => {
      topic.subTopics.forEach(sub => {
        sub.challenges.forEach(chal => {
          qs.push(...chal.questions);
        });
      });
    });
    // Shuffle
    return qs.sort(() => Math.random() - 0.5);
  }, []);

  // Use up to 10 questions for Fire Mode
  const fireQuestions = useMemo(() => allQuestions.slice(0, 10), [allQuestions]);

  const [hasStarted, setHasStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  if (fireQuestions.length === 0) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow">Fire Mode 🔥</div>
            <div className="preview-title">Not Enough Questions</div>
            <div className="preview-desc">Add more questions to the database to play Fire Mode!</div>
          </div>
          <div className="preview-actions">
            <button className="btn-maybe" onClick={() => navigate({ to: '/dashboard' })}>← Back to Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  // --- SCREEN 5: COMPLETE ---
  if (isComplete) {
    const acc = Math.round((score / fireQuestions.length) * 100);
    const fireReward = score * 10; // Dynamic bonus calculation
    return (
      <div className="cp-screen cp-screen-complete">
        <div className="complete-card">
          <div className="complete-top" style={{ background: 'var(--orange)' }}>
            <span className="complete-emoji">🔥</span>
            <div className="complete-title" style={{ color: 'var(--black)' }}>Fire Mode Complete!</div>
            <div className="complete-sub" style={{ color: 'var(--black)' }}>You survived the rapid fire.</div>
          </div>
          <div className="complete-stats">
            <div className="cs-item">
              <span className="cs-val" style={{ color: 'var(--electric)' }}>{score}/{fireQuestions.length}</span>
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
              <div className="cr-coins">🪙 +{fireReward} XP</div>
            </div>
            <div className="cr-badge" style={{ color: 'var(--orange)' }}>🎖️ Keep going!</div>
          </div>
          <div className="complete-actions">
             <button className="btn-next-challenge" onClick={() => navigate({ to: '/dashboard' })} style={{ background: 'var(--orange)', color: 'var(--black)' }}>
              Back to Dashboard →
            </button>
            <button className="btn-home" onClick={() => { setIsComplete(false); setHasStarted(false); setCurrentQIndex(0); setScore(0); setSelectedOption(null); setIsRevealed(false); }}>
              Play Again ⚡
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- SCREEN 3: PREVIEW ---
  if (!hasStarted) {
    return (
      <div className="cp-screen cp-screen-preview">
        <div className="preview-card">
          <div className="preview-top">
            <div className="preview-eyebrow" style={{ color: 'var(--orange)' }}>Quick Play</div>
            <div className="preview-title">🔥 Fire Mode</div>
            <div className="preview-desc">Mixed questions from all topics. No structure. Pure knowledge. Survive the gauntlet and test your edge.</div>
          </div>
          <div className="preview-meta">
            <div className="pm-item">
              <div className="pm-label">Difficulty</div>
              <div className="pm-val" style={{ color: 'var(--orange)' }}>Mixed</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Questions</div>
              <div className="pm-val">{fireQuestions.length} questions</div>
            </div>
            <div className="pm-item">
              <div className="pm-label">Type</div>
              <div className="pm-val">Randomized</div>
            </div>
             <div className="pm-item">
              <div className="pm-label">Reward</div>
              <div className="pm-val" style={{ color: 'var(--amber)' }}>Dynamic XP</div>
            </div>
          </div>
          <div className="preview-actions">
            <button className="btn-start-challenge" onClick={() => setHasStarted(true)} style={{ background: 'var(--orange)', color: 'var(--black)' }}>
              Start Fire Mode ⚡
            </button>
            <button className="btn-maybe" onClick={() => navigate({ to: '/dashboard' })}>
              Not now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- SCREEN 4: QUESTION ---
  const currentQ = fireQuestions[currentQIndex];
  const pct = (currentQIndex / fireQuestions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;
    setSelectedOption(index);
    setIsRevealed(true);
    if (index === currentQ.correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < fireQuestions.length - 1) {
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
        <div className="q-progress-bar" style={{ width: `${pct}%`, background: 'var(--orange)' }} />
      </div>

      <div className="q-content">
        <div className="q-header">
          <div className="q-counter" style={{ color: 'var(--orange)' }}>
            {String(currentQIndex + 1).padStart(2, '0')} <span>/ {fireQuestions.length}</span>
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
            <button className="btn-next-q" onClick={handleNext} style={{ background: 'var(--orange)', color: 'var(--black)' }}>
              {currentQIndex < fireQuestions.length - 1 ? 'Next Question →' : 'Complete Challenge ✓'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
