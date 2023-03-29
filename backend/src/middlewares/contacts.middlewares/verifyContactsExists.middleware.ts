import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.user.entity";
import { AppError } from "../../errors/AppError";


export const verifyContactsExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const contactRegistred = AppDataSource.getRepository(Contact)

    const email = await contactRegistred.findBy({
        email: req.body.email
    })

    const phone = await contactRegistred.findBy({
        phone: req.body.phone
    })
    
    if(email.length > 0 || phone.length > 0) {
        
        throw new AppError('Contact already registred', 400)
    }

    next()
}