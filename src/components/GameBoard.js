import './css/GameBoard.css'

import React, { useState, useEffect } from 'react';
import AIService from '../services/aiService';
import { useGameContext } from '../contexts/GameContext';

function GameBoard({ category, onBack }) {
  const [challenge, setChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const { setScore, difficulty } = useGameContext();

  useEffect(() => {
    async function generateChallenge() {
      try {
        const generatedContent = await AIService.generateContent(
          category.id, 
          difficulty
        );
        setChallenge(generatedContent);
      } catch (error) {
        console.error('Challenge generation failed:', error);
      }
    }

    generateChallenge();
  }, [category, difficulty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate checking answer and getting AI feedback
      const aiFeedback = await AIService.provideFeedback(
        userAnswer, 
        challenge
      );
      
      setFeedback(aiFeedback);
      
      // Simple scoring mechanism
      setScore(prevScore => prevScore + 10);
    } catch (error) {
      console.error('Submission error:', error);
      setFeedback('An error occurred while processing your answer.');
    }
  };

  return (
    <div className="game-board">
      <button onClick={onBack} className="back-button">
        ← Back to Categories
      </button>
      
      <h2>{category.name} Challenge</h2>
      
      {challenge ? (
        <div className="challenge-container">
          <p className="challenge-text">{challenge}</p>
          
          <form onSubmit={handleSubmit}>
            <textarea 
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer here"
              rows="4"
              className="answer-input"
            />
            <button type="submit" className="submit-button">
              Submit Answer
            </button>
          </form>
          
          {feedback && (
            <div className="feedback-section">
              <h3>AI Feedback:</h3>
              <p>{feedback}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Generating challenge...</p>
      )}
    </div>
  );
}

export default GameBoard;