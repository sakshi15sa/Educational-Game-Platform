import React from 'react';
import { useGameContext } from '../contexts/GameContext';

function ScoreTracker() {
  const { score, difficulty } = useGameContext();

  return (
    <div className="score-tracker">
      <div className="score-display">
        <span>Score: {score}</span>
        <span>Difficulty: {difficulty}</span>
      </div>
    </div>
  );
}

export default ScoreTracker;