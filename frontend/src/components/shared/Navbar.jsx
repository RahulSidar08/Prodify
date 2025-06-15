import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("User");
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("User");
        setUserData(null);
        navigate("/login");
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                    MyShop
                </Link>
                <div className="space-x-4 flex items-center">
                    <Link
                        to="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                    >
                        Home
                    </Link>

                    {userData?.role === "user" && (
                        <> 
                        <Link
                            to="products"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                        >
                             Products
                        </Link>
                        </>
                    )}

                    {userData?.role === "admin" && (
                        <> 
                        <Link
                            to="/Admin/Add"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                        >
                            Add Product
                        </Link>
                        <Link
                            to="/Admin/products"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                        >
                            Check Products
                        </Link>
                        </>
                    )}

                    {!userData ? (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Signup
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
