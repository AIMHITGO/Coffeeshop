import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ShoppingBag, Plus, Minus, Star, Trash2, ChevronDown, ChevronUp, Settings, RotateCcw, Maximize2, Minimize2, X, ChefHat, Utensils, Coffee } from 'lucide-react';
import { menuCategories, bestSellers, nutritionalDisclaimer, coffeeCustomizations, fruitTeaShakerFlavors, coffeeHeroImage } from '../data/mock';
import { toast } from 'sonner';
import { useCart } from '../contexts/CartContext';

const Menu = () => {
  const navigate = useNavigate();
  const { cart, setCart, editingCartKey, setEditingCartKey } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedMainCategory, setSelectedMainCategory] = useState('coffee');
  const [activeDrinkSection, setActiveDrinkSection] = useState('best-sellers');

  const [expandedCardKey, setExpandedCardKey] = useState(null);
  const [itemCustomizations, setItemCustomizations] = useState({});
  const [selectedFruitTea, setSelectedFruitTea] = useState({});
  const [specialInstructions, setSpecialInstructions] = useState({});
  const [blockNextClick, setBlockNextClick] = useState(false);
  const [itemQuantities, setItemQuantities] = useState({}); // Track quantity for each item being built
  const drinkSectionRefs = useRef({});
  const expandedCardRef = useRef(null);

  // Handle cart item editing when navigating to menu
  useEffect(() => {
    if (editingCartKey && cart[editingCartKey]) {
      const entry = cart[editingCartKey];
      const { item, sizeIndex, customizations, fruitTea, specialInstructions: savedInstructions } = entry;
      
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
      
      // Load special instructions if present
      if (savedInstructions) {
        setSpecialInstructions(prev => ({
          ...prev,
          [item.id]: savedInstructions
        }));
      }
      
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
      
      // Switch to coffee menu if needed
      if (selectedMainCategory !== 'coffee') {
        setSelectedMainCategory('coffee');
      }
      
      // Expand the corresponding card
      const cardKey = getCardKey(categoryId, item.id);
      
      setTimeout(() => {
        setExpandedCardKey(cardKey);
        
        // Scroll to the item
        const element = document.getElementById(`item-${item.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }, [editingCartKey]); // Only run when editingCartKey changes

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
    setSpecialInstructions(prev => {
      const newInstructions = { ...prev };
      delete newInstructions[itemId];
      return newInstructions;
    });
    setItemQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
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
    const instructions = specialInstructions[item.id]?.trim() || '';
    const key = getCartItemKey(item.id, sizeIndex, customizations, fruitTea);
    const sizeInfo = item.sizes[sizeIndex];
    const customizationPrice = calculateCustomizationPrice(item.id);
    const quantityToAdd = itemQuantities[item.id] || 1;
    
    setCart(prev => ({
      ...prev,
      [key]: {
        item,
        sizeIndex,
        quantity: (prev[key]?.quantity || 0) + quantityToAdd,
        customizations,
        fruitTea,
        specialInstructions: instructions,
        customizationPrice
      }
    }));
    toast.success(`${quantityToAdd}x ${item.name} (${sizeInfo.size}) added to cart!`);
    
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

  // Cancel editing a cart item
  const cancelEditingCartItem = (itemId) => {
    // Clear customizations
    clearItemCustomizations(itemId);
    
    // Clear editing state
    setEditingCartKey(null);
    
    // Collapse the card
    setExpandedCardKey(null);
    
    toast.info('Changes cancelled');
  };

  const getCartQuantity = (itemId, sizeIndex) => {
    const key = getCartItemKey(itemId, sizeIndex);
    return cart[key]?.quantity || 0;
  };

  // Get or set item quantity for building
  const getItemQuantity = (itemId) => {
    return itemQuantities[itemId] || 1;
  };

  const setItemQuantity = (itemId, quantity) => {
    if (quantity < 1) quantity = 1;
    setItemQuantities(prev => ({
      ...prev,
      [itemId]: quantity
    }));
  };

  const incrementItemQuantity = (itemId) => {
    const current = getItemQuantity(itemId);
    setItemQuantity(itemId, current + 1);
  };

  const decrementItemQuantity = (itemId) => {
    const current = getItemQuantity(itemId);
    if (current > 1) {
      setItemQuantity(itemId, current - 1);
    }
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
  // Now renders for ALL cards - shows full options if categoryHasCustomization, otherwise just Special Instructions
  const renderCustomizationSection = (item, categoryHasCustomization, cardKey) => {
    const isExpanded = expandedCardKey === cardKey;
    const currentCustomizations = itemCustomizations[item.id] || {};
    const itemHasCustomizations = hasCustomizations(item.id);
    const hasSpecialInstructions = specialInstructions[item.id]?.trim();

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
            {(itemHasCustomizations || hasSpecialInstructions) && !isExpanded && (
              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Modified</span>
            )}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <>
            {/* Full customization options - only for categories that support it */}
            {categoryHasCustomization && (
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

            {/* Special Instructions - Fixed at bottom of expanded section, shows for ALL cards */}
            <div className={`${categoryHasCustomization ? 'mt-3' : 'mt-4'} relative`}>
              <textarea
                value={specialInstructions[item.id] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 150) {
                    setSpecialInstructions(prev => ({
                      ...prev,
                      [item.id]: value
                    }));
                  }
                }}
                onClick={(e) => e.stopPropagation()}
                placeholder="Any special requests? (e.g., no dairy, less ice)"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none resize-none text-sm"
                rows="2"
                maxLength={150}
              />
              {/* Character counter - only shows when >= 130 chars */}
              {(specialInstructions[item.id] || '').length >= 130 && (
                <div 
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded text-white text-[11px] font-semibold pointer-events-none shadow-sm ${
                    (specialInstructions[item.id] || '').length === 150 
                      ? 'bg-red-600/95' 
                      : 'bg-amber-500/95'
                  }`}
                >
                  {(specialInstructions[item.id] || '').length}/150
                </div>
              )}
            </div>
          </>
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
    
    // Check if THIS specific card is being edited (not just any card)
    const isEditingThisCard = editingCartKey && isExpanded;

    return (
      <div
        id={`item-${item.id}`}
        key={cardKey}
        className="relative max-w-[280px] mx-auto"
        style={{ zIndex: isExpanded ? 50 : 0 }}
      >
        <Card
          ref={isExpanded ? expandedCardRef : null}
          className={`group transition-all duration-300 border-0 bg-white flex flex-col hover:shadow-xl overflow-hidden ${
            isExpanded 
              ? 'shadow-2xl ring-2 ring-amber-400' 
              : 'h-full'
          }`}
        >
          <div className="relative h-40 overflow-hidden flex-shrink-0 bg-amber-50">
            {item.isBestSeller && (
              <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center z-10">
                <Star className="w-3 h-3 mr-1" fill="white" />
                Best Seller
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            {/* Calorie Counter - Overlaid on image */}
            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md">
              {totalCalories} cal
            </div>
          </div>

          <CardContent className="p-4 flex flex-col flex-grow">
            <div className="mb-2 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{item.name}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mt-1 line-clamp-2 min-h-[32px]">{item.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-2 flex-shrink-0">
              <div className="flex flex-wrap gap-2">
                {item.sizes.map((sizeOption, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!blockNextClick) setSelectedSize(item.id, idx);
                    }}
                    className={`px-1.5 py-1 rounded-lg text-sm font-medium transition-all flex-1 min-w-[58px] ${
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

            {/* Fruit Tea Shaker Option */}
            {renderFruitTeaShakerOption(item)}

            {/* Customization Section - pass unique cardKey */}
            {renderCustomizationSection(item, categoryHasCustomization, cardKey)}

            {!isExpanded && <div className="flex-grow"></div>}

            {showPrice && customizationPrice > 0 && (
              <div className="sticky bottom-[60px] mt-2 flex justify-between items-center text-xs bg-gradient-to-b from-white/95 to-white py-3 px-4 -mx-4 border-t-2 border-amber-500 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10">
                <span className="text-gray-700 font-semibold">Total:</span>
                <span className="font-bold text-amber-600 text-base">${totalPrice.toFixed(2)}</span>
              </div>
            )}

            {/* Quantity Selector (only when not editing) - Compact Style */}
            {!isEditingThisCard && (
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decrementItemQuantity(item.id);
                    }}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-6 text-center font-semibold text-sm">{getItemQuantity(item.id)}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      incrementItemQuantity(item.id);
                    }}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart / Update Order / Cancel */}
            <div className="mt-3 flex-shrink-0 space-y-2">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isEditingThisCard) {
                    updateCartItem(item, currentSizeIndex, cardKey);
                  } else {
                    addToCart(item, currentSizeIndex, cardKey);
                  }
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {isEditingThisCard ? 'Update Order' : 'Add to Order'}
              </Button>
              
              {/* Cancel Button (only when editing THIS card) */}
              {isEditingThisCard && (
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 text-sm py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    cancelEditingCartItem(item.id);
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancel Changes
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Placeholder to maintain grid cell height when card is absolute positioned */}
        {isExpanded && <div className="h-[340px]"></div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Banner for Coffee Menu */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${coffeeHeroImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Coffee className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Coffee & Drinks</h1>
            <p className="text-xl sm:text-2xl">Discover Our Unique Latin-American & New-American Cuisine</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* COFFEE MENU - No tabs, direct display */}
        <Tabs value={selectedMainCategory} onValueChange={(val) => { if (!blockNextClick) setSelectedMainCategory(val); }}>
          <TabsContent value="coffee">
            <div className="flex gap-8">
              {/* Side Navigation */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24 space-y-4">
                  {/* Drink Categories */}
                  <div className="bg-white rounded-lg shadow-lg p-4">
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
                      
                      {/* Divider */}
                      <div className="border-t border-gray-200 my-3"></div>
                      
                      {/* Food Menu Links */}
                      <button
                        onClick={() => navigate('/breakfast')}
                        className="w-full text-left px-4 py-2 rounded-lg transition-colors text-sm flex items-center text-gray-700 hover:bg-amber-50"
                      >
                        <ChefHat className="w-4 h-4 mr-2 text-amber-500" />
                        Breakfast Menu
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

              {/* Scrollable Drinks List */}
              <div className="flex-1">
                {/* Quick Navigation to Other Menus - Mobile Only */}
                <div className="lg:hidden mb-8 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => navigate('/breakfast')}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-amber-50 transition-colors text-left"
                    >
                      <ChefHat className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="font-medium text-gray-700">Breakfast Menu</span>
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-5xl">
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
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
