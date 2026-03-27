import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

import AuthRoutes from "./routes/auth.route.js";
import TodoRoutes from "./routes/todo.route.js";
import MoodRoutes from "./routes/mood.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", AuthRoutes);
app.use("/tasks", TodoRoutes);
app.use("/board", MoodRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
