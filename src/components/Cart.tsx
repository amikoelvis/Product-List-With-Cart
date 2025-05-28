import React from 'react';
import useCartStore from '../store/cartStore';
import ConfirmOrder from './ConfirmOrder';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, isModalOpen, openModal } = useCartStore();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className="bg-white rounded-2xl p-6 sticky top-4">
      <h2 className="text-3xl lg:text-2xl font-bold mb-4 text-orange-700">
        Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <img
            src="/assets/illustration-empty-cart.svg"
            alt="Empty cart"
            className="mx-auto w-32 h-32 mb-4"
          />
          <p className="text-lg lg:text-base">Your added items will appear here</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 lg:mb-2 pb-4 lg:pb-2 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg lg:text-base">{item.name}</h3>
                  <p className="text-base text-gray-600">
                    <span className="text-orange-700 font-bold">{item.quantity}x</span> &nbsp; &nbsp;
                    <span className="text-gray-500">@{item.price.toFixed(2)}</span> &nbsp; &nbsp;
                    <span className="text-gray-500 font-bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <div className="w-4 h-4 flex items-center justify-center rounded-full border border-gray-400 hover:border-gray-600">
                    <img src="/assets/icon-remove-item.svg" alt="Remove" className="w-2 h-2" />
                  </div>
                </button>
              </div>
            </div>
          ))}

          {/* Order Total */}
          <div className="flex justify-between mt-4 mb-4">
            <span className="text-base font-light">Order Total</span>
            <span className="text-3xl lg:text-2xl font-bold">
              $
              {cartItems
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toFixed(2)}
            </span>
          </div>

          {/* Carbon Neutral */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded text-sm text-gray-600 mb-6">
            <img src="/assets/icon-carbon-neutral.svg" alt="" className="w-5 h-5" />
            <span className='text-sm lg:text-base'>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>

          {/* Confirm Order Button */}
          <button
            onClick={handleOpenModal}
            disabled={cartItems.length === 0}
            className="w-full bg-orange-700 hover:bg-orange-900 text-white font-semibold py-4 lg:py-2 px-4 rounded-4xl disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Confirm Order
          </button>
        </div>
      )}
      {isModalOpen && <ConfirmOrder />}
    </div>
  );
};

export default Cart;