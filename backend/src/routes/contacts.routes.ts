import { Router } from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller"
import { verifyContactsExistsMiddleware } from "../middlewares/contacts.middlewares/verifyContactsExists.middleware"
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware"


export const contactsRoutes = Router()

contactsRoutes.post('', ensureAuthMiddleware, verifyContactsExistsMiddleware, createContactController)
contactsRoutes.get('/:id', listContactController)
contactsRoutes.patch('/:id', ensureAuthMiddleware, updateContactController)
contactsRoutes.delete('/:id', ensureAuthMiddleware, deleteContactController)
