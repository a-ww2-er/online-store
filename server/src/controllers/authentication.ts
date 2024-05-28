import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_TOKEN_EXPIRE } from "../variables";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/unprocessable-entity";
import { registerSchema } from "../schema/users";
import { NotFoundException } from "../exceptions/not-found";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { IUserRequest } from "../types/express";

//REGISTER USER
export const register = async (req: Request, res: Response,next:NextFunction) => {
 
  registerSchema.parse(req.body)

  const { email, password, name } = req.body;
  
  //CHECK IF USER ALREADY EXISTS
  const user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    throw new BadRequestException("User Already Exist",ErrorCode.USER_ALREADY_EXISTS,)
  }

  //CREATE NEW USER
  const newUser = await prismaClient.user.create({
    data: {
      email,
      password: hashSync(password, 10),
      name,
    },
  });

  res
    .status(200)
    .json({ success: true, message: "user created" });
};


//LOGIN USER
export const login = async (req: Request, res: Response,next:NextFunction) => {

    const { email} = req.body;

    //CHECK IF USER WITH EMAIL EXSISTS
    const user = await prismaClient.user.findFirst({ where: { email } });
    if (!user) {
    throw new NotFoundException("User not found",ErrorCode.USER_NOT_FOUND)
    } else {

    //CHECK CREDENTIALS
      const correctPassword = compareSync(req.body.password, user.password);
      if (!correctPassword) {
        throw new BadRequestException("Incorrect password",ErrorCode.INVALID_CREDENTIALS)
      }

    //SIGN TOKEN EXPIRES AFTER A DAY
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_TOKEN_EXPIRE });
      const { password, ...others } = user;
     
      res
        .status(200)
        .json({
          success: true,
          message: `${user.name} logged in`,
          user:others,
          token,
        });
    }

};

// USER PROFILE
export const profile = async (req:IUserRequest, res: Response,next:NextFunction) => {
  if(req?.user){
    res.status(200).json(req?.user);
  }else{
    throw new UnauthorizedException("User is not authenticated",ErrorCode.NOT_AUTHENTICATED)
  }
};


//LOGOUT
export const logout =async (req:IUserRequest, res: Response,next:NextFunction)  => {
    // res.cookie("access_token", "", { maxAge: 1 });
    // res.cookie("refresh_token", "", { maxAge: 1 });

    // res.clearCookie("accessToken", {
    //   sameSite: "none",
    //   secure: true,
    // }).status(200).json({

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

}

