import express from "express";
import {
  authProfile,
  authSignin,
  authSignout,
  authSignup,
} from "../controllers/auth.contoller.js";
import { protect } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", authSignup);
router.post("/signin", authSignin);
router.post("/signout", authSignout);

router.get("/profile", protect, authProfile);

export default router;
