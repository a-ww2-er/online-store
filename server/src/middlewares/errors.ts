import { Request ,NextFunction,Response} from "express";
import { HttpException } from "../exceptions/root";

//BASE ERROR HANDLER MIDDLEWARE
export const errorHandler = (error:HttpException,req:Request,res:Response,next:NextFunction)=>{
    res.status(error.statusCode).json({
        success:false,
        message:error.message,
        errorCode:error.errorCode,
        errors: error.errors
    })
}