// middleware/authMiddleware.js

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({
      message: "Access denied. Admins only.",
      success: false
    });
  }
  next();
};

export const isUser = (req, res, next) => {
  if (req.user?.role !== 'user') {
    return res.status(403).json({
      message: "Access denied. Users only.",
      success: false
    });
  }
  next();
};
