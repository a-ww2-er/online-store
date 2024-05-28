import { Router } from "express";
import authRoutes from "./authentication";
import productsRoutes from "./products";

//ALL ROUTES ATTACHED TO BASE ROUTER
const rootRouter:Router =Router();

rootRouter.use('/auth',authRoutes);

rootRouter.use('/products',productsRoutes);

export default rootRouter