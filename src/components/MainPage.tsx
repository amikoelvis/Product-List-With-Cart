import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

const MainPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen max-w-md md:max-w-3xl lg:max-w-6xl mx-auto lg:flex-row lg:items-start gap-2 p-12">
      {/* Product List Section - 3/4 width on large screens */}
      <section className="lg:w-3/4 w-full">
        <ProductList />
      </section>

      {/* Cart Section - 1/4 width on large screens */}
      <aside className="lg:w-1/4 w-full">
        <Cart />
      </aside>
    </main>
  )
}

export default MainPage
