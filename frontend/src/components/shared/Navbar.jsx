// src/shared/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MyShop
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
          >
            Products
          </Link>
          <Link
            to="/add"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
          >
            Add Product
          </Link>
          <Link
            to="/login"
            className="text-black text-white px-4 py-2 rounded transition"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
