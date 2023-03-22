import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user.controller";


export const userRoutes = Router()

userRoutes.get('', listUsersController)
userRoutes.post('', createUserController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
