import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import studentRoutes from "./routes/students.js";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use("/users", studentRoutes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      connect();
      console.log(`Server started on Port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

const connect = async () => {
  await mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

start();
