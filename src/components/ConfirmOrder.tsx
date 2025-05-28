import React from 'react';
import useCartStore from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder: React.FC = () => {
  const { cartItems, resetCart, isModalOpen, closeModal } = useCartStore();
  const navigate = useNavigate();

  const handleStartNewOrder = () => {
    closeModal(); // Close modal
    resetCart(); // Reset cart
    navigate('/'); // Navigate to home
  };

  if (!isModalOpen) return null;

  return (
    <div className=" lg:bg-black/50 lg:backdrop-blur-[0.5px] fixed inset-0 z-50 flex justify-center md:items-center items-end px-4 pb-4 md:px-0 md:pb-0">
      <div className="bg-white rounded-t-2xl md:rounded-lg p-6 w-full max-w-md md:max-w-2xl lg:max-w-sm md:mx-0 md:mb-0">
        <div className="mb-4">
          <img src="/assets/icon-order-confirmed.svg" alt="Order Confirmed" className="mr-auto w-12 lg:w-6 h-12 lg:h-6 mb-8 lg:mb-2" />
          <h2 className="text-5xl lg:text-3xl font-bold mb-6 lg:mb-2">Order Confirmed</h2>
          <p className="text-lg lg:text-sm text-gray-500">We hope you enjoy your food!</p>
        </div>
        <div className="bg-rose-50 p-3 lg:p-2 rounded-md mb-6 lg:mb-2">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 pb-4 lg:pb-2 border-b border-gray-300 last:border-b-0">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <img src={item.image.thumbnail} alt={item.name} className="w-15 lg:w-8 h-15 lg:h-8 rounded-md" />
                  <div>
                    <h3 className="font-semibold text-base lg:text-sm mb-2 lg:mb-0">{item.name}</h3>
                    <p className="text-base lg:text-xs text-gray-600">
                      <span className="text-orange-700 font-semibold">{item.quantity}x</span>&nbsp; &nbsp;
                      <span className="text-gray-500 font-semibold"> @${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div className="text-lg lg:text-sm text-gray-900 font-bold">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-3 lg;mt-1">
            <span className="text-xl lg:text-sm font-light">Order Total</span>
            <span className="text-4xl lg:text-lg font-bold">
              ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={handleStartNewOrder}
          className="w-full mt-4 bg-orange-700 hover:bg-orange-900 text-white font-semibold py-4 lg:py-2 px-4 rounded-4xl text-sm"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;