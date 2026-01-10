import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ShoppingBag, Plus, Minus, Star, Trash2, ChevronDown, ChevronUp, Settings, RotateCcw, Maximize2, Minimize2, X } from 'lucide-react';
import { menuCategories, bestSellers, nutritionalDisclaimer, coffeeCustomizations, fruitTeaShakerFlavors } from '../data/mock';
import { toast } from 'sonner';

const Menu = () => {
  const [cart, setCart] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedMainCategory, setSelectedMainCategory] = useState('featured');
  const [activeDrinkSection, setActiveDrinkSection] = useState('best-sellers');
  // Cart states: 'minimized' | 'regular' | 'expanded'
  const [cartState, setCartState] = useState('regular');
  const [expandedCardKey, setExpandedCardKey] = useState(null);
  const [itemCustomizations, setItemCustomizations] = useState({});
  const [selectedFruitTea, setSelectedFruitTea] = useState({});
  const [blockNextClick, setBlockNextClick] = useState(false);
  const [editingCartKey, setEditingCartKey] = useState(null); // Track which cart item is being edited
  const [itemQuantities, setItemQuantities] = useState({}); // Track quantity for each item being built
  const drinkSectionRefs = useRef({});
  const cartRef = useRef(null);
  const expandedCardRef = useRef(null);

  // Get best selling items from references
  const bestSellingCoffee = bestSellers.map(ref => {
    const category = menuCategories.find(cat => cat.id === ref.categoryId);
    const item = category?.items.find(item => item.id === ref.itemId);
    if (item) {
      return { ...item, isBestSeller: true };
    }
    return null;
  }).filter(Boolean);

  // Add Best Sellers as first category in side nav
  const coffeeMenuCategories = [
    {
      id: 'best-sellers',
      name: 'Best Sellers',
      description: 'Our most popular drinks - customer favorites!',
      hasCustomization: true,
      items: bestSellingCoffee
    },
    ...menuCategories.filter(cat => 
      ['coffee-espresso', 'cappuccino', 'custom-drip', 'cold-brew-signature', 'frappe', 'tea-options', 'non-coffee'].includes(cat.id)
    )
  ];

  // Helper to create unique card key (section + item)
  const getCardKey = (categoryId, itemId) => `${categoryId}-${itemId}`;

  // Click outside to collapse expanded card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expandedCardKey && expandedCardRef.current && !expandedCardRef.current.contains(event.target)) {
        setExpandedCardKey(null);
        setBlockNextClick(true);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    if (expandedCardKey) {
      document.addEventListener('click', handleClickOutside, true);
      return () => document.removeEventListener('click', handleClickOutside, true);
    }
  }, [expandedCardKey]);

  // Reset blockNextClick after a short delay
  useEffect(() => {
    if (blockNextClick) {
      const timer = setTimeout(() => {
        setBlockNextClick(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [blockNextClick]);

  // Click outside to handle cart state transitions
  // Expanded -> Regular -> Minimized
  useEffect(() => {
    const handleCartClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (cartState === 'expanded') {
          setCartState('regular'); // Shrink from expanded to regular
        } else if (cartState === 'regular') {
          setCartState('minimized'); // Minimize from regular
        }
      }
    };

    if (Object.keys(cart).length > 0 && cartState !== 'minimized') {
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleCartClickOutside, true);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleCartClickOutside, true);
      };
    }
  }, [cart, cartState]);

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

  const getCartItemKey = (itemId, sizeIndex, customizations = {}, fruitTea = null) => {
    // Create a unique key based on item, size, and customizations
    const customKey = JSON.stringify({
      milk: customizations.milk || 'default',
      addOns: Object.keys(customizations).filter(k => 
        ['whipped-cream', 'honey-boba', 'brown-sugar-jelly'].includes(k) && customizations[k]
      ).sort(),
      syrups: (customizations.syrups || []).sort(),
      sauces: (customizations.sauces || []).sort(),
      shots: (customizations.shots || []).sort(),
      toppings: Object.keys(customizations).filter(k => 
        coffeeCustomizations.toppings.some(t => t.id === k) && customizations[k]
      ).sort(),
      fruitTea: fruitTea
    });
    return `${itemId}-${sizeIndex}-${btoa(customKey)}`;
  };

  // Toggle customization - uses unique card key (categoryId-itemId)
  const toggleCustomization = (cardKey) => {
    if (blockNextClick) return;
    
    if (expandedCardKey === cardKey) {
      setExpandedCardKey(null);
    } else {
      setExpandedCardKey(cardKey);
    }
  };

  // Clear ALL customizations for a specific item
  const clearItemCustomizations = (itemId) => {
    setItemCustomizations(prev => {
      const newCustomizations = { ...prev };
      delete newCustomizations[itemId];
      return newCustomizations;
    });
    setSelectedFruitTea(prev => {
      const newFruitTea = { ...prev };
      delete newFruitTea[itemId];
      return newFruitTea;
    });
    setSelectedSizes(prev => {
      const newSizes = { ...prev };
      delete newSizes[itemId];
      return newSizes;
    });
    toast.success('Customizations cleared');
  };

  // Calculate total calories for an item with customizations
  const calculateTotalCalories = (item, itemId) => {
    const currentSizeIndex = getSelectedSize(itemId);
    const baseCalories = item.sizes[currentSizeIndex]?.calories || 0;
    const customizations = itemCustomizations[itemId] || {};
    
    let addedCalories = 0;
    
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption && typeof milkOption.calories === 'number') {
        addedCalories += milkOption.calories;
      }
    }
    
    coffeeCustomizations.addOns.forEach(addon => {
      if (customizations[addon.id]) {
        addedCalories += addon.calories || 0;
      }
    });
    
    if (customizations.syrups && Array.isArray(customizations.syrups)) {
      customizations.syrups.forEach(syrupId => {
        const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
        if (syrup) {
          const cal = typeof syrup.calories === 'number' ? syrup.calories : 15;
          addedCalories += cal;
        }
      });
    }
    
    if (customizations.sauces && Array.isArray(customizations.sauces)) {
      customizations.sauces.forEach(sauceId => {
        const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
        if (sauce) {
          const cal = typeof sauce.calories === 'number' ? sauce.calories : 35;
          addedCalories += cal;
        }
      });
    }
    
    if (customizations.shots && Array.isArray(customizations.shots)) {
      customizations.shots.forEach(shotId => {
        const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
        if (shot) {
          addedCalories += shot.calories || 0;
        }
      });
    }
    
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
    
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption) {
        addedPrice += milkOption.price || 0;
      }
    }
    
    coffeeCustomizations.addOns.forEach(addon => {
      if (customizations[addon.id]) {
        addedPrice += addon.price || 0;
      }
    });
    
    if (customizations.syrups && Array.isArray(customizations.syrups)) {
      customizations.syrups.forEach(syrupId => {
        const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
        if (syrup) {
          addedPrice += syrup.price || 0;
        }
      });
    }
    
    if (customizations.sauces && Array.isArray(customizations.sauces)) {
      customizations.sauces.forEach(sauceId => {
        const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
        if (sauce) {
          addedPrice += sauce.price || 0;
        }
      });
    }
    
    if (customizations.shots && Array.isArray(customizations.shots)) {
      customizations.shots.forEach(shotId => {
        const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
        if (shot) {
          addedPrice += shot.price || 0;
        }
      });
    }
    
    coffeeCustomizations.toppings.forEach(topping => {
      if (customizations[topping.id]) {
        addedPrice += topping.price || 0;
      }
    });
    
    return addedPrice;
  };

  // Check if item has any customizations
  const hasCustomizations = (itemId) => {
    const customizations = itemCustomizations[itemId] || {};
    const fruitTea = selectedFruitTea[itemId];
    const sizeChanged = selectedSizes[itemId] !== undefined && selectedSizes[itemId] !== 0;
    
    return Object.keys(customizations).length > 0 || fruitTea || sizeChanged;
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

  const addToCart = (item, sizeIndex, cardKey) => {
    if (blockNextClick) return;
    
    const customizations = itemCustomizations[item.id] || {};
    const fruitTea = selectedFruitTea[item.id] || null;
    const key = getCartItemKey(item.id, sizeIndex, customizations, fruitTea);
    const sizeInfo = item.sizes[sizeIndex];
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
    
    // Clear customizations after adding to cart
    clearItemCustomizations(item.id);
    
    // Collapse the card after adding to cart
    if (expandedCardKey === cardKey) {
      setExpandedCardKey(null);
    }
  };

  const removeFromCart = (itemId, sizeIndex) => {
    if (blockNextClick) return;
    
    const key = getCartItemKey(itemId, sizeIndex);
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[key]?.quantity > 1) {
        newCart[key] = { ...newCart[key], quantity: newCart[key].quantity - 1 };
      } else {
        delete newCart[key];
        clearItemCustomizations(itemId);
      }
      return newCart;
    });
  };

  const deleteFromCart = (key, itemId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[key];
      return newCart;
    });
    if (itemId) {
      clearItemCustomizations(itemId);
    }
    toast.success('Item removed from cart');
  };

  const clearCart = () => {
    Object.values(cart).forEach(entry => {
      clearItemCustomizations(entry.item.id);
    });
    setCart({});
    setEditingCartKey(null);
    toast.success('Cart cleared');
  };

  // Start editing a cart item
  const startEditingCartItem = (cartKey, entry) => {
    const { item, sizeIndex, customizations, fruitTea } = entry;
    
    // Set the editing cart key
    setEditingCartKey(cartKey);
    
    // Load the item's customizations into the form
    setItemCustomizations(prev => ({
      ...prev,
      [item.id]: customizations
    }));
    
    // Set the selected size
    setSelectedSizes(prev => ({
      ...prev,
      [item.id]: sizeIndex
    }));
    
    // Set fruit tea selection if applicable
    if (fruitTea) {
      setSelectedFruitTea(prev => ({
        ...prev,
        [item.id]: fruitTea
      }));
    }
    
    // Find the category ID for this item
    let categoryId = 'default';
    const category = coffeeMenuCategories.find(cat => 
      cat.items.some(i => i.id === item.id)
    );
    if (category) {
      categoryId = category.id;
    }
    
    // Expand the corresponding card
    const cardKey = getCardKey(categoryId, item.id);
    setExpandedCardKey(cardKey);
    
    // Scroll to the item and switch to coffee menu if needed
    if (selectedMainCategory !== 'coffee') {
      setSelectedMainCategory('coffee');
    }
    
    setTimeout(() => {
      const element = document.getElementById(`item-${item.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    
    toast.info('Editing item - make your changes and click "Update Order"');
  };

  // Update an existing cart item
  const updateCartItem = (item, sizeIndex, cardKey) => {
    if (!editingCartKey) return;
    
    const customizations = itemCustomizations[item.id] || {};
    const fruitTea = selectedFruitTea[item.id] || null;
    const customizationPrice = calculateCustomizationPrice(item.id);
    
    // Get the old cart entry to preserve quantity
    const oldEntry = cart[editingCartKey];
    const quantity = oldEntry?.quantity || 1;
    
    // Delete the old cart entry
    const newCart = { ...cart };
    delete newCart[editingCartKey];
    
    // Create new key with updated customizations
    const newKey = getCartItemKey(item.id, sizeIndex, customizations, fruitTea);
    
    // Add updated item to cart
    newCart[newKey] = {
      item,
      sizeIndex,
      quantity,
      customizations,
      fruitTea,
      customizationPrice
    };
    
    setCart(newCart);
    toast.success('Order updated successfully!');
    
    // Clear customizations and editing state
    clearItemCustomizations(item.id);
    setEditingCartKey(null);
    
    // Collapse the card
    if (expandedCardKey === cardKey) {
      setExpandedCardKey(null);
    }
  };

  const getCartQuantity = (itemId, sizeIndex) => {
    const key = getCartItemKey(itemId, sizeIndex);
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
    if (blockNextClick) return;
    
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

  // Render customization section - takes unique cardKey
  const renderCustomizationSection = (item, categoryHasCustomization, cardKey) => {
    if (!categoryHasCustomization) return null;

    const isExpanded = expandedCardKey === cardKey;
    const currentCustomizations = itemCustomizations[item.id] || {};
    const itemHasCustomizations = hasCustomizations(item.id);

    return (
      <div className="mt-4 border-t pt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleCustomization(cardKey);
          }}
          className="flex items-center justify-between w-full text-sm font-medium text-amber-600 hover:text-amber-700"
        >
          <span className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Customize Your Drink
            {itemHasCustomizations && !isExpanded && (
              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Modified</span>
            )}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 text-sm bg-white max-h-80 overflow-y-auto pr-2">
            {itemHasCustomizations && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearItemCustomizations(item.id);
                }}
                className="flex items-center text-red-500 hover:text-red-600 text-sm font-medium mb-2"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Clear All Customizations
              </button>
            )}

            {/* Milk Options */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Milk Option</label>
              <select
                value={currentCustomizations.milk || ''}
                onChange={(e) => {
                  e.stopPropagation();
                  updateItemCustomization(item.id, 'milk', e.target.value);
                }}
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

            {/* Add-ons */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Add-ons</label>
              <div className="space-y-2">
                {coffeeCustomizations.addOns.map(addon => (
                  <label key={addon.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={currentCustomizations[addon.id] || false}
                      onChange={(e) => {
                        e.stopPropagation();
                        updateItemCustomization(item.id, addon.id, e.target.checked);
                      }}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{addon.name}</span>
                    <span className="text-gray-500 text-xs">+${addon.price.toFixed(2)} / {addon.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Syrups */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Syrups (Select Multiple)</label>
              <div className="space-y-2">
                {coffeeCustomizations.syrups.map(syrup => (
                  <label key={syrup.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.syrups || []).includes(syrup.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleMultiSelect(item.id, 'syrups', syrup.id);
                      }}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{syrup.name}</span>
                    <span className="text-gray-500 text-xs">+${syrup.price.toFixed(2)} / {syrup.calories}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sauces */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Sauces (Select Multiple)</label>
              <div className="space-y-2">
                {coffeeCustomizations.sauces.map(sauce => (
                  <label key={sauce.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.sauces || []).includes(sauce.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleMultiSelect(item.id, 'sauces', sauce.id);
                      }}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{sauce.name}</span>
                    <span className="text-gray-500 text-xs">+${sauce.price.toFixed(2)} / {sauce.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Shots */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Extra Shots</label>
              <div className="space-y-2">
                {coffeeCustomizations.shots.map(shot => (
                  <label key={shot.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={(currentCustomizations.shots || []).includes(shot.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleMultiSelect(item.id, 'shots', shot.id);
                      }}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1">{shot.name}</span>
                    <span className="text-gray-500 text-xs">+${shot.price.toFixed(2)} / {shot.calories} cal</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Toppings */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Toppings</label>
              <div className="space-y-2">
                {coffeeCustomizations.toppings.map(topping => (
                  <label key={topping.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={currentCustomizations[topping.id] || false}
                      onChange={(e) => {
                        e.stopPropagation();
                        updateItemCustomization(item.id, topping.id, e.target.checked);
                      }}
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

            {calculateCustomizationPrice(item.id) > 0 && (
              <div className="pt-3 border-t bg-amber-50 -mx-2 px-2 py-2 mt-4 rounded">
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
          onChange={(e) => {
            e.stopPropagation();
            setSelectedFruitTea(prev => ({ ...prev, [item.id]: e.target.value }));
          }}
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

  // Render menu item - takes categoryId to create unique card key
  const renderMenuItem = (item, categoryHasCustomization = false, categoryId = 'default') => {
    const cardKey = getCardKey(categoryId, item.id);
    const currentSizeIndex = getSelectedSize(item.id);
    const currentSize = item.sizes[currentSizeIndex];
    const cartQty = getCartQuantity(item.id, currentSizeIndex);
    const isExpanded = expandedCardKey === cardKey;
    const totalCalories = calculateTotalCalories(item, item.id);
    const customizationPrice = calculateCustomizationPrice(item.id);
    const totalPrice = currentSize.price + customizationPrice;
    const itemHasCustomizations = hasCustomizations(item.id);
    const showPrice = cartQty > 0 || itemHasCustomizations;

    return (
      <div
        id={`item-${item.id}`}
        key={cardKey}
        className={`relative ${isExpanded ? 'z-50' : 'z-0'}`}
      >
        <Card
          ref={isExpanded ? expandedCardRef : null}
          className={`group transition-all duration-300 overflow-visible border-0 bg-white flex flex-col ${
            isExpanded 
              ? 'shadow-2xl ring-2 ring-amber-400 absolute left-0 right-0 top-0' 
              : 'hover:shadow-xl h-full'
          }`}
          style={isExpanded ? { minHeight: 'auto' } : {}}
        >
          <div className="relative h-48 overflow-hidden bg-white flex-shrink-0">
            {item.isBestSeller && (
              <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center z-10">
                <Star className="w-3 h-3 mr-1" fill="white" />
                Best Seller
              </div>
            )}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!blockNextClick) setSelectedSize(item.id, idx);
                    }}
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

            {/* Customization Section - pass unique cardKey */}
            {renderCustomizationSection(item, categoryHasCustomization, cardKey)}

            {!isExpanded && <div className="flex-grow"></div>}

            {showPrice && customizationPrice > 0 && (
              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-bold text-amber-600">${totalPrice.toFixed(2)}</span>
              </div>
            )}

            {/* Add to Cart / Update Order */}
            <div className="mt-4 flex-shrink-0">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  if (editingCartKey) {
                    updateCartItem(item, currentSizeIndex, cardKey);
                  } else {
                    addToCart(item, currentSizeIndex, cardKey);
                  }
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {editingCartKey ? 'Update Order' : 'Add to Order'} {showPrice && customizationPrice > 0 && `($${totalPrice.toFixed(2)})`}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {isExpanded && <div className="h-[600px]"></div>}
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

        {/* Main Category Tabs - Fixed/Sticky on ALL pages */}
        <Tabs value={selectedMainCategory} onValueChange={(val) => { if (!blockNextClick) setSelectedMainCategory(val); }} className="mb-8">
          <div className="sticky top-0 z-40 bg-gradient-to-b from-amber-50/95 to-amber-50/80 backdrop-blur-sm py-4 -mx-4 px-4">
            <TabsList className="w-full bg-white border shadow-sm p-1 flex justify-center items-center gap-1 rounded-lg">
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
          </div>

          {/* FEATURED / BEST SELLERS - Use 'featured' as categoryId */}
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
                return renderMenuItem(item, category?.hasCustomization || false, 'featured');
              })}
            </div>
          </TabsContent>

          {/* COFFEE MENU */}
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
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm flex items-center ${
                          activeDrinkSection === category.id
                            ? 'bg-amber-600 text-white'
                            : 'text-gray-700 hover:bg-amber-50'
                        }`}
                      >
                        {category.id === 'best-sellers' && (
                          <Star className={`w-4 h-4 mr-2 ${activeDrinkSection === category.id ? 'text-white' : 'text-amber-500'}`} />
                        )}
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
                      <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                        {category.id === 'best-sellers' && (
                          <Star className="w-8 h-8 text-amber-500 mr-2" />
                        )}
                        {category.name}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map(item => renderMenuItem(item, category.hasCustomization, category.id))}
                    </div>
                  </div>
                ))}
                
                {/* Nutritional Disclaimer */}
                <div className="mt-12 p-8 bg-gray-100 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Nutritional Information</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{nutritionalDisclaimer}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* BREAKFAST MENU */}
          <TabsContent value="breakfast">
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Breakfast Menu</h2>
              <p className="text-gray-600 mb-4">Our delicious breakfast options are coming soon!</p>
              <p className="text-gray-500">Check back later for our full breakfast selection including sandwiches and Latino favorites.</p>
            </div>
          </TabsContent>

          {/* FULL DINNER MENU */}
          <TabsContent value="dinner">
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Dinner Menu</h2>
              <p className="text-gray-600 mb-4">Our dinner menu is coming soon!</p>
              <p className="text-gray-500">Check back later for our full dinner selection including sandwiches, entrees, and desserts.</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Floating Cart - Three stages: minimized, regular, expanded */}
        {getTotalItems() > 0 && (
          <div 
            ref={cartRef}
            className={`fixed bg-white rounded-2xl shadow-2xl border-2 border-amber-200 z-[100] transition-all duration-300 ${
              cartState === 'expanded' 
                ? 'bottom-20 right-4 left-4 md:left-auto md:right-8 md:w-[500px] max-h-[70vh]' 
                : cartState === 'regular'
                  ? 'bottom-20 right-8 w-80'
                  : 'bottom-20 right-8 w-auto'
            }`}
          >
            {/* Cart Header */}
            <div 
              className={`flex items-center justify-between p-4 border-b ${cartState === 'minimized' ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (cartState === 'minimized') {
                  setCartState('regular');
                }
              }}
            >
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Your Order</h3>
                <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm ml-2">
                  {getTotalItems()}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Clear Cart Button - only in regular and expanded */}
                {cartState !== 'minimized' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearCart();
                    }}
                    className="p-1.5 hover:bg-red-50 rounded-full transition-colors text-gray-400 hover:text-red-500"
                    title="Clear cart"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                
                {/* Expand/Shrink Button - toggle between regular and expanded */}
                {cartState !== 'minimized' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCartState(cartState === 'expanded' ? 'regular' : 'expanded');
                    }}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    title={cartState === 'expanded' ? 'Shrink cart' : 'Expand cart'}
                  >
                    {cartState === 'expanded' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                )}
                
                {/* Minimize Button - minimize to header only */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (cartState === 'minimized') {
                      setCartState('regular');
                    } else {
                      setCartState('minimized');
                    }
                  }}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                  title={cartState === 'minimized' ? 'Show cart' : 'Minimize cart'}
                >
                  {cartState === 'minimized' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Regular Cart View */}
            {cartState === 'regular' && (
              <div className="p-4">
                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                  {Object.entries(cart).map(([key, entry]) => (
                    <div 
                      key={key} 
                      className="flex items-center justify-between text-sm group cursor-pointer hover:bg-amber-50 rounded-lg p-2 -mx-2 transition-colors"
                      onClick={() => startEditingCartItem(key, entry)}
                    >
                      <div className="flex-1">
                        <span className="text-gray-700">
                          {entry.quantity}x {entry.item.name}
                        </span>
                        <span className="text-gray-500 text-xs block">
                          {entry.item.sizes[entry.sizeIndex].size}
                          {entry.customizationPrice > 0 && ` (+$${entry.customizationPrice.toFixed(2)})`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          ${((entry.item.sizes[entry.sizeIndex].price + (entry.customizationPrice || 0)) * entry.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteFromCart(key, entry.item.id);
                          }}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
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

            {/* Expanded Cart View - Detailed with full customizations */}
            {cartState === 'expanded' && (
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                <div className="space-y-6 mb-6">
                  {Object.entries(cart).map(([key, entry]) => {
                    const customizations = entry.customizations || {};
                    const hasCustomizations = Object.keys(customizations).length > 0 || entry.fruitTea;
                    
                    return (
                      <div 
                        key={key} 
                        className="bg-gray-50 rounded-xl p-4 relative cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => startEditingCartItem(key, entry)}
                      >
                        {/* Delete Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteFromCart(key, entry.item.id);
                          }}
                          className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        
                        <div className="flex gap-4">
                          {/* Drink Image */}
                          <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                            <img 
                              src={entry.item.image} 
                              alt={entry.item.name}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          
                          {/* Drink Details */}
                          <div className="flex-1 pr-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 text-lg">{entry.item.name}</h4>
                                <p className="text-amber-600 font-medium">{entry.item.sizes[entry.sizeIndex].size}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-gray-900">
                                  ${((entry.item.sizes[entry.sizeIndex].price + (entry.customizationPrice || 0)) * entry.quantity).toFixed(2)}
                                </p>
                                <p className="text-gray-500 text-sm">Qty: {entry.quantity}</p>
                              </div>
                            </div>
                            
                            {/* Customizations Display */}
                            {hasCustomizations && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-sm font-medium text-gray-700 mb-2">Customizations:</p>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {/* Milk */}
                                  {customizations.milk && (
                                    <li className="flex items-center">
                                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                      {coffeeCustomizations.milk.find(m => m.id === customizations.milk)?.name}
                                    </li>
                                  )}
                                  
                                  {/* Add-ons */}
                                  {coffeeCustomizations.addOns.map(addon => 
                                    customizations[addon.id] && (
                                      <li key={addon.id} className="flex items-center">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                        {addon.name}
                                      </li>
                                    )
                                  )}
                                  
                                  {/* Syrups */}
                                  {customizations.syrups?.map(syrupId => {
                                    const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
                                    return syrup && (
                                      <li key={syrupId} className="flex items-center">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                        {syrup.name}
                                      </li>
                                    );
                                  })}
                                  
                                  {/* Sauces */}
                                  {customizations.sauces?.map(sauceId => {
                                    const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
                                    return sauce && (
                                      <li key={sauceId} className="flex items-center">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                        {sauce.name}
                                      </li>
                                    );
                                  })}
                                  
                                  {/* Shots */}
                                  {customizations.shots?.map(shotId => {
                                    const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
                                    return shot && (
                                      <li key={shotId} className="flex items-center">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                        {shot.name}
                                      </li>
                                    );
                                  })}
                                  
                                  {/* Toppings */}
                                  {coffeeCustomizations.toppings.map(topping => 
                                    customizations[topping.id] && (
                                      <li key={topping.id} className="flex items-center">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                        {topping.name}
                                      </li>
                                    )
                                  )}
                                  
                                  {/* Fruit Tea Shaker */}
                                  {entry.fruitTea && (
                                    <li className="flex items-center">
                                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                                      Fruit Tea: {fruitTeaShakerFlavors.find(f => f.id === entry.fruitTea)?.name}
                                    </li>
                                  )}
                                </ul>
                                
                                {entry.customizationPrice > 0 && (
                                  <p className="mt-2 text-sm text-amber-600 font-medium">
                                    Customization adds: +${entry.customizationPrice.toFixed(2)}
                                  </p>
                                )}
                              </div>
                            )}
                            
                            {!hasCustomizations && (
                              <p className="mt-2 text-sm text-gray-400 italic">No customizations</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Total and Checkout */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-gray-900">Order Total</span>
                    <span className="text-3xl font-bold text-amber-600">${getTotalPrice()}</span>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-6 text-lg"
                    onClick={() => toast.success('Checkout feature coming soon!')}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
