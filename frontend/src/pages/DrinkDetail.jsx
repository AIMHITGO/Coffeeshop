import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronUp, Plus, Minus, RotateCcw, ShoppingBag, Coffee } from 'lucide-react';
import { Button } from '../components/ui/button';
import { menuCategories, coffeeCustomizations } from '../data/mock';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

// Mug icon component for size selection - uniform buttons with varying mug sizes
const MugIcon = ({ size, isSelected, onClick, sizeLabel, price, calories }) => {
  const mugSizes = {
    S: 'w-5 h-5',
    M: 'w-6 h-6', 
    L: 'w-7 h-7'
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl transition-all duration-200 ${
        isSelected 
          ? 'bg-amber-500 text-white shadow-lg scale-105' 
          : 'bg-gray-100 text-gray-600 hover:bg-amber-100'
      }`}
      data-testid={`size-${size}`}
    >
      <Coffee className={`${mugSizes[size]} mb-1`} />
      <span className="text-xs font-bold uppercase tracking-wide">{sizeLabel}</span>
      <span className="text-xs font-semibold mt-0.5">${price?.toFixed(2)}</span>
      <span className="text-[10px] opacity-80">{calories} cal</span>
    </button>
  );
};

// Expandable customization section component (Starbucks-style)
const CustomizationSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/50 p-4">
          {children}
        </div>
      )}
    </div>
  );
};

// Quantity control component (Starbucks-style inline)
const QuantityControl = ({ value, onChange, min = 0, max = 6, label, price }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex-1">
        <span className="text-sm text-gray-800">{label}</span>
        {price > 0 && (
          <span className="text-xs text-gray-500 ml-2">+${price.toFixed(2)} each</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            value <= min 
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
              : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
          }`}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center font-bold text-gray-800">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            value >= max 
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
              : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
          }`}
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
      const sizeIdx = drink?.sizes.findIndex(s => s.size === cartItem.size) || 0;
      setSelectedSizeIndex(sizeIdx >= 0 ? sizeIdx : 0);
      
      if (cartItem.customizations) {
        setCustomizations(cartItem.customizations);
      }
      
      if (cartItem.specialInstructions) {
        setSpecialInstructions(cartItem.specialInstructions);
      }
      
      if (cartItem.quantity) {
        setQuantity(cartItem.quantity);
      }
      
      setEditingCartKey(editCartKey);
    }
    
    return () => {
      setEditingCartKey(null);
    };
  }, [isEditMode, cartItem, drink, editCartKey, setEditingCartKey]);

  // Check if customized
  const isCustomized = useMemo(() => {
    if (selectedSizeIndex !== 0) return true;
    if (specialInstructions.trim()) return true;
    if (customizations.milk) return true;
    
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
    
    if (customizations.milk) {
      const milkOption = coffeeCustomizations.milk.find(m => m.id === customizations.milk);
      if (milkOption) total += milkOption.price;
    }
    
    for (const [syrupId, qty] of Object.entries(customizations.syrups || {})) {
      const syrup = coffeeCustomizations.syrups.find(s => s.id === syrupId);
      if (syrup && qty > 0) total += syrup.price * qty;
    }
    
    for (const [sauceId, qty] of Object.entries(customizations.sauces || {})) {
      const sauce = coffeeCustomizations.sauces.find(s => s.id === sauceId);
      if (sauce && qty > 0) total += sauce.price * qty;
    }
    
    for (const [shotId, qty] of Object.entries(customizations.shots || {})) {
      const shot = coffeeCustomizations.shots.find(s => s.id === shotId);
      if (shot && qty > 0) total += shot.price * qty;
    }
    
    for (const [addonId, qty] of Object.entries(customizations.addOns || {})) {
      const addon = coffeeCustomizations.addOns.find(a => a.id === addonId);
      if (addon && qty > 0) total += addon.price * qty;
    }
    
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
      const cartKey = `${drink.categoryId}-${drink.id}-${Date.now()}`;
      addToCart(cartKey, orderItem);
      toast.success('Added to order!');
    }
    
    navigate('/menu');
    window.scrollTo(0, 0);
  };

  // Update functions
  const updateSyrupQty = (syrupId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      syrups: { ...prev.syrups, [syrupId]: qty }
    }));
  };

  const updateSauceQty = (sauceId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      sauces: { ...prev.sauces, [sauceId]: qty }
    }));
  };

  const updateShotQty = (shotId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      shots: { ...prev.shots, [shotId]: qty }
    }));
  };

  const updateAddonQty = (addonId, qty) => {
    setCustomizations(prev => ({
      ...prev,
      addOns: { ...prev.addOns, [addonId]: qty }
    }));
  };

  // If drink not found
  if (!drink) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 pb-28">
      {/* Back Button */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <Link 
          to="/menu" 
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Menu
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Top Section: Image + Info */}
        <div className="flex gap-4 mb-6">
          {/* Smaller Drink Image */}
          <div className="w-32 h-32 flex-shrink-0 bg-amber-50 rounded-2xl overflow-hidden shadow-md">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Drink Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{drink.name}</h1>
            <p className="text-gray-600 text-sm mb-2">{drink.description}</p>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-amber-600">
                ${currentSize.price.toFixed(2)}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 text-sm">{currentSize.calories} cal</span>
            </div>
          </div>
        </div>

        {/* Customized Indicator */}
        {isCustomized && (
          <div className="mb-4 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            <span className="text-amber-700 font-medium text-sm">✨ Customized</span>
            <button
              onClick={resetToDefaults}
              className="flex items-center text-amber-600 hover:text-amber-700 text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </button>
          </div>
        )}

        {/* Size Selection - Uniform buttons */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
          <h2 className="font-semibold text-gray-800 mb-4 text-center">Select Size</h2>
          <div className="flex justify-center gap-3">
            {drink.sizes.map((size, idx) => {
              let sizeKey = 'M';
              const sizeLower = size.size.toLowerCase();
              if (sizeLower.includes('small') || sizeLower === 'single' || sizeLower === 's') sizeKey = 'S';
              else if (sizeLower.includes('large') || sizeLower === 'triple' || sizeLower === 'l') sizeKey = 'L';
              
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

        {/* Customization Options - Starbucks-style accordions */}
        {drink.hasCustomization && (
          <div className="space-y-3 mb-4">
            {/* Milk */}
            <CustomizationSection title="Milk" defaultOpen={true}>
              <div className="space-y-2">
                {[{ id: '', name: '2% Milk (Default)', price: 0 }, ...coffeeCustomizations.milk].map(milk => (
                  <label 
                    key={milk.id || 'default'} 
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      customizations.milk === milk.id 
                        ? 'bg-amber-100 border-2 border-amber-400' 
                        : 'bg-white border border-gray-200 hover:border-amber-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="milk"
                        checked={customizations.milk === milk.id}
                        onChange={() => setCustomizations(prev => ({ ...prev, milk: milk.id }))}
                        className="sr-only"
                      />
                      <span className="text-sm text-gray-800">{milk.name}</span>
                    </div>
                    {milk.price > 0 && (
                      <span className="text-xs text-gray-500">+${milk.price.toFixed(2)}</span>
                    )}
                  </label>
                ))}
              </div>
            </CustomizationSection>

            {/* Flavors/Syrups */}
            <CustomizationSection title="Flavors">
              {coffeeCustomizations.syrups.map(syrup => (
                <QuantityControl
                  key={syrup.id}
                  label={syrup.name}
                  price={syrup.price}
                  value={customizations.syrups?.[syrup.id] || 0}
                  onChange={(qty) => updateSyrupQty(syrup.id, qty)}
                  min={0}
                  max={6}
                />
              ))}
            </CustomizationSection>

            {/* Sauces */}
            <CustomizationSection title="Sauces">
              {coffeeCustomizations.sauces.map(sauce => (
                <QuantityControl
                  key={sauce.id}
                  label={sauce.name}
                  price={sauce.price}
                  value={customizations.sauces?.[sauce.id] || 0}
                  onChange={(qty) => updateSauceQty(sauce.id, qty)}
                  min={0}
                  max={4}
                />
              ))}
            </CustomizationSection>

            {/* Espresso Shots */}
            <CustomizationSection title="Espresso">
              {coffeeCustomizations.shots.map(shot => (
                <QuantityControl
                  key={shot.id}
                  label={shot.name}
                  price={shot.price}
                  value={customizations.shots?.[shot.id] || 0}
                  onChange={(qty) => updateShotQty(shot.id, qty)}
                  min={0}
                  max={4}
                />
              ))}
            </CustomizationSection>

            {/* Add-ins */}
            <CustomizationSection title="Add-ins">
              {coffeeCustomizations.addOns.map(addon => (
                <QuantityControl
                  key={addon.id}
                  label={addon.name}
                  price={addon.price}
                  value={customizations.addOns?.[addon.id] || 0}
                  onChange={(qty) => updateAddonQty(addon.id, qty)}
                  min={0}
                  max={3}
                />
              ))}
            </CustomizationSection>

            {/* Toppings */}
            <CustomizationSection title="Toppings">
              <div className="space-y-2">
                {coffeeCustomizations.toppings.map(topping => (
                  <label 
                    key={topping.id}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      customizations.toppings?.[topping.id] > 0
                        ? 'bg-amber-100 border-2 border-amber-400' 
                        : 'bg-white border border-gray-200 hover:border-amber-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={customizations.toppings?.[topping.id] > 0}
                        onChange={(e) => setCustomizations(prev => ({
                          ...prev,
                          toppings: { ...prev.toppings, [topping.id]: e.target.checked ? 1 : 0 }
                        }))}
                        className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-800">{topping.name}</span>
                    </div>
                    {topping.price > 0 && (
                      <span className="text-xs text-gray-500">+${topping.price.toFixed(2)}</span>
                    )}
                  </label>
                ))}
              </div>
            </CustomizationSection>
          </div>
        )}

        {/* Special Instructions */}
        <CustomizationSection title="Special Instructions" defaultOpen={false}>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value.slice(0, 150))}
            placeholder="Any special requests?"
            className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:outline-none resize-none bg-white"
            rows={2}
            maxLength={150}
          />
          <div className="text-right text-xs text-gray-400 mt-1">
            {specialInstructions.length}/150
          </div>
        </CustomizationSection>

        {/* Quantity */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">Quantity</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  quantity <= 1 
                    ? 'bg-gray-100 text-gray-300' 
                    : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                }`}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-8 text-center font-bold text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  quantity >= 10 
                    ? 'bg-gray-100 text-gray-300' 
                    : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                }`}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 block">Total</span>
            <span className="text-2xl font-bold text-amber-600">${calculateTotalPrice().toFixed(2)}</span>
          </div>
          <Button
            onClick={handleAddOrUpdate}
            className="flex-1 max-w-[200px] bg-amber-600 hover:bg-amber-700 text-white py-6 text-base font-semibold rounded-xl"
            data-testid={isEditMode ? 'update-order-btn' : 'add-to-order-btn'}
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            {isEditMode ? 'Update Order' : 'Add to Order'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;
