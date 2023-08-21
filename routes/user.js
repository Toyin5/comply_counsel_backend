import express from "express";
import { loginUser, registerUser, verifyUser } from "../controllers/user.js";

export const userRoute = express.Router();

userRoute.post("/auth/register", registerUser);
userRoute.post("/auth/login", loginUser);
userRoute.post("/auth/verify/:userId?", verifyUser);
