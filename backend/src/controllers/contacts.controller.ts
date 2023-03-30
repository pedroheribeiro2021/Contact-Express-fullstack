import { Request, Response } from "express"
import { IContactUpdate } from "../interfaces/contact.interface"
import { createContactsService } from "../services/contacts/createContacts.service"
import { deleteContactsService } from "../services/contacts/deleteCotacts.service"
import { listContactsServices } from "../services/contacts/listContact.service"
import { updateContactService } from "../services/contacts/updateContact.service"


export const createContactController = async (req: Request, res: Response) => {

    const data = req.body
    const userId = req.user.id
    const newContact = await createContactsService(data, userId)
    return res.status(201).json(newContact)
}

export const updateContactController = async (req: Request, res: Response) => {

    const contactData: IContactUpdate = req.body
    const contactId: string = req.params.id
    const updateContact = await updateContactService(contactData, contactId)
    return res.status(200).json(updateContact)
}

export const listContactController = async (req: Request, res: Response) => {

    const contacts = await listContactsServices()
    return res.json(contacts)
}

export const deleteContactController = async (req: Request, res: Response) => {

    await deleteContactsService(req.params.id)
    return res.status(204).send()
}