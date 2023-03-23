import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IContactRequest, IContactUpdate } from "../interfaces/contact.interface";


export const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
})

export const updateContactSerializer: SchemaOf<IContactUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
})