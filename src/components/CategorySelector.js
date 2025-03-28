import React from 'react';
import './css/CategorySelector.css';


function CategorySelector({ categories, onSelectCategory }) {
  return (
    <div className="category-selector">
      <h2>Choose a Learning Category</h2>
      <div className="category-grid">
        {categories.map(category => (
          <div 
            key={category.id}
            className="category-card"
            onClick={() => onSelectCategory(category)}
          >
            <h3>{category.name}</h3>
            {category.games.map(game => (
              <p key={game.type}>{game.description}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelector;
