import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user.controller";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/user.middlewares/ensureDataIsValidMiddleware";
import { verifyUserExistsMiddleware } from "../middlewares/user.middlewares/verifyUserEmailExists.middleware";
import { verifyUsernotExistMiddleware } from "../middlewares/user.middlewares/verifyUsernotExist.middleware";
import { userSerializer } from "../schemas/user.serializer";


export const userRoutes = Router()

userRoutes.get('/:id', listUsersController)
userRoutes.post('', ensureDataIsValidMiddleware(userSerializer), verifyUserExistsMiddleware, createUserController)
userRoutes.patch('/:id', verifyUsernotExistMiddleware, updateUserController)
userRoutes.delete('/:id', verifyUsernotExistMiddleware, deleteUserController)
