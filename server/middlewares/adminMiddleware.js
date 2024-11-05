const adminMiddleware = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({
      message: "Access denied. Admins only",
    });
  }
};

export default adminMiddleware;
