import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import GameBoard from './GameBoard';
import ScoreTracker from './ScoreTracker';
import { GAME_CATEGORIES } from '../data/categories';

function GameDashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="game-dashboard">
      <ScoreTracker />
      {!selectedCategory ? (
        <CategorySelector 
          categories={GAME_CATEGORIES}
          onSelectCategory={handleCategorySelect}
        />
      ) : (
        <GameBoard 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

export default GameDashboard;
