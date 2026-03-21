import express from "express";
import { protect } from "../middleware/verifyToken.js";
import {
  todoCreate,
  todoDelete,
  todoRead,
  todoUpdate,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/todo", protect, todoCreate);
router.get("/todo", protect, todoRead);
router.put("/todo/:id", protect, todoUpdate);
router.delete("/todo/:id", protect, todoDelete);

export default router;
