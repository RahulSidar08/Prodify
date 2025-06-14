import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { errorHandler, successHandler } from "../../toast-message/toastMessage";
export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const res = await axios.post("http://localhost:5000/auth/login", data , {
        withCredentials : true
      });
      console.log(res)
      const role = data.role;
      successHandler("LoggedIn Succefully")
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
      errorHandler(err.response?.data?.message || "Login failed")
    }
  };

  return (
    <>
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" {...register("email", { required: true })} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Password</label>
          <input type="password" {...register("password", { required: true })} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Role</label>
          <select {...register("role", { required: true })} className="w-full border px-3 py-2 rounded">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      <p>
        If You don't have an Account <span>
          <Link to="/signup">
          Signup
          </Link>
        </span>
      </p>
      {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </div>
    <ToastContainer/>
    </>
    
  );
};

