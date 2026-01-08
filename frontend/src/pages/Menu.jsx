import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ShoppingBag, Plus, Minus, Star } from 'lucide-react';
import { menuCategories } from '../data/mock';
import { toast } from 'sonner';

const Menu = () => {
  const [cart, setCart] = useState({});
  const [selectedMainCategory, setSelectedMainCategory] = useState('featured');
  const [activeDrinkSection, setActiveDrinkSection] = useState('coffee-espresso');
  const drinkSectionRefs = useRef({});

  // Best Selling Coffee Items
  const bestSellingCoffee = [
    menuCategories.find(cat => cat.id === 'specialty-lattes')?.items[2], // Latte
    menuCategories.find(cat => cat.id === 'cold-brew-signature')?.items[0], // Cold Brew
    menuCategories.find(cat => cat.id === 'specialty-lattes')?.items[0], // Cappuccino
    menuCategories.find(cat => cat.id === 'cold-brew-signature')?.items[2], // Horchata & Espresso
    menuCategories.find(cat => cat.id === 'coffee-espresso')?.items[0], // Drip Coffee
    menuCategories.find(cat => cat.id === 'specialty-lattes')?.items[5], // Caramel Macchiato
  ].filter(Boolean);

  // Organize menu by main categories
  const coffeeMenuCategories = menuCategories.filter(cat => 
    ['coffee-espresso', 'specialty-lattes', 'cold-brew-signature', 'frappe', 'tea-non-coffee'].includes(cat.id)
  );

  const breakfastMenuCategories = menuCategories.filter(cat => 
    ['breakfast-sandwiches', 'latino-breakfast'].includes(cat.id)
  );

  const dinnerMenuCategories = menuCategories.filter(cat => 
    ['sandwiches', 'entrees', 'desserts'].includes(cat.id)
  );

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    toast.success(`${item.name} added to cart!`);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return menuCategories
      .flatMap(cat => cat.items)
      .reduce((sum, item) => sum + (item.price * (cart[item.id] || 0)), 0)
      .toFixed(2);
  };

  const scrollToDrinkSection = (sectionId) => {
    drinkSectionRefs.current[sectionId]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setActiveDrinkSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = Object.keys(drinkSectionRefs.current).map(key => ({
        id: key,
        top: drinkSectionRefs.current[key]?.getBoundingClientRect().top
      }));
      
      const current = sectionPositions.find(section => section.top >= 0 && section.top < 300);
      if (current) {
        setActiveDrinkSection(current.id);
      }
    };

    if (selectedMainCategory === 'coffee') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [selectedMainCategory]);

  const renderMenuItem = (item) => (
    <Card
      key={item.id}
      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white"
    >
      <div className="relative h-48 overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
            {item.size}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
            {item.calories !== undefined && (
              <span className="text-xs text-gray-500">{item.calories} cal</span>
            )}
          </div>
          <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

        {cart[item.id] ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 bg-amber-50 rounded-lg px-3 py-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => removeFromCart(item.id)}
                className="h-8 w-8 p-0 hover:bg-amber-100"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-bold text-gray-900 min-w-[20px] text-center">
                {cart[item.id]}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => addToCart(item)}
                className="h-8 w-8 p-0 hover:bg-amber-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm font-semibold text-amber-600">
              ${(item.price * cart[item.id]).toFixed(2)}
            </span>
          </div>
        ) : (
          <Button
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => addToCart(item)}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Order
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our unique blend of Latin-American and New-American cuisine
          </p>
        </div>

        {/* Main Category Tabs */}
        <Tabs value={selectedMainCategory} onValueChange={setSelectedMainCategory} className="mb-8">
          <TabsList className="w-full justify-center bg-white border shadow-sm p-2 mb-8">
            <TabsTrigger
              value="featured"
              className="px-8 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-lg font-semibold"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              value="coffee"
              className="px-8 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-lg font-semibold"
            >
              Coffee & Drink Menu
            </TabsTrigger>
            <TabsTrigger
              value="breakfast"
              className="px-8 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-lg font-semibold"
            >
              Breakfast Menu
            </TabsTrigger>
            <TabsTrigger
              value="dinner"
              className="px-8 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-lg font-semibold"
            >
              Full Dinner Menu
            </TabsTrigger>
          </TabsList>

          {/* FEATURED / BEST SELLERS */}
          <TabsContent value="featured">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <Star className="inline-block w-8 h-8 text-amber-500 mb-1 mr-2" />
                Best Selling Coffee
              </h2>
              <p className="text-gray-600">Our most popular drinks - customer favorites!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellingCoffee.map(item => renderMenuItem(item))}
            </div>
          </TabsContent>

          {/* COFFEE MENU - Scrollable with Side Navigation */}
          <TabsContent value="coffee">
            <div className="flex gap-8">
              {/* Side Navigation */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Drink Categories</h3>
                  <nav className="space-y-2">
                    {coffeeMenuCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => scrollToDrinkSection(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeDrinkSection === category.id
                            ? 'bg-amber-600 text-white'
                            : 'text-gray-700 hover:bg-amber-50'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Scrollable Drinks List */}
              <div className="flex-1">
                {coffeeMenuCategories.map((category) => (
                  <div
                    key={category.id}
                    ref={el => drinkSectionRefs.current[category.id] = el}
                    className="mb-16 scroll-mt-24"
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map(item => renderMenuItem(item))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* BREAKFAST MENU - With Sub-categories */}
          <TabsContent value="breakfast">
            {breakfastMenuCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map(item => renderMenuItem(item))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* FULL DINNER MENU - With Sub-categories */}
          <TabsContent value="dinner">
            {dinnerMenuCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map(item => renderMenuItem(item))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Floating Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl p-6 border-2 border-amber-200 max-w-sm z-40">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Your Order</h3>
              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {getTotalItems()}
              </div>
            </div>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {menuCategories
                .flatMap(cat => cat.items)
                .filter(item => cart[item.id])
                .map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">
                      {cart[item.id]}x {item.name}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${(item.price * cart[item.id]).toFixed(2)}
                    </span>
                  </div>
                ))}
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-amber-600">${getTotalPrice()}</span>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-6"
              onClick={() => toast.success('Checkout feature coming soon!')}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
