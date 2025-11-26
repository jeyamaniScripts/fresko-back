import express from "express";
import rateLimit from "express-rate-limit";

import { registerUser, loginUser, refreshAccessToken, logoutUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Rate limit only login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many login attempts. Try again later.",
});

// Routes
router.post("/register", registerUser);
router.post("/login", loginLimiter, loginUser);
router.post("/refresh-token", refreshAccessToken);
router.post("/logout", logoutUser);

export default router;
