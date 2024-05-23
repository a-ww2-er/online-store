import { Router } from "express";
import { login, register } from "../controllers/authentication";

const authRoutes:Router = Router();

authRoutes.get('/login',login)
authRoutes.get('/register',register)

export default authRoutes