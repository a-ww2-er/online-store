import { Request, Response } from "express"
import { prismaClient } from "..";
import {hashSync} from 'bcrypt'

export const register = async(req:Request,res:Response)=>{
   try {
    const {email,password,username} = req.body;

    const user = await prismaClient.user.findFirst({where:{email}})

    if(user){
        res.status(400).json({
            success:false,
            message:"user already exists"
        })
    }
    const newUser = await prismaClient.user.create({
        data:{
            email,
            password:hashSync(password,10),
            username
        }
    })

    res.status(200).json({success:true,message:"user created",user:newUser})

   } catch (error) {
    res.status(400).json({success:false,message:error})
   }
 
}


export const login = (req:Request,res:Response)=>{
   
}