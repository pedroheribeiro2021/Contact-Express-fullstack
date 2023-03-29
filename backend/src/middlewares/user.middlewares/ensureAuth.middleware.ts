import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import 'dotenv'
import { AppError } from "../../errors/AppError";

export const ensureAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: 'Invalid token'
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        

        req.user = {
            id: decoded.sub,
            email: decoded.email
        }
        return next()
    })


}