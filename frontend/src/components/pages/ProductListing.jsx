import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user/products", {
        withCredentials: true,
      });
      setProducts(res.data.products);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentPage(1);
    setDisplayedProducts(filtered);
  }, [products, category, search]);

  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);
  const paginatedProducts = displayedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Product Catalog</h2>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && !error && paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2 truncate">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold text-lg">
                  ₹{product.price}
                </p>
                <p className="text-sm text-gray-400 mt-1 capitalize">
                  Category: {product.category}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <p className="col-span-full text-center">No products available.</p>
          )
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
