// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("User");
    const user = userData ? JSON.parse(userData) : null;

    if (!user) {
      navigate("/login"); // or wherever your login route is
      return;
    }

    if (!user || !allowedRoles.includes(user.role)) {
      navigate("/"); // Redirect to home if not allowed
    } else {
      setIsAllowed(true);
    }
  }, [allowedRoles, navigate]);

  return isAllowed ? children : null;
};

export default ProtectedRoute;
