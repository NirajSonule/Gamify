import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Authorization token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
      username: decoded.username,
    };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authenticated" });
  }
};

export default authMiddleware;
