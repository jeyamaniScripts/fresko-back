import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("✅ Backend Server Running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// Start Server

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
