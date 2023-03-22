import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/user.interface'


export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
})

export const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
})

export const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired()
})