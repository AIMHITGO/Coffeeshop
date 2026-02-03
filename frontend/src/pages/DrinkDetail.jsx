import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, RotateCcw, ShoppingBag, Coffee } from 'lucide-react';
import { Button } from '../components/ui/button';
import { menuCategories, coffeeCustomizations } from '../data/mock';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

// Mug icons for size selection
const MugIcon = ({ size, isSelected, onClick, sizeLabel, price, calories }) => {
  const sizeClasses = {
    S: 'w-12 h-14',
    M: 'w-14 h-16', 
    L: 'w-16 h-18'
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
        isSelected 
          ? 'bg-amber-100 border-2 border-amber-500 shadow-md' 
          : 'bg-gray-50 border-2 border-transparent hover:bg-amber-50 hover:border-amber-200'
      }`}
      data-testid={`size-${size}`}
    >
      <div className={`${sizeClasses[size]} flex items-end justify-center`}>
        <Coffee 
          className={`${isSelected ? 'text-amber-600' : 'text-gray-400'} transition-colors`}
          style={{ 
            width: size === 'S' ? '32px' : size === 'M' ? '40px' : '48px',
            height: size === 'S' ? '32px' : size === 'M' ? '40px' : '48px'
          }}
        />
      </div>
      <span className={`text-sm font-semibold mt-1 ${isSelected ? 'text-amber-700' : 'text-gray-600'}`}>
        {sizeLabel}
      </span>
      <span className={`text-xs ${isSelected ? 'text-amber-600' : 'text-gray-500'}`}>
        ${price?.toFixed(2)}
      </span>
      <span className={`text-xs ${isSelected ? 'text-amber-600' : 'text-gray-400'}`}>
        {calories} cal
      </span>
    </button>
  );
};

// Quantity control component
const QuantityControl = ({ value, onChange, min = 0, max = 6, label }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center font-semibold text-sm">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const DrinkDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editCartKey = searchParams.get('edit');
  
  const { cart, addToCart, updateCartItem, setEditingCartKey } = useCart();
  
  // Find the drink from all categories
  const drink = useMemo(() => {
    for (const category of menuCategories) {
      const found = category.items.find(item => item.id === slug);
      if (found) {
        return { ...found, categoryId: category.id, hasCustomization: category.hasCustomization };
      }
    }
    return null;
  }, [slug]);

  // State
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [customizations, setCustomizations] = useState({
    milk: '',
    syrups: {},
    sauces: {},
    shots: {},
    addOns: {},
    toppings: {}
  });
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Determine if we're in edit mode
  const isEditMode = !!editCartKey;
  const cartItem = editCartKey ? cart[editCartKey] : null;

  // Load cart item data when editing
  useEffect(() => {
    if (isEditMode && cartItem) {
      // Find size index
      const sizeIdx = drink?.sizes.findIndex(s => s.size === cartItem.size) || 0;
      setSelectedSizeIndex(sizeIdx >= 0 ? sizeIdx : 0);
      
      // Load customizations
      if (cartItem.customizations) {
        setCustomizations(cartItem.customizations);
      }
      
      // Load special instructions
      if (cartItem.specialInstructions) {
        setSpecialInstructions(cartItem.specialInstructions);
      }
      
      // Load quantity
      if (cartItem.quantity) {
        setQuantity(cartItem.quantity);
      }
      
      setEditingCartKey(editCartKey);
    }
    
    return () => {
      setEditingCartKey(null);
    };
  }, [isEditMode, cartItem, drink, editCartKey, setEditingCartKey]);

  // Check if customized (different from defaults)
  const isCustomized = useMemo(() => {
    if (selectedSizeIndex !== 0) return true;
    if (specialInstructions.trim()) return true;
    if (customizations.milk) return true;
    
    // Check if any syrup/sauce/shot/addon has quantity > 0
    for (const key of ['syrups', 'sauces', 'shots', 'addOns', 'toppings']) {
      const group = customizations[key];
      if (group && Object.values(group).some(v => v > 0)) return true;
    }
    
    return false;
  }, [selectedSizeIndex, specialInstructions, customizations]);

  // Reset to defaults
  const resetToDefaults = () => {
    setSelectedSizeIndex(0);
    setCustomizations({
      milk: '',
      syrups: {},
      sauces: {},
      shots: {},
      addOns: {},
      toppings: {}
    });
    setSpecialInstructions('');
    setQuantity(1);
    toast.success('Reset to defaults');
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!drink) return 0;
    
    let total = drink.sizes[selectedSizeIndex]?.price || 0;
    
    // Add milk price
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption) total += milkOption.price;
    }
    
    // Add syrups
    for (const [syrupId, qty] of Object.entries(customizations.syrups || {})) {
      const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
      if (syrup && qty > 0) total += syrup.price * qty;
    }
    
    // Add sauces
    for (const [sauceId, qty] of Object.entries(customizations.sauces || {})) {
      const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
      if (sauce && qty > 0) total += sauce.price * qty;
    }
    
    // Add shots
    for (const [shotId, qty] of Object.entries(customizations.shots || {})) {
      const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
      if (shot && qty > 0) total += shot.price * qty;
    }
    
    // Add add-ons
    for (const [addonId, qty] of Object.entries(customizations.addOns || {})) {
      const addon = coffeeCustomizations.addOns.find(a => a.id === addonId);
      if (addon && qty > 0) total += addon.price * qty;
    }
    
    // Add toppings
    for (const [toppingId, qty] of Object.entries(customizations.toppings || {})) {
      const topping = coffeeCustomizations.toppings.find(t => t.id === toppingId);
      if (topping && qty > 0) total += topping.price * qty;
    }
    
    return total * quantity;
  };

  // Handle add/update order
  const handleAddOrUpdate = () => {
    if (!drink) return;
    
    const orderItem = {
      id: drink.id,
      name: drink.name,
      image: drink.image,
      size: drink.sizes[selectedSizeIndex].size,
      sizeIndex: selectedSizeIndex,
      basePrice: drink.sizes[selectedSizeIndex].price,
      totalPrice: calculateTotalPrice() / quantity,
      quantity,
      customizations,
      specialInstructions,
      categoryId: drink.categoryId
    };
    
    if (isEditMode && editCartKey) {
      updateCartItem(editCartKey, orderItem);
      toast.success('Order updated!');
    } else {
      // Generate unique cart key
      const cartKey = `${drink.categoryId}-${drink.id}-${Date.now()}`;
      addToCart(cartKey, orderItem);
      toast.success('Added to order!');
    }
    
    // Navigate back to menu
    navigate('/menu');
    window.scrollTo(0, 0);
  };

  // Update syrup quantity
  const updateSyrupQty = (syrupId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      syrups: { ...prev.syrups, [syrupId]: qty }
    }));
  };

  // Update sauce quantity
  const updateSauceQty = (sauceId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      sauces: { ...prev.sauces, [sauceId]: qty }
    }));
  };

  // Update shot quantity
  const updateShotQty = (shotId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      shots: { ...prev.shots, [shotId]: qty }
    }));
  };

  // Update addon quantity
  const updateAddonQty = (addonId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      addOns: { ...prev.addOns, [addonId]: qty }
    }));
  };

  // If drink not found
  if (!drink) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Drink not found</h1>
          <Link to="/menu" className="text-amber-600 hover:text-amber-700">
            ← Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const currentSize = drink.sizes[selectedSizeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pb-24">
      {/* Back Button / Breadcrumb */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link 
            to="/menu" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Drink Menu
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Customized Indicator */}
        {isCustomized && (
          <div className="mb-4 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
            <span className="text-amber-700 font-medium text-sm">
              ✨ Customized
            </span>
            <button
              onClick={resetToDefaults}
              className="flex items-center text-amber-600 hover:text-amber-700 text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset to Default
            </button>
          </div>
        )}

        {/* Drink Image */}
        <div className="relative w-full aspect-[16/9] bg-amber-50 rounded-2xl overflow-hidden shadow-lg mb-6">
          <img
            src={drink.image}
            alt={drink.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Drink Name */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{drink.name}</h1>

        {/* Description */}
        <p className="text-gray-600 mb-4">{drink.description}</p>

        {/* Calories & Price */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-lg font-semibold text-amber-600">
            ${currentSize.price.toFixed(2)}
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">{currentSize.calories} cal</span>
        </div>

        {/* Size Selection */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-800 mb-4">Select Size</h2>
          <div className="flex justify-center gap-4">
            {drink.sizes.map((size, idx) => {
              // Determine size label (S/M/L or custom)
              let sizeKey = 'M';
              const sizeLower = size.size.toLowerCase();
              if (sizeLower.includes('small') || sizeLower === 'single' || sizeLower === 's') sizeKey = 'S';
              else if (sizeLower.includes('large') || sizeLower === 'triple' || sizeLower === 'l') sizeKey = 'L';
              else if (sizeLower.includes('medium') || sizeLower === 'double' || sizeLower === 'm') sizeKey = 'M';
              
              return (
                <MugIcon
                  key={idx}
                  size={sizeKey}
                  isSelected={selectedSizeIndex === idx}
                  onClick={() => setSelectedSizeIndex(idx)}
                  sizeLabel={size.size}
                  price={size.price}
                  calories={size.calories}
                />
              );
            })}
          </div>
        </div>

        {/* Customization Options - Only if category allows */}
        {drink.hasCustomization && (
          <div className="space-y-4 mb-6">
            {/* Milk Selection */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Milk Option</h2>
              <select
                value={customizations.milk || ''}
                onChange={(e) => setCustomizations(prev => ({ ...prev, milk: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:outline-none"
              >
                <option value="">Default (2% Milk)</option>
                {coffeeCustomizations.milk.map(milk => (
                  <option key={milk.id} value={milk.id}>
                    {milk.name} {milk.price > 0 ? `(+$${milk.price.toFixed(2)})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Syrups */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Syrups</h2>
              <div className="space-y-1">
                {coffeeCustomizations.syrups.map(syrup => (
                  <QuantityControl
                    key={syrup.id}
                    label={`${syrup.name} (+$${syrup.price.toFixed(2)}/pump)`}
                    value={customizations.syrups?.[syrup.id] || 0}
                    onChange={(qty) => updateSyrupQty(syrup.id, qty)}
                    min={0}
                    max={6}
                  />
                ))}
              </div>
            </div>

            {/* Sauces */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Sauces</h2>
              <div className="space-y-1">
                {coffeeCustomizations.sauces.map(sauce => (
                  <QuantityControl
                    key={sauce.id}
                    label={`${sauce.name} (+$${sauce.price.toFixed(2)}/pump)`}
                    value={customizations.sauces?.[sauce.id] || 0}
                    onChange={(qty) => updateSauceQty(sauce.id, qty)}
                    min={0}
                    max={4}
                  />
                ))}
              </div>
            </div>

            {/* Extra Shots */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Extra Shots</h2>
              <div className="space-y-1">
                {coffeeCustomizations.shots.map(shot => (
                  <QuantityControl
                    key={shot.id}
                    label={`${shot.name} (+$${shot.price.toFixed(2)})`}
                    value={customizations.shots?.[shot.id] || 0}
                    onChange={(qty) => updateShotQty(shot.id, qty)}
                    min={0}
                    max={4}
                  />
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Add-ons</h2>
              <div className="space-y-1">
                {coffeeCustomizations.addOns.map(addon => (
                  <QuantityControl
                    key={addon.id}
                    label={`${addon.name} (+$${addon.price.toFixed(2)})`}
                    value={customizations.addOns?.[addon.id] || 0}
                    onChange={(qty) => updateAddonQty(addon.id, qty)}
                    min={0}
                    max={3}
                  />
                ))}
              </div>
            </div>

            {/* Toppings */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-3">Toppings</h2>
              <div className="space-y-2">
                {coffeeCustomizations.toppings.map(topping => (
                  <label key={topping.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                    <input
                      type="checkbox"
                      checked={customizations.toppings?.[topping.id] > 0}
                      onChange={(e) => setCustomizations(prev => ({
                        ...prev,
                        toppings: { ...prev.toppings, [topping.id]: e.target.checked ? 1 : 0 }
                      }))}
                      className="mr-3 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="flex-1 text-sm text-gray-700">{topping.name}</span>
                    {topping.price > 0 && (
                      <span className="text-xs text-gray-500">+${topping.price.toFixed(2)}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Special Instructions */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Special Instructions</h2>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value.slice(0, 150))}
            placeholder="Any special requests? (e.g., no dairy, less ice)"
            className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:outline-none resize-none"
            rows={3}
            maxLength={150}
          />
          <div className="text-right text-xs text-gray-400 mt-1">
            {specialInstructions.length}/150
          </div>
        </div>

        {/* Quantity */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">Quantity</h2>
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg px-3 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-30"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-8 text-center font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-30"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Total & Add Button - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-sm text-gray-500">Total</span>
              <p className="text-2xl font-bold text-amber-600">${calculateTotalPrice().toFixed(2)}</p>
            </div>
            <Button
              onClick={handleAddOrUpdate}
              className="flex-1 max-w-xs bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-semibold rounded-xl"
              data-testid={isEditMode ? 'update-order-btn' : 'add-to-order-btn'}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {isEditMode ? 'Update Order' : 'Add to Order'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;
