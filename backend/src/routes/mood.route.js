import express from "express";
import {
  moodCreate,
  moodDelete,
  moodRead,
} from "../controllers/mood.controller.js";
import { protect } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/mood", protect, moodCreate);
router.get("/mood", protect, moodRead);

router.delete("/mood/:id", protect, moodDelete);

export default router;
