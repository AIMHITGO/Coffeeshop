import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../contexts/CartContext';
import { Plus, Minus, Check, X, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const FoodMenuItem = ({ item, customizations, menuType }) => {
  const [quantity, setQuantity] = useState(1);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [selectedCustomizations, setSelectedCustomizations] = useState({});
  const { addToCart, editingCartKey, setEditingCartKey, updateCartItem, cart } = useCart();
  const itemRef = useRef(null);
  
  const isEditing = editingCartKey && editingCartKey.startsWith(item.id);

  useEffect(() => {
    if (isEditing && itemRef.current) {
      const existingItem = Object.values(cart).find(cartItem => {
        const key = Object.keys(cart).find(k => k.startsWith(item.id));
        return key === editingCartKey;
      });
      
      if (existingItem) {
        setQuantity(existingItem.quantity);
        setSelectedCustomizations(existingItem.customizations || {});
        setIsCustomizing(true);
      }
    }
  }, [isEditing, editingCartKey, cart, item.id]);

  // Close customization panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target) && isCustomizing && !isEditing) {
        setIsCustomizing(false);
        setSelectedCustomizations({});
        setQuantity(1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCustomizing, isEditing]);

  const handleCustomizationChange = (type, value, price = 0) => {
    setSelectedCustomizations(prev => ({
      ...prev,
      [type]: { value, price }
    }));
  };

  const calculateTotalPrice = () => {
    let total = item.price;
    Object.values(selectedCustomizations).forEach(custom => {
      if (Array.isArray(custom)) {
        // Multi-select customizations
        custom.forEach(c => {
          total += c.price || 0;
        });
      } else {
        // Single-select customizations
        total += custom.price || 0;
      }
    });
    return total;
  };

  const handleAddToCart = () => {
    if (isEditing) {
      // For editing existing cart items
      const entry = {
        item: {
          ...item,
          sizes: [{ size: 'Standard', price: item.price, calories: 0 }]
        },
        sizeIndex: 0,
        quantity,
        customizations: selectedCustomizations,
        customizationPrice: Object.values(selectedCustomizations).reduce((sum, custom) => {
          if (Array.isArray(custom)) {
            return sum + custom.reduce((s, c) => s + (c.price || 0), 0);
          }
          return sum + (custom.price || 0);
        }, 0),
        menuType
      };
      updateCartItem(editingCartKey, entry);
      
      // Cancel editing mode and reset state
      setEditingCartKey(null);
      setIsCustomizing(false);
      setQuantity(1);
      setSelectedCustomizations({});
      
      toast.success('Item updated in cart!');
    } else {
      // Generate unique cart key
      const customizationString = Object.entries(selectedCustomizations)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${key}:${value.map(v => v.value).join(',')}`;
          }
          return `${key}:${value.value}`;
        })
        .join('|');
      const cartKey = `${item.id}-${Date.now()}-${customizationString}`;
      
      // Create cart entry matching the CartContext format
      const entry = {
        item: {
          ...item,
          sizes: [{ size: 'Standard', price: item.price, calories: 0 }]
        },
        sizeIndex: 0,
        quantity,
        customizations: selectedCustomizations,
        customizationPrice: Object.values(selectedCustomizations).reduce((sum, custom) => {
          if (Array.isArray(custom)) {
            return sum + custom.reduce((s, c) => s + (c.price || 0), 0);
          }
          return sum + (custom.price || 0);
        }, 0),
        menuType
      };
      
      addToCart(cartKey, entry);
      toast.success(`${item.name} added to cart!`);
      setIsCustomizing(false);
      setQuantity(1);
      setSelectedCustomizations({});
    }
  };

  const handleCancelEdit = () => {
    setEditingCartKey(null);
    setIsCustomizing(false);
    setQuantity(1);
    setSelectedCustomizations({});
  };

  const renderCustomizationSection = (type, options, label) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{label}</h4>
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => {
            const isSelected = selectedCustomizations[type]?.value === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleCustomizationChange(type, option.id, option.price)}
                className={`px-3 py-2 rounded-lg text-sm border-2 transition-all ${
                  isSelected
                    ? 'border-amber-600 bg-amber-50 text-amber-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.name}</span>
                  {option.price > 0 && (
                    <span className="text-xs text-gray-500">+${option.price.toFixed(2)}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMultiSelectCustomization = (type, options, label) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{label}</h4>
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => {
            const currentSelections = selectedCustomizations[type] || [];
            const isSelected = Array.isArray(currentSelections) 
              ? currentSelections.some(item => item.value === option.id)
              : false;
            
            return (
              <button
                key={option.id}
                onClick={() => {
                  let newSelections;
                  if (isSelected) {
                    newSelections = currentSelections.filter(item => item.value !== option.id);
                  } else {
                    newSelections = [...currentSelections, { value: option.id, name: option.name, price: option.price }];
                  }
                  setSelectedCustomizations(prev => ({
                    ...prev,
                    [type]: newSelections
                  }));
                }}
                className={`px-3 py-2 rounded-lg text-sm border-2 transition-all ${
                  isSelected
                    ? 'border-amber-600 bg-amber-50 text-amber-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.name}</span>
                  {option.price > 0 && (
                    <span className="text-xs text-gray-500">+${option.price.toFixed(2)}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={itemRef}
      id={`${menuType}-${item.id}`}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-2 ${
        isEditing ? 'border-amber-500 ring-4 ring-amber-100' : 'border-transparent'
      }`}
    >
      {/* Main Item Row */}
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
          {item.description && (
            <p className="text-sm text-gray-600">{item.description}</p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>

          {/* Quantity Controls - Always Visible */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Customize or Add Button */}
          {!isCustomizing && item.hasCustomization && (
            <Button
              size="sm"
              onClick={() => setIsCustomizing(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2"
            >
              <Settings className="h-4 w-4 mr-2" />
              Customize
            </Button>
          )}

          {!isCustomizing && !item.hasCustomization && (
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2"
            >
              Add to Order
            </Button>
          )}
        </div>
      </div>

      {/* Customization Panel */}
      {isCustomizing && item.hasCustomization && (
        <div className="border-t-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="h-5 w-5 text-amber-600" />
              Customize Your Order
            </h3>
            <p className="text-sm text-gray-600 mt-1">Select your preferred options below</p>
          </div>

          {item.customizationTypes?.includes('bread') && renderCustomizationSection('bread', customizations.bread, 'Choose Your Bread')}
          {item.customizationTypes?.includes('cheese') && renderCustomizationSection('cheese', customizations.cheese, 'Choose Your Cheese')}
          {item.customizationTypes?.includes('extras') && renderMultiSelectCustomization('extras', customizations.extras?.sandwich, 'Add Extras')}
          {item.customizationTypes?.includes('baleadas-proteins') && renderCustomizationSection('baleadas-proteins', customizations.proteins?.baleadas || customizations.baleadasProteins, 'Add Protein')}
          {item.customizationTypes?.includes('build-your-own') && (
            <>
              {renderMultiSelectCustomization('veggies', customizations.buildYourOwn?.veggies, 'Choose Vegetables (Select Multiple)')}
              {renderMultiSelectCustomization('byo-cheese', customizations.buildYourOwn?.cheese, 'Choose Cheese (Select Multiple)')}
              {renderMultiSelectCustomization('meats', customizations.buildYourOwn?.meats, 'Choose Meats (Select Multiple)')}
              {renderMultiSelectCustomization('premiumMeats', customizations.buildYourOwn?.premiumMeats, 'Premium Meats (Upcharge)')}
            </>
          )}
          {item.customizationTypes?.includes('sandwich-bread') && renderCustomizationSection('sandwich-bread', customizations.sandwichBread, 'Choose Your Bread')}
          {item.customizationTypes?.includes('salad-protein') && renderCustomizationSection('salad-protein', customizations.saladProtein, 'Add Protein')}
          {item.customizationTypes?.includes('salad-dressing') && renderCustomizationSection('salad-dressing', customizations.saladDressing, 'Choose Dressing')}

          {/* Price Summary */}
          {Object.keys(selectedCustomizations).length > 0 && (
            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-amber-300">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Price:</span>
                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                </div>
                {Object.values(selectedCustomizations).some(custom => 
                  (Array.isArray(custom) && custom.some(c => c.price > 0)) || 
                  (!Array.isArray(custom) && custom.price > 0)
                ) && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Customizations:</span>
                    <span className="font-semibold text-amber-600">
                      +${(calculateTotalPrice() - item.price).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="font-bold">Total per Item:</span>
                  <span className="font-bold text-amber-600">${calculateTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-6 pt-6 border-t-2 border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isEditing && (
                <Button
                  variant="outline"
                  onClick={handleCancelEdit}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel Changes
                </Button>
              )}
              <Button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
              >
                <Check className="h-4 w-4 mr-2" />
                {isEditing ? 'Update Order' : 'Add to Order'} - ${(calculateTotalPrice() * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenuItem;