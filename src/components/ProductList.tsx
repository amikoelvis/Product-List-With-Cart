import React from 'react'
import useCartStore from '../store/cartStore'
import { products, type Product } from '../data/products'

const ProductList: React.FC = () => {
    const addToCart = useCartStore((state) => state.addToCart)
    const cartItems = useCartStore((state) => state.cartItems)
    const increaseQuantity = useCartStore((state) => state.increaseQuantity)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
    const isInCart = (id: number) => cartItems.some(item => item.id === id)
    const getQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0


  return (
    <section className="">
      {/* Heading */}
      <h2 className="text-6xl md:text-7xl lg:text-4xl font-bold mb-12 lg:mb-6">Desserts</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product: Product) => (
          <div key={product.id} className="flex flex-col items-center overflow-visible">
            {/* Card */}
            <article className="relative rounded-4xl overflow-visible shadow-sm bg-white w-full">
              <div className={`relative rounded-lg ${ isInCart(product.id) ? 'border-2 border-orange-700' : 'border-transparent'}`}>
                <picture>
                  <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                  <source media="(min-width:768px)" srcSet={product.image.tablet} />
                  <source media="(max-width:767px)" srcSet={product.image.mobile} />
                  <img
                  src={product.image.thumbnail}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </picture>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[160px]">
                {!isInCart(product.id) ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-white border border-rose-300 hover:border-rose-500 text-rose-900 font-semibold text-sm py-2 px-4 rounded-full shadow-md flex items-center justify-center gap-2"
                  >
                    <img src="/assets/icon-add-to-cart.svg" alt="Add" className="w-4 h-4" />
                    Add to Cart
                  </button>
                ) : (
                  <div className="w-full bg-orange-700 font-semibold text-sm py-2 px-4 rounded-full shadow-md flex items-center justify-between">
                    <button onClick={() => decreaseQuantity(product.id)}>
                      <div className="w-4 h-4 flex items-center justify-center rounded-full border border-white">
                        <img src="/assets/icon-decrement-quantity.svg" alt="Decrease" className="w-2 h-2" />
                      </div>
                    </button>
                    <span className='text-white'>{getQuantity(product.id)}</span>
                    <button onClick={() => increaseQuantity(product.id)}>
                      <div className="w-4 h-4 flex items-center justify-center rounded-full border border-white">
                    <img src="/assets/icon-increment-quantity.svg" alt="Increase" className="w-2 h-2" />
                  </div>
                    </button>
                  </div>
                )}
              </div>
              </div>
            </article>

            {/* Product Info */}
            <div className="mt-8 text-left w-full">
              <p className="text-sm text-gray-500">{product.category}</p>
              <h3 className="text-lg lg:text-sm font-bold">{product.name}</h3>
              <p className="text-base font-bold text-orange-700">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
