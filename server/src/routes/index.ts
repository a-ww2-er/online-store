import { Router } from "express";
import authRoutes from "./authentication";

//ALL ROUTES ATTACHED TO BASE ROUTER
const rootRouter:Router =Router();

rootRouter.use('/auth',authRoutes);

export default rootRouter