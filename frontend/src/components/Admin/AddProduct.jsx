import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", imageFile); // Image file selected

      const res = await axios.post("http://localhost:5000/admin/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true // <- This is important when using cookies
      });

      console.log(res.data);
      setMessage("✅ Product added successfully.");
      reset();
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Product Name"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          step="0.01"
          {...register("price", { required: true })}
          placeholder="Price"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          {...register("category")}
          placeholder="Category"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default AddProduct;
