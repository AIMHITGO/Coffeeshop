import React from 'react';
import { Link } from 'react-router-dom';

const DrinkTile = ({ drink, categoryId }) => {
  // Get default size calories (first size)
  const defaultCalories = drink.sizes?.[0]?.calories || 0;
  
  // Create slug from drink id
  const slug = drink.id;

  return (
    <Link 
      to={`/menu/drinks/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-amber-200"
      data-testid={`drink-tile-${slug}`}
    >
      {/* Image Container - Fixed aspect ratio */}
      <div className="relative w-full aspect-[4/3] bg-amber-50 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-3">
        {/* Drink Name - 2 line clamp */}
        <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {drink.name}
        </h3>
        
        {/* Calories */}
        <p className="text-xs text-gray-500 mt-1">
          {defaultCalories > 0 ? `${defaultCalories} cal` : '0 cal'}
        </p>
      </div>
    </Link>
  );
};

export default DrinkTile;
