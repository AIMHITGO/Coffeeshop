import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { ShoppingBag, Trash2, X, ChevronDown, ChevronUp, Maximize2, Minimize2, Settings } from 'lucide-react';
import { toast } from 'sonner';

const GlobalCart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    cart, 
    setCart,
    cartState, 
    setCartState, 
    editingCartKey,
    setEditingCartKey,
    removeFromCart, 
    clearCart, 
    getCartItemCount, 
    getTotalPrice 
  } = useCart();
  
  const cartRef = useRef(null);
  const isMenuPage = location.pathname === '/menu' || location.pathname === '/breakfast' || location.pathname === '/dinner';

  // Auto-minimize cart when navigating away from menu
  useEffect(() => {
    if (!isMenuPage && Object.keys(cart).length > 0) {
      setCartState('minimized');
    }
  }, [location.pathname, isMenuPage, cart, setCartState]);

  // Handle click outside cart
  useEffect(() => {
    const handleCartClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (cartState === 'expanded') {
          setCartState('regular');
        }
      }
    };

    if (cartState === 'expanded') {
      document.addEventListener('click', handleCartClickOutside, true);
      return () => {
        document.removeEventListener('click', handleCartClickOutside, true);
      };
    }
  }, [cartState, setCartState]);

  const deleteFromCart = (key, itemId) => {
    removeFromCart(key);
    toast.success('Item removed from cart');
  };

  const handleViewCart = () => {
    if (!isMenuPage) {
      navigate('/menu');
    }
    setCartState('expanded');
  };

  // Start editing a cart item - navigate to correct menu page and trigger edit
  const startEditingCartItem = (cartKey) => {
    setEditingCartKey(cartKey);
    
    // Determine which menu page to navigate to based on menuType
    const entry = cart[cartKey];
    let targetPath = '/menu'; // default to coffee menu
    
    if (entry && entry.menuType) {
      if (entry.menuType === 'breakfast') {
        targetPath = '/breakfast';
      } else if (entry.menuType === 'dinner') {
        targetPath = '/dinner';
      }
    }
    
    // Navigate to appropriate menu page if not already there
    if (location.pathname !== targetPath) {
      navigate(targetPath, { state: { editCartKey: cartKey } });
      toast.info('Opening item for editing...');
    } else {
      // If already on correct menu page, let the component handle it via editingCartKey
      toast.info('Editing item - make your changes and click "Update Order"');
    }
  };

  // Split one item from a cart entry for individual modification
  const splitCartItemForEditing = (cartKey, entry) => {
    if (entry.quantity <= 1) {
      // If only 1 item, just edit it normally
      startEditingCartItem(cartKey);
      return;
    }
    
    // Create a new cart object
    const newCart = { ...cart };
    
    // Decrease the original quantity by 1
    newCart[cartKey] = {
      ...newCart[cartKey],
      quantity: newCart[cartKey].quantity - 1
    };
    
    // Generate unique key with timestamp
    const { item, sizeIndex, customizations, fruitTea, customizationPrice } = entry;
    const baseKey = cartKey.split('-split-')[0]; // Get base key without any split suffix
    const uniqueKey = `${baseKey}-split-${Date.now()}`;
    
    newCart[uniqueKey] = {
      item,
      sizeIndex,
      quantity: 1,
      customizations: { ...customizations }, // Clone customizations
      fruitTea,
      customizationPrice
    };
    
    setCart(newCart);
    
    // Start editing the new single item
    toast.info('Split 1 item for editing');
    setTimeout(() => {
      startEditingCartItem(uniqueKey);
    }, 100);
  };

  // Don't render if cart is empty
  if (Object.keys(cart).length === 0) {
    return null;
  }

  const itemCount = getCartItemCount();
  const totalPrice = getTotalPrice();

  return (
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
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <h3 className="font-bold text-lg">Your Order</h3>
          <span className="bg-white text-amber-600 px-2 py-0.5 rounded-full text-sm font-bold">
            {itemCount}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          {/* Expand/Shrink Button */}
          {cartState !== 'minimized' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCartState(cartState === 'expanded' ? 'regular' : 'expanded');
              }}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              title={cartState === 'expanded' ? 'Shrink cart' : 'Expand cart'}
            >
              {cartState === 'expanded' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          )}
          
          {/* Minimize Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCartState(cartState === 'minimized' ? 'regular' : 'minimized');
            }}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
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
                className="border border-gray-200 rounded-lg p-3 hover:bg-amber-50 transition-colors"
              >
                <div 
                  className="flex items-center justify-between text-sm group cursor-pointer"
                  onClick={() => startEditingCartItem(key)}
                >
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">
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
                
                {/* Modify One button when quantity > 1 */}
                {entry.quantity > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      splitCartItemForEditing(key, entry);
                    }}
                    className="mt-2 w-full text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 py-1.5 rounded transition-colors flex items-center justify-center"
                  >
                    <Settings className="w-3 h-3 mr-1" />
                    Modify One
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-700">Total</span>
              <span className="text-2xl font-bold text-amber-600">${totalPrice}</span>
            </div>
            
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white mb-2"
              onClick={handleViewCart}
            >
              {isMenuPage ? 'View Full Cart' : 'Go to Menu'}
            </Button>
            
            <Button
              variant="outline"
              className="w-full text-gray-600 hover:text-red-600 hover:border-red-300"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}

      {/* Expanded Cart View */}
      {cartState === 'expanded' && (
        <div className="flex flex-col h-full">
          {/* Scrollable Cart Items Section */}
          <div className="flex-1 overflow-y-auto p-4 max-h-[calc(60vh-140px)]">
            <div className="space-y-4">
              {Object.entries(cart).map(([key, entry]) => {
              const customizations = entry.customizations || {};
              const hasCustomizations = Object.keys(customizations).length > 0 || entry.fruitTea;
              
              return (
                <div 
                  key={key} 
                  className="bg-gray-50 rounded-xl p-4 relative cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => startEditingCartItem(key)}
                >
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
                    {/* Only show image for coffee/drink items, not food items */}
                    {!entry.menuType || entry.menuType === 'coffee' ? (
                      <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                        <img 
                          src={entry.item.image} 
                          alt={entry.item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    ) : null}
                    
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
                      
                      {hasCustomizations && (
                        <div className="mt-2 text-sm text-gray-600">
                          <p className="font-medium">Customizations</p>
                          {entry.customizationPrice > 0 && (
                            <p className="text-amber-600">+${entry.customizationPrice.toFixed(2)}</p>
                          )}
                        </div>
                      )}
                      
                      {!hasCustomizations && (
                        <p className="mt-2 text-sm text-gray-400 italic">No customizations</p>
                      )}
                      
                      {/* Modify One button when quantity > 1 */}
                      {entry.quantity > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            splitCartItemForEditing(key, entry);
                          }}
                          className="mt-3 w-full bg-amber-100 hover:bg-amber-200 text-amber-700 py-2 rounded-lg transition-colors flex items-center justify-center font-medium text-sm"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Modify One Item
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          
          {/* Sticky Footer with Order Total and Checkout */}
          <div className="sticky bottom-0 bg-white border-t pt-4 px-4 pb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-gray-900">Order Total</span>
              <span className="text-3xl font-bold text-amber-600">${totalPrice}</span>
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
  );
};

export default GlobalCart;
