import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 dark:bg-gray-800 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Discover and Sell Amazing Products
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Browse curated products or add your own to reach more people. Simple, fast, and beautiful.
            </p>
            <div className="space-x-4">
              <Link
                to="/products"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Explore Products
              </Link>
              <Link
                to="/add"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition"
              >
                Add a Product
              </Link>
            </div>
          </div>

          {/* Image or Illustration */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://illustrations.popsy.co/gray/shopping-bag.svg"
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home