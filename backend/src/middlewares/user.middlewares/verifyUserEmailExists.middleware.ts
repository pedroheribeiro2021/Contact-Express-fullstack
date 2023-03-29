import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/client.user.entity";
import { AppError } from "../../errors/AppError";


export const verifyUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRegistred = AppDataSource.getRepository(User)

    const email = await userRegistred.findBy({
        email: req.body.email
    })

    const phone = await userRegistred.findBy({
        phone: req.body.phone
    })
    
    if(email.length > 0 || phone.length > 0) {
        
        throw new AppError('User already registred', 400)
    }

    next()
}