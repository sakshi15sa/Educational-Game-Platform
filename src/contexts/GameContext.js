import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [difficulty, setDifficulty] = useState('medium');
  const [score, setScore] = useState(0);
  const [gameProgress, setGameProgress] = useState({});

  const value = {
    currentCategory,
    setCurrentCategory,
    difficulty,
    setDifficulty,
    score,
    setScore,
    gameProgress,
    setGameProgress
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
