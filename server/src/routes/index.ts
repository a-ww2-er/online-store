import { Router } from "express";
import authRoutes from "./authentication";

const rootRouter:Router =Router();

rootRouter.use('/auth',authRoutes);

export default rootRouter