import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

const MainPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen max-w-md md:max-w-3xl lg:max-w-6xl mx-auto lg:flex-row lg:items-start gap-8 lg:gap-6 p-8 lg:p-12 font-RedHatText">
      {/* Product List Section - 2/3 width on large screens */}
      <section className="lg:w-2/3 w-full">
        <ProductList />
      </section>

      {/* Cart Section - 1/3 width on large screens */}
      <aside className="lg:w-1/3 w-full">
        <Cart />
      </aside>
    </main>
  )
}

export default MainPage
