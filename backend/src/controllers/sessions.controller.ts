import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/user.interface";
import { createSessionService } from "../services/sessions/createSession.service";


export const createSessionController = async(req: Request, res: Response) => {

    const sessionData: IUserLogin = req.body
    const token = await createSessionService(sessionData)
    return res.json({token})
}