import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { mockTopics, Challenge } from '../../../../data/mockDatabase';
import { ChallengePreviewProps } from './types';
import './index.scss';

export default function ChallengePreview({ challengeId }: ChallengePreviewProps) {
  const navigate = useNavigate();

  let foundChallenge: Challenge | null = null;
  for (const topic of mockTopics) {
    for (const sub of topic.subTopics) {
      const chal = sub.challenges.find(c => c.id === challengeId);
      if (chal) {
        foundChallenge = chal;
        break;
      }
    }
  }

  const [hasStarted, setHasStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  if (!foundChallenge) {
    return <div style={{ color: 'white' }}>Challenge not found!</div>;
  }
  
  if (foundChallenge.questions.length === 0) {
    return (
      <div className="chal-preview fade-in">
         <div className="preview-box">
             <h1>No Questions Available</h1>
             <p className="desc">This challenge is under construction.</p>
             <button className="btn-start" onClick={() => navigate({ to: '/dashboard' })}>
                Back to Dashboard
             </button>
         </div>
      </div>
    )
  }

  if (!hasStarted) {
    return (
      <div className="chal-preview fade-in">
        <div className="preview-box">
          <div className="eyebrow"><span className="bar"></span>Mission Setup</div>
          <h1>{foundChallenge.title}</h1>
          <p className="desc">{foundChallenge.description}</p>
          
          <div className="preview-meta">
            <div className="meta-item">
              <span className="lbl">Difficulty</span>
              <span className={`val diff-${foundChallenge.difficulty.toLowerCase()}`}>
                {foundChallenge.difficulty}
              </span>
            </div>
            <div className="meta-item">
              <span className="lbl">Questions</span>
              <span className="val">{foundChallenge.questions.length}</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Reward</span>
              <span className="val reward">💰 {foundChallenge.reward}</span>
            </div>
          </div>

          <button className="btn-start" onClick={() => setHasStarted(true)}>
            Start Challenge ⚡
          </button>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="game-complete fade-in">
        <div className="complete-box">
          <div className="eyebrow"><span className="bar"></span>Mission Accomplished</div>
          <h2 className="title">Challenge Complete!</h2>
          
          <div className="score-ring">
            <span className="sc-val">{score}</span>
            <span className="sc-div">/</span>
            <span className="sc-tot">{foundChallenge.questions.length}</span>
          </div>
          
          <p className="earned-reward">Reward Earned: <strong>💰 {foundChallenge.reward} Coins</strong></p>
          
          <button className="btn-dash" onClick={() => navigate({ to: '/dashboard' })}>
            Return to Dashboard →
          </button>
        </div>
      </div>
    );
  }

  const currentQ = foundChallenge.questions[currentQIndex];

  const handleOptionClick = (index: number, correctIndex: number) => {
    if (isRevealed) return;
    setSelectedOption(index);
    setIsRevealed(true);
    if (index === correctIndex) {
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

  return (
    <div className="active-gameplay fade-in">
      <div className="game-header">
        <div className="progress-text">Question {currentQIndex + 1} // {foundChallenge.questions.length}</div>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${((currentQIndex + 1) / foundChallenge.questions.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="question-box">
        <h2 className="q-text">{currentQ.text}</h2>
        {currentQ.imageUrl && <img src={currentQ.imageUrl} alt="Chart data" className="q-chart" />}
        
        <div className="options-grid">
          {currentQ.options.map((opt, i) => {
            let stateClass = '';
            if (isRevealed) {
              if (i === currentQ.correctAnswerIndex) stateClass = 'correct';
              else if (i === selectedOption) stateClass = 'wrong';
              else stateClass = 'disabled';
            }

            return (
              <button 
                key={i} 
                className={`opt-btn ${stateClass}`} 
                onClick={() => handleOptionClick(i, currentQ.correctAnswerIndex)}
                disabled={isRevealed}
              >
                <div className="opt-idx">{String.fromCharCode(65 + i)}</div>
                <div className="opt-val">{opt}</div>
              </button>
            )
          })}
        </div>
      </div>

      {isRevealed && (
        <div className="feedback-box fade-in">
          <div className={`feedback-badge ${selectedOption === currentQ.correctAnswerIndex ? 'success' : 'fail'}`}>
            {selectedOption === currentQ.correctAnswerIndex ? 'BULLSEYE 🎯' : 'MISSED IT ❌'}
          </div>
          <div className="explanation">
            <strong>The Breakdown:</strong> {currentQ.explanation}
          </div>
          <button className="btn-next" onClick={handleNext}>
            {currentQIndex < foundChallenge.questions.length - 1 ? 'Next Question →' : 'Complete Challenge ✓'}
          </button>
        </div>
      )}
    </div>
  );
}
