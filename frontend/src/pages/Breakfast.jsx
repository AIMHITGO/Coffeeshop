import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { breakfastCategories, breakfastCustomizations, breakfastHeroImage } from '../data/mock';
import FoodMenuItem from '../components/FoodMenuItem';
import { ChefHat } from 'lucide-react';

const Breakfast = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast-sandwiches');
  const { editingCartKey } = useCart();

  useEffect(() => {
    if (editingCartKey) {
      // Find the category that contains the item being edited
      const itemCategory = breakfastCategories.find(cat => 
        cat.items.some(item => editingCartKey.includes(item.id))
      );
      
      if (itemCategory) {
        setActiveCategory(itemCategory.id);
        
        // Scroll to the item
        setTimeout(() => {
          const element = document.getElementById(`breakfast-${editingCartKey.split('-')[0]}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, [editingCartKey]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${breakfastHeroImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <ChefHat className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Breakfast Menu</h1>
            <p className="text-xl sm:text-2xl">Start Your Day Right</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-md shadow-md z-40 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {breakfastCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {breakfastCategories.map((category) => (
          <div
            key={category.id}
            className={`mb-16 ${activeCategory !== category.id ? 'hidden' : ''}`}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
              {category.description && (
                <p className="text-gray-600">{category.description}</p>
              )}
            </div>

            <div className="space-y-4">
              {category.items.map((item) => (
                <FoodMenuItem
                  key={item.id}
                  item={item}
                  customizations={breakfastCustomizations}
                  menuType="breakfast"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;