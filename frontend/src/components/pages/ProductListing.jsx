import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user/products",{
        withCredentials : true
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Product Catalog</h2>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && !error && products.length > 0 ? (
          products.map((product) => (
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
                <p className="text-gray-600 mb-2 truncate">{product.description}</p>
                <p className="text-blue-600 font-bold text-lg">₹{product.price}</p>
                <p className="text-sm text-gray-400 mt-1 capitalize">
                  Category: {product.category}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="col-span-full text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};
