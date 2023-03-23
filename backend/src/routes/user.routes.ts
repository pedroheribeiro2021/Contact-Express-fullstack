import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";


export const userRoutes = Router()

// userRoutes.get('', listUsersController)
userRoutes.get('/:id', ensureAuthMiddleware, listUsersController)
userRoutes.post('', createUserController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
