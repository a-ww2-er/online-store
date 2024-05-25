import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../variables";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/unprocessable-entity";

//REGISTER USER
export const register = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { email, password, name } = req.body;
    
    //CHECK IF USER ALREADY EXISTS
    const user = await prismaClient.user.findFirst({ where: { email } });
    if (user) {
       next(new BadRequestException("User Already Exist",ErrorCode.USER_ALREADY_EXISTS,))
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
      .json({ success: true, message: "user created", user: newUser });
  } catch (error:any) {

    next(new UnprocessableEntity('UnprocessableEntity',ErrorCode.VALIDATION_ERROR,error?.issues))

  }
};


//LOGIN USER
export const login = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { email} = req.body;

    //CHECK IF USER WITH EMAIL EXSISTS
    const user = await prismaClient.user.findFirst({ where: { email } });
    if (!user) {
      res.status(400).json({ success: false, message: "User does not exist" });
    } else {

    //CHECK CREDENTIALS
      const correctPassword = compareSync(req.body.password, user.password);
      if (!correctPassword) {
        res.status(400).json({ success: false, message: "Incorrect password" });
      }

    //SIGN TOKEN
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
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
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, error });
  }
};
