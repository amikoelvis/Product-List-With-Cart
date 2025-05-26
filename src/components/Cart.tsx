import React from 'react'
import useCartStore from '../store/cartStore'

const Cart: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems)

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <img
            src="/assets/illustration-empty-cart.svg"
            alt="Empty cart"
            className="mx-auto w-32 h-32 mb-4"
          />
          <p className='text-sm'>Your added items will appear here</p>
        </div>
      ) : (
        <div>
          {/* 🛒 Render cart items here */}
        </div>
      )}
    </div>
  )
}

export default Cart
