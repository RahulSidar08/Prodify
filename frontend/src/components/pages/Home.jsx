import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center min-h-[70vh] mx-auto text-center md:text-left space-y-6">
        <div className='space-y-5'>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover and Sell Amazing Products
          </h1>
          <p className="text-lg text-gray-700">
            Browse curated products or add your own to reach more people. Simple, fast, and beautiful.
          </p>

        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Explore Products
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
