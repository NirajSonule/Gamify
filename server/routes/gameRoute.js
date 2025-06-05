import express from "express";
import {
  createGame,
  updateGame,
  deleteGame,
  getGame,
  getAllGames,
} from "../controllers/gameController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import { upload } from "../utils/multer.js";
import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/games",
  isAuthenticated,
  adminMiddleware,
  upload.single("image"),
  createGame
);
router.put(
  "/games/:id",
  isAuthenticated,
  adminMiddleware,
  upload.single("image"),
  updateGame
);
router.delete("/games/:id", isAuthenticated, adminMiddleware, deleteGame);

router.get("/games/:id", isAuthenticated, getGame);
router.get("/games", isAuthenticated, getAllGames);

export default router;
