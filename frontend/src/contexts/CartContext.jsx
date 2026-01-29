import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [cartState, setCartState] = useState('regular'); // 'minimized' | 'regular' | 'expanded'
  const [editingCartKey, setEditingCartKey] = useState(null);
  const [onItemRemovedCallbacks, setOnItemRemovedCallbacks] = useState([]);

  // Register a callback to be called when an item is removed
  const registerOnItemRemoved = (callback) => {
    setOnItemRemovedCallbacks(prev => [...prev, callback]);
    // Return unregister function
    return () => {
      setOnItemRemovedCallbacks(prev => prev.filter(cb => cb !== callback));
    };
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('happyPlaceCart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCart(parsed);
      } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      localStorage.setItem('happyPlaceCart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('happyPlaceCart');
    }
  }, [cart]);

  const addToCart = (key, entry) => {
    setCart(prev => ({
      ...prev,
      [key]: entry
    }));
  };

  const updateCartItem = (key, entry) => {
    setCart(prev => ({
      ...prev,
      [key]: entry
    }));
  };

  const removeFromCart = (key, itemId = null) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[key];
      return newCart;
    });
    // Call all registered callbacks with the itemId
    if (itemId) {
      onItemRemovedCallbacks.forEach(callback => callback(itemId));
    }
  };

  const clearCart = () => {
    setCart({});
    setEditingCartKey(null);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, entry) => total + entry.quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.values(cart)
      .reduce((total, entry) => {
        return total + ((entry.item.sizes[entry.sizeIndex].price + (entry.customizationPrice || 0)) * entry.quantity);
      }, 0)
      .toFixed(2);
  };

  const value = {
    cart,
    setCart,
    cartState,
    setCartState,
    editingCartKey,
    setEditingCartKey,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartItemCount,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
