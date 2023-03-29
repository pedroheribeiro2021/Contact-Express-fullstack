import { Router } from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"


export const contactsRoutes = Router()

contactsRoutes.post('', ensureAuthMiddleware, createContactController)
contactsRoutes.get('', listContactController)
contactsRoutes.patch('/:id', updateContactController)
contactsRoutes.delete('/:id', deleteContactController)
