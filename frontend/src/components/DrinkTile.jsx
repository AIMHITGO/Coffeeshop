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
      {/* Image Container - B2 size: 240x160 (3:2 ratio) with calorie overlay */}
      <div className="relative w-full h-40 bg-amber-50 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Calorie badge overlay */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm">
          {defaultCalories > 0 ? `${defaultCalories} cal` : '0 cal'}
        </div>
      </div>
      
      {/* Content - Just the name now */}
      <div className="p-2.5">
        {/* Drink Name - 2 line clamp */}
        <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
          {drink.name}
        </h3>
      </div>
    </Link>
  );
};

export default DrinkTile;
