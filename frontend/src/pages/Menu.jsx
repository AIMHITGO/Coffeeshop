import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChefHat, Utensils, Coffee, ShoppingBag } from 'lucide-react';
import { menuCategories, coffeeHeroImage } from '../data/mock';
import DrinkTile from '../components/DrinkTile';

const Menu = () => {
  // Refs for category sections
  const drinkSectionRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to category section
  const scrollToDrinkSection = (categoryId) => {
    const section = drinkSectionRefs.current[categoryId];
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const categoryId = location.hash.slice(1); // Remove the '#'
      // Small delay to ensure refs are set
      setTimeout(() => {
        scrollToDrinkSection(categoryId);
      }, 300);
    }
  }, [location.hash]);

  // Filter coffee/drink categories only
  const drinkCategories = menuCategories.filter(cat => 
    !['breakfast', 'dinner', 'food'].includes(cat.id.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Banner */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${coffeeHeroImage})`,
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Coffee & Drinks</h1>
          <p className="text-lg sm:text-xl text-white/90">
            Jessy's Premium Coffee - Fresh Roasted 100% Arabica Beans
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">
                Drink Menu
              </h3>
              <nav className="space-y-1">
                {drinkCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => scrollToDrinkSection(category.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
              
              {/* Other Menu Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Other Menus
                </h4>
                <a
                  href="/breakfast"
                  className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                >
                  <ChefHat className="w-4 h-4 mr-2 text-amber-500" />
                  Breakfast Menu
                </a>
                <a
                  href="/dinner"
                  className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                >
                  <Utensils className="w-4 h-4 mr-2 text-amber-500" />
                  Dinner Menu
                </a>
              </div>
              
              {/* Buy our Beans Button */}
              <div className="mt-4">
                <button
                  onClick={() => navigate('/about#coffee-origins')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-xl text-amber-800 font-semibold hover:bg-amber-100 hover:border-amber-400 transition-all"
                  data-testid="buy-our-beans-btn"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Buy our Beans
                  </span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Mobile Menu Links */}
            <div className="lg:hidden mb-6 bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <div className="flex gap-3">
                <a
                  href="/breakfast"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  <ChefHat className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-amber-700">Breakfast</span>
                </a>
                <a
                  href="/dinner"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  <Utensils className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-amber-700">Dinner</span>
                </a>
              </div>
            </div>

            {/* Mobile Category Pills */}
            <div className="lg:hidden mb-6 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max px-1">
                {drinkCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => scrollToDrinkSection(category.id)}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-amber-50 hover:border-amber-300 whitespace-nowrap transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Sections */}
            {drinkCategories.map(category => (
              <section
                key={category.id}
                ref={el => drinkSectionRefs.current[category.id] = el}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  {category.description && (
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  )}
                </div>

                {/* Drink Tiles Grid - B2 sizing (approx 240px wide tiles) */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {category.items.map(drink => (
                    <DrinkTile 
                      key={drink.id} 
                      drink={drink} 
                      categoryId={category.id}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Nutritional Disclaimer */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm text-gray-500">
              <p>
                * Calorie information is approximate and based on standard recipes. 
                Actual values may vary based on customizations and preparation.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Menu;
