import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { breakfastCategories, breakfastCustomizations, breakfastHeroImage } from '../data/mock';
import FoodMenuItem from '../components/FoodMenuItem';
import { ChefHat, Utensils, Coffee } from 'lucide-react';

const Breakfast = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('breakfast-sandwiches');
  const { editingCartKey } = useCart();
  const categorySectionRefs = useRef({});

  // Scroll to category section
  const scrollToCategory = (categoryId) => {
    const element = categorySectionRefs.current[categoryId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detect active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const category of breakfastCategories) {
        const element = categorySectionRefs.current[category.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (editingCartKey) {
      const itemCategory = breakfastCategories.find(cat => 
        cat.items.some(item => editingCartKey.includes(item.id))
      );
      
      if (itemCategory) {
        setActiveCategory(itemCategory.id);
        
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
        className="relative h-96 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${breakfastHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
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

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Side Navigation */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* Breakfast Categories */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Breakfast Menu</h3>
                <nav className="space-y-2">
                  {breakfastCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                        activeCategory === category.id
                          ? 'bg-amber-600 text-white'
                          : 'text-gray-700 hover:bg-amber-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                  
                  {/* Divider */}
                  <div className="border-t border-gray-200 my-3"></div>
                  
                  {/* Other Menu Links */}
                  <button
                    onClick={() => navigate('/menu')}
                    className="w-full text-left px-4 py-2 rounded-lg transition-colors text-sm flex items-center text-gray-700 hover:bg-amber-50"
                  >
                    <Coffee className="w-4 h-4 mr-2 text-amber-500" />
                    Coffee Menu
                  </button>
                  <button
                    onClick={() => navigate('/dinner')}
                    className="w-full text-left px-4 py-2 rounded-lg transition-colors text-sm flex items-center text-gray-700 hover:bg-amber-50"
                  >
                    <Utensils className="w-4 h-4 mr-2 text-amber-500" />
                    Dinner Menu
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1">
            {/* Quick Navigation for Mobile */}
            <div className="lg:hidden mb-8 bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate('/menu')}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-amber-50 transition-colors text-left"
                >
                  <Coffee className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="font-medium text-gray-700">Coffee Menu</span>
                </button>
                <button
                  onClick={() => navigate('/dinner')}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-amber-50 transition-colors text-left"
                >
                  <Utensils className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="font-medium text-gray-700">Dinner Menu</span>
                </button>
              </div>
            </div>

            {breakfastCategories.map((category) => (
              <div
                key={category.id}
                ref={el => categorySectionRefs.current[category.id] = el}
                className="mb-16 scroll-mt-24"
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
      </div>
    </div>
  );
};

export default Breakfast;