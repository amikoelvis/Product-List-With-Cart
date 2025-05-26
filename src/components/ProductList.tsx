import React from 'react'
import useCartStore from '../store/cartStore'
import { products, type Product } from '../data/products'

const ProductList: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <section className="p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Desserts</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product: Product) => (
          <div key={product.id} className="flex flex-col items-center overflow-visible">
            {/* Card */}
            <article className="relative rounded-lg overflow-visible shadow-sm bg-white w-full">
              <div className="relative">
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

                {/* Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute border border-rose-900 -bottom-5 left-1/2 transform -translate-x-1/2 bg-white hover:border hover:border-rose-500 focus:ring-4 focus:ring-rose-300 rounded-full px-5 py-2 shadow-lg flex items-center justify-center gap-2 z-10 whitespace-nowrap"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <img
                    src="/assets/icon-add-to-cart.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5"
                  />
                  <span className="text-black font-semibold text-sm hover:text-rose-500">Add to Cart</span>
                </button>
              </div>
            </article>

            {/* Product Info */}
            <div className="mt-8 text-left w-full">
              <p className="text-sm text-gray-500">{product.category}</p>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-base font-bold text-red-400">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
