import express from "express";
import {
  createGame,
  updateGame,
  deleteGame,
  getGame,
  getAllGames,
} from "../controllers/gameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post(
  "/games",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createGame
);
router.put(
  "/games/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateGame
);
router.delete("/games/:id", authMiddleware, adminMiddleware, deleteGame);

router.get("/games/:id", authMiddleware, getGame);
router.get("/games", authMiddleware, getAllGames);

export default router;
