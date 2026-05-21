import { useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import { products } from '../data/products';

export default function MainSection({ cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState('products');

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        toast.warning(`${product.name} is already in your cart!`, {
          position: "top-right",
          autoClose: 2000,
        });
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is already empty!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    setCartItems([]);
    toast.success("Checkout successful! Thank you for your purchase.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="products" className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-10 lg:mb-12">
          <div className="join border border-base-300 rounded-xl p-1 bg-base-200/50">
            <button
              onClick={() => setActiveTab('products')}
              className={`btn join-item btn-sm lg:btn-md px-6 lg:px-8 border-none ${
                activeTab === 'products' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`btn join-item btn-sm lg:btn-md px-6 lg:px-8 border-none ${
                activeTab === 'cart' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                <p className="text-sm text-base-content/60">
                  Browse our products and add some items to your cart!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-bold mb-4">Cart Items ({cartItems.length})</h3>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                ))}
                <div className="border-t border-base-200 pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-extrabold text-2xl text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button onClick={checkout} className="btn btn-primary w-full">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
