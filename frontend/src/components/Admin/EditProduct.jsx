import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch current product details
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/admin/product/${id}`, {
        withCredentials: true
      });
      setProduct(res.data.product);
      setLoading(false);
    } catch (err) {
      setError("Failed to load product.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/admin/product/${id}`, product, {
        withCredentials: true
      });
      alert("Product updated successfully");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to update product.");
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            rows="3"
            required
          ></textarea>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Update Product
          </button>
        </form>
      )}
    </div>
  );
};
