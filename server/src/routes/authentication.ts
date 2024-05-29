import { Router } from "express";
import { login, profile, register,logout } from "../controllers/authentication";
import { errorHandler } from "../errorhandler";

const authRoutes: Router = Router();

authRoutes.post("/login", errorHandler(login));

authRoutes.post("/register", errorHandler(register));

authRoutes.get("/profile", errorHandler(profile));

authRoutes.get("/logout", errorHandler(logout));

export default authRoutes;
