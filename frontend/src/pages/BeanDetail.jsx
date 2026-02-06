import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { coffeeBeans, beanImage } from '../data/mock';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const BeanDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setCartState } = useCart();

  const bean = coffeeBeans.find(b => b.id === slug);
  const [grind, setGrind] = useState('whole-beans');
  const [quantity, setQuantity] = useState(1);

  if (!bean) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bean not found</h2>
          <Link to="/about" className="text-amber-600 hover:text-amber-700 font-medium">
            Back to About
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartKey = `bean-${bean.id}-${grind}-${Date.now()}`;
    addToCart(cartKey, {
      id: bean.id,
      name: bean.name,
      slug: bean.id,
      size: grind === 'whole-beans' ? 'Whole Beans' : 'Ground',
      basePrice: bean.price,
      totalPrice: bean.price,
      image: beanImage,
      quantity,
      customizations: { grind },
      specialInstructions: '',
      hasCustomization: false,
      menuType: 'beans'
    });
    setCartState('regular');
    toast.success(`${bean.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          to="/about#coffee-origins"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-6"
          data-testid="back-to-about-link"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Our Coffee Origins
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Bean Image */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex items-center justify-center">
            <img
              src={beanImage}
              alt={bean.name}
              className="w-64 h-64 object-contain"
              data-testid="bean-product-image"
            />
          </div>

          {/* Bean Info */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900" data-testid="bean-name">{bean.name}</h1>
              <p className="text-amber-600 font-medium mt-1 italic">{bean.notes}</p>
              <p className="text-2xl font-bold text-gray-900 mt-3" data-testid="bean-price">${bean.price.toFixed(2)}</p>
              <p className="text-xs text-gray-500">12 oz bag</p>
            </div>

            <p className="text-gray-700 leading-relaxed" data-testid="bean-description">{bean.description}</p>

            {/* Grind Selector */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Grind</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setGrind('whole-beans')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all border-2 ${
                    grind === 'whole-beans'
                      ? 'bg-amber-500 text-white border-amber-500 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                  }`}
                  data-testid="grind-whole-beans"
                >
                  Whole Beans
                </button>
                <button
                  onClick={() => setGrind('ground')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all border-2 ${
                    grind === 'ground'
                      ? 'bg-amber-500 text-white border-amber-500 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300'
                  }`}
                  data-testid="grind-ground"
                >
                  Ground
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors"
                  data-testid="bean-qty-minus"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-bold w-8 text-center" data-testid="bean-qty-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors"
                  data-testid="bean-qty-plus"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-amber-100 p-4 z-50">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{quantity} x ${bean.price.toFixed(2)}</p>
              <p className="text-xl font-bold text-gray-900">${(bean.price * quantity).toFixed(2)}</p>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl"
              data-testid="add-bean-to-cart-btn"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeanDetail;
