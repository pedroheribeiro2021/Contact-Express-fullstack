import { Router } from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"


export const contactsRoutes = Router()

contactsRoutes.post('', ensureAuthMiddleware, createContactController)
contactsRoutes.get('/:id', listContactController)
contactsRoutes.patch('/:id', ensureAuthMiddleware, updateContactController)
contactsRoutes.delete('/:id', ensureAuthMiddleware, deleteContactController)
