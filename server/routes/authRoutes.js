import express from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/authController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/getUser", isAuthenticated, getUser);
router.post("/logout", logout);

export default router;
