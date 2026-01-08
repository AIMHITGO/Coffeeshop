import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ShoppingBag, Plus, Minus, Star, Trash2, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { menuCategories, bestSellers, nutritionalDisclaimer, coffeeCustomizations, fruitTeaShakerFlavors } from '../data/mock';
import { toast } from 'sonner';

const Menu = () => {
  const [cart, setCart] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedMainCategory, setSelectedMainCategory] = useState('featured');
  const [activeDrinkSection, setActiveDrinkSection] = useState('coffee-espresso');
  const [isCartMinimized, setIsCartMinimized] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState(null); // Only one card expands at a time
  const [itemCustomizations, setItemCustomizations] = useState({});
  const [selectedFruitTea, setSelectedFruitTea] = useState({});
  const drinkSectionRefs = useRef({});

  // Get best selling items from references
  const bestSellingCoffee = bestSellers.map(ref => {
    const category = menuCategories.find(cat => cat.id === ref.categoryId);
    return category?.items.find(item => item.id === ref.itemId);
  }).filter(Boolean);

  // Organize menu by main categories
  const coffeeMenuCategories = menuCategories.filter(cat => 
    ['coffee-espresso', 'cappuccino', 'custom-drip', 'cold-brew-signature', 'frappe', 'tea-options', 'non-coffee'].includes(cat.id)
  );

  const getSelectedSize = (itemId) => {
    if (selectedSizes[itemId] !== undefined) {
      return selectedSizes[itemId];
    }
    return 0;
  };

  const setSelectedSize = (itemId, sizeIndex) => {
    setSelectedSizes(prev => ({
      ...prev,
      [itemId]: sizeIndex
    }));
  };

  const getCartKey = (itemId, sizeIndex) => `${itemId}-${sizeIndex}`;

  // Toggle customization - only one card at a time
  const toggleCustomization = (itemId) => {
    if (expandedItemId === itemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
    }
  };

  // Calculate total calories for an item with customizations
  const calculateTotalCalories = (item, itemId) => {
    const currentSizeIndex = getSelectedSize(itemId);
    const baseCalories = item.sizes[currentSizeIndex]?.calories || 0;
    const customizations = itemCustomizations[itemId] || {};
    
    let addedCalories = 0;
    
    // Milk option calories
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption && typeof milkOption.calories === 'number') {
        addedCalories += milkOption.calories;
      }
    }
    
    // Add-ons calories
    coffeeCustomizations.addOns.forEach(addon => {
      if (customizations[addon.id]) {
        addedCalories += addon.calories || 0;
      }
    });
    
    // Syrups calories (can be multiple)
    if (customizations.syrups && Array.isArray(customizations.syrups)) {
      customizations.syrups.forEach(syrupId => {
        const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
        if (syrup) {
          // Use average of range if string, otherwise use number
          const cal = typeof syrup.calories === 'number' ? syrup.calories : 15;
          addedCalories += cal;
        }
      });
    }
    
    // Sauces calories (can be multiple)
    if (customizations.sauces && Array.isArray(customizations.sauces)) {
      customizations.sauces.forEach(sauceId => {
        const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
        if (sauce) {
          const cal = typeof sauce.calories === 'number' ? sauce.calories : 35;
          addedCalories += cal;
        }
      });
    }
    
    // Shots calories
    if (customizations.shots && Array.isArray(customizations.shots)) {
      customizations.shots.forEach(shotId => {
        const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
        if (shot) {
          addedCalories += shot.calories || 0;
        }
      });
    }
    
    // Toppings calories
    coffeeCustomizations.toppings.forEach(topping => {
      if (customizations[topping.id]) {
        addedCalories += topping.calories || 0;
      }
    });
    
    return baseCalories + addedCalories;
  };

  // Calculate total price for customizations
  const calculateCustomizationPrice = (itemId) => {
    const customizations = itemCustomizations[itemId] || {};
    let addedPrice = 0;
    
    // Milk option price
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption) {
        addedPrice += milkOption.price || 0;
      }
    }
    
    // Add-ons price
    coffeeCustomizations.addOns.forEach(addon => {
      if (customizations[addon.id]) {
        addedPrice += addon.price || 0;
      }
    });
    
    // Syrups price (can be multiple)
    if (customizations.syrups && Array.isArray(customizations.syrups)) {
      customizations.syrups.forEach(syrupId => {
        const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
        if (syrup) {
          addedPrice += syrup.price || 0;
        }
      });
    }
    
    // Sauces price (can be multiple)
    if (customizations.sauces && Array.isArray(customizations.sauces)) {
      customizations.sauces.forEach(sauceId => {
        const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
        if (sauce) {
          addedPrice += sauce.price || 0;
        }
      });
    }
    
    // Shots price
    if (customizations.shots && Array.isArray(customizations.shots)) {
      customizations.shots.forEach(shotId => {
        const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
        if (shot) {
          addedPrice += shot.price || 0;
        }
      });
    }
    
    // Toppings price
    coffeeCustomizations.toppings.forEach(topping => {
      if (customizations[topping.id]) {
        addedPrice += topping.price || 0;
      }
    });
    
    return addedPrice;
  };

  const updateItemCustomization = (itemId, type, value) => {
    setItemCustomizations(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [type]: value
      }
    }));
  };

  // Toggle multi-select options (syrups, sauces, shots)
  const toggleMultiSelect = (itemId, category, optionId) => {
    setItemCustomizations(prev => {
      const current = prev[itemId]?.[category] || [];
      const isSelected = current.includes(optionId);
      
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          [category]: isSelected 
            ? current.filter(id => id !== optionId)
            : [...current, optionId]
        }
      };
    });
  };

  const addToCart = (item, sizeIndex) => {
    const key = getCartKey(item.id, sizeIndex);
    const sizeInfo = item.sizes[sizeIndex];
    const customizations = itemCustomizations[item.id] || {};
    const fruitTea = selectedFruitTea[item.id] || null;
    const customizationPrice = calculateCustomizationPrice(item.id);
    
    setCart(prev => ({
      ...prev,
      [key]: {
        item,
        sizeIndex,
        quantity: (prev[key]?.quantity || 0) + 1,
        customizations,
        fruitTea,
        customizationPrice
      }
    }));
    toast.success(`${item.name} (${sizeInfo.size}) added to cart!`);
    
    // Collapse the card after adding to cart
    setExpandedItemId(null);
  };

  const removeFromCart = (itemId, sizeIndex) => {
    const key = getCartKey(itemId, sizeIndex);
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[key]?.quantity > 1) {
        newCart[key] = { ...newCart[key], quantity: newCart[key].quantity - 1 };
      } else {
        delete newCart[key];
      }
      return newCart;
    });
  };

  const deleteFromCart = (key) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[key];
      return newCart;
    });
    toast.success('Item removed from cart');
  };

  const getCartQuantity = (itemId, sizeIndex) => {
    const key = getCartKey(itemId, sizeIndex);
    return cart[key]?.quantity || 0;
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, entry) => sum + entry.quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.values(cart)
      .reduce((sum, entry) => {
        const basePrice = entry.item.sizes[entry.sizeIndex].price;
        const customPrice = entry.customizationPrice || 0;
        return sum + ((basePrice + customPrice) * entry.quantity);
      }, 0)
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

  const renderCustomizationSection = (item, categoryHasCustomization) => {
    if (!categoryHasCustomization) return null;

    const isExpanded = expandedItemId === item.id;
    const currentCustomizations = itemCustomizations[item.id] || {};

    return (
      <div className="mt-4 border-t pt-4">
        <button
          onClick={() => toggleCustomization(item.id)}
          className="flex items-center justify-between w-full text-sm font-medium text-amber-600 hover:text-amber-700"
        >
          <span className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Customize Your Drink
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 text-sm bg-white">
            {/* Milk Options */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Milk Option</label>
              <select
                value={currentCustomizations.milk || ''}
                onChange={(e) => updateItemCustomization(item.id, 'milk', e.target.value)}
                className="w-full p-2 border rounded-lg text-sm"
              >
                <option value="">Default (2% Milk) - $0.00 / 0 cal</option>
                {coffeeCustomizations.milk.map(opt => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name} - +${opt.price.toFixed(2)} / {typeof opt.calories === 'number' ? `${opt.calories} cal` : opt.calories}
                  </option>
                ))}
              </select>
            </div>

            {/* Add-ons (checkboxes) */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Add-ons</label>
              <div className="space-y-2">
                {coffeeCustomizations.addOns.map(addon => (
                  <label key={addon.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={currentCustomizations[addon.id] || false}
                      onChange={(e) => updateItemCustomization(item.id, addon.id, e.target.checked)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{addon.name}</span>
                    <span className="text-gray-500 text-xs">+${addon.price.toFixed(2)} / {addon.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Syrups (multi-select checkboxes) */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Syrups (Select Multiple)</label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {coffeeCustomizations.syrups.map(syrup => (
                  <label key={syrup.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.syrups || []).includes(syrup.id)}
                      onChange={() => toggleMultiSelect(item.id, 'syrups', syrup.id)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{syrup.name}</span>
                    <span className="text-gray-500 text-xs">+${syrup.price.toFixed(2)} / {syrup.calories}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sauces (multi-select checkboxes) */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Sauces (Select Multiple)</label>
              <div className="space-y-2">
                {coffeeCustomizations.sauces.map(sauce => (
                  <label key={sauce.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.sauces || []).includes(sauce.id)}
                      onChange={() => toggleMultiSelect(item.id, 'sauces', sauce.id)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{sauce.name}</span>
                    <span className="text-gray-500 text-xs">+${sauce.price.toFixed(2)} / {sauce.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Shots (multi-select checkboxes) */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Extra Shots</label>
              <div className="space-y-2">
                {coffeeCustomizations.shots.map(shot => (
                  <label key={shot.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.shots || []).includes(shot.id)}
                      onChange={() => toggleMultiSelect(item.id, 'shots', shot.id)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{shot.name}</span>
                    <span className="text-gray-500 text-xs">+${shot.price.toFixed(2)} / {shot.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Toppings (checkboxes) */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Toppings</label>
              <div className="space-y-2">
                {coffeeCustomizations.toppings.map(topping => (
                  <label key={topping.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={currentCustomizations[topping.id] || false}
                      onChange={(e) => updateItemCustomization(item.id, topping.id, e.target.checked)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{topping.name}</span>
                    <span className="text-gray-500 text-xs">
                      {topping.price > 0 ? `+$${topping.price.toFixed(2)}` : 'Free'} / {topping.calories} cal
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Customization Summary */}
            {calculateCustomizationPrice(item.id) > 0 && (
              <div className="pt-3 border-t bg-amber-50 -mx-4 px-4 py-2 mt-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Customization Total:</span>
                  <span className="text-amber-600">+${calculateCustomizationPrice(item.id).toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderFruitTeaShakerOption = (item) => {
    if (!item.hasFruitTeaShaker) return null;

    return (
      <div className="mt-3 p-3 bg-amber-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Fruit Tea Shaker (Free)
        </label>
        <select
          value={selectedFruitTea[item.id] || ''}
          onChange={(e) => setSelectedFruitTea(prev => ({ ...prev, [item.id]: e.target.value }))}
          className="w-full p-2 border rounded-lg text-sm"
        >
          <option value="">No Fruit Tea Shaker</option>
          {fruitTeaShakerFlavors.map(flavor => (
            <option key={flavor.id} value={flavor.id}>{flavor.name}</option>
          ))}
        </select>
      </div>
    );
  };

  const renderMenuItem = (item, categoryHasCustomization = false) => {
    const currentSizeIndex = getSelectedSize(item.id);
    const currentSize = item.sizes[currentSizeIndex];
    const cartQty = getCartQuantity(item.id, currentSizeIndex);
    const isExpanded = expandedItemId === item.id;
    const totalCalories = calculateTotalCalories(item, item.id);
    const customizationPrice = calculateCustomizationPrice(item.id);
    const totalPrice = currentSize.price + customizationPrice;

    return (
      <div
        key={item.id}
        className={`relative ${isExpanded ? 'z-50' : 'z-0'}`}
      >
        <Card
          className={`group transition-all duration-300 overflow-visible border-0 bg-white flex flex-col ${
            isExpanded 
              ? 'shadow-2xl ring-2 ring-amber-400 absolute left-0 right-0 top-0' 
              : 'hover:shadow-xl h-full'
          }`}
          style={isExpanded ? { minHeight: 'auto' } : {}}
        >
          <div className="relative h-48 overflow-hidden bg-white flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain p-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="mb-3 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-1 line-clamp-2 min-h-[40px]">{item.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-3 flex-shrink-0">
              <div className="flex flex-wrap gap-2">
                {item.sizes.map((sizeOption, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(item.id, idx)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex-1 min-w-[70px] ${
                      currentSizeIndex === idx
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-amber-50'
                    }`}
                  >
                    <span className="block text-xs">{sizeOption.size}</span>
                    {sizeOption.price > 0 && (
                      <span className="block text-xs">${sizeOption.price.toFixed(2)}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Calorie Counter */}
            <div className="flex items-center justify-between mb-3 flex-shrink-0 bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">Calories:</span>
              <span className={`text-sm font-semibold ${totalCalories > 0 ? 'text-amber-600' : 'text-gray-500'}`}>
                {totalCalories} cal
              </span>
            </div>

            {/* Fruit Tea Shaker Option */}
            {renderFruitTeaShakerOption(item)}

            {/* Customization Section */}
            {renderCustomizationSection(item, categoryHasCustomization)}

            {/* Spacer to push button to bottom (only when not expanded) */}
            {!isExpanded && <div className="flex-grow"></div>}

            {/* Price Display */}
            {customizationPrice > 0 && (
              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-bold text-amber-600">${totalPrice.toFixed(2)}</span>
              </div>
            )}

            {/* Add to Cart - Always at bottom */}
            <div className="mt-4 flex-shrink-0">
              {cartQty > 0 ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-amber-50 rounded-lg px-3 py-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id, currentSizeIndex)}
                      className="h-8 w-8 p-0 hover:bg-amber-100"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-bold text-gray-900 min-w-[20px] text-center">
                      {cartQty}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => addToCart(item, currentSizeIndex)}
                      className="h-8 w-8 p-0 hover:bg-amber-100"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm font-semibold text-amber-600">
                    ${(totalPrice * cartQty).toFixed(2)}
                  </span>
                </div>
              ) : (
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => addToCart(item, currentSizeIndex)}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Order {customizationPrice > 0 && `($${totalPrice.toFixed(2)})`}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Placeholder to maintain grid space when card is expanded */}
        {isExpanded && <div className="h-[500px]"></div>}
      </div>
    );
  };

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

        {/* Main Category Tabs - Fixed Alignment */}
        <Tabs value={selectedMainCategory} onValueChange={setSelectedMainCategory} className="mb-8">
          <TabsList className="w-full bg-white border shadow-sm p-1 mb-8 flex justify-center items-center gap-1">
            <TabsTrigger
              value="featured"
              className="flex-1 max-w-[200px] px-4 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-sm font-semibold rounded-md"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              value="coffee"
              className="flex-1 max-w-[200px] px-4 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-sm font-semibold rounded-md"
            >
              Coffee & Drinks
            </TabsTrigger>
            <TabsTrigger
              value="breakfast"
              className="flex-1 max-w-[200px] px-4 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-sm font-semibold rounded-md"
            >
              Breakfast
            </TabsTrigger>
            <TabsTrigger
              value="dinner"
              className="flex-1 max-w-[200px] px-4 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white text-sm font-semibold rounded-md"
            >
              Dinner
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
              {bestSellingCoffee.map(item => {
                const category = menuCategories.find(cat => 
                  cat.items.some(i => i.id === item.id)
                );
                return renderMenuItem(item, category?.hasCustomization || false);
              })}
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
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
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
                      {category.items.map(item => renderMenuItem(item, category.hasCustomization))}
                    </div>
                  </div>
                ))}
                
                {/* Nutritional Disclaimer */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Nutritional Information</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{nutritionalDisclaimer}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* BREAKFAST MENU - Placeholder */}
          <TabsContent value="breakfast">
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Breakfast Menu</h2>
              <p className="text-gray-600 mb-4">Our delicious breakfast options are coming soon!</p>
              <p className="text-gray-500">Check back later for our full breakfast selection including sandwiches and Latino favorites.</p>
            </div>
          </TabsContent>

          {/* FULL DINNER MENU - Placeholder */}
          <TabsContent value="dinner">
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Dinner Menu</h2>
              <p className="text-gray-600 mb-4">Our dinner menu is coming soon!</p>
              <p className="text-gray-500">Check back later for our full dinner selection including sandwiches, entrees, and desserts.</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Floating Cart Summary */}
        {getTotalItems() > 0 && (
          <div className={`fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl border-2 border-amber-200 max-w-sm z-[100] transition-all duration-300 ${isCartMinimized ? 'w-auto' : 'w-80'}`}>
            {/* Cart Header with Minimize */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <h3 className="text-lg font-bold text-gray-900">Your Order</h3>
                <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm ml-2">
                  {getTotalItems()}
                </div>
              </div>
              <button
                onClick={() => setIsCartMinimized(!isCartMinimized)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isCartMinimized ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {/* Cart Content - Collapsible */}
            {!isCartMinimized && (
              <div className="p-4">
                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                  {Object.entries(cart).map(([key, entry]) => (
                    <div key={key} className="flex items-center justify-between text-sm group">
                      <div className="flex-1">
                        <span className="text-gray-700">
                          {entry.quantity}x {entry.item.name}
                        </span>
                        <span className="text-gray-500 text-xs block">
                          {entry.item.sizes[entry.sizeIndex].size}
                          {entry.fruitTea && ` + ${fruitTeaShakerFlavors.find(f => f.id === entry.fruitTea)?.name}`}
                          {entry.customizationPrice > 0 && ` (+$${entry.customizationPrice.toFixed(2)})`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          ${((entry.item.sizes[entry.sizeIndex].price + (entry.customizationPrice || 0)) * entry.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => deleteFromCart(key)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
        )}
      </div>
    </div>
  );
};

export default Menu;
