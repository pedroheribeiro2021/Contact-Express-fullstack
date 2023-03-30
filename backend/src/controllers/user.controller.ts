import { Request, Response } from "express"
import { IUserRequest, IUserUpdate } from "../interfaces/user.interface"
import { listUsersServices } from "../services/user/listUser.service"
import { createUserService } from "../services/user/createUser.service"
import { updateUserService } from "../services/user/updateService.service"
import { deleteUserService } from "../services/user/deleteUser.service"


export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {
    const userId = req.params.id
    const users = await listUsersServices(userId)
    return res.json(users)
}

export const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const id: string = req.params.id
    const updateUser = await updateUserService(userData, id)
    return res.status(200).json(updateUser)
}

export const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(req.params.id)
    return res.status(204).send()
}