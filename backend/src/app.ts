import "express-async-errors";
import express, { Application } from 'express'
import { sessionRoutes } from './routes/session.routes'
import { userRoutes } from './routes/user.routes'
import { handleError } from "./errors/handleError"
import { contactsRoutes } from "./routes/contacts.routes";

export const app: Application = express()
app.use(express.json())

app.use('/user', userRoutes)
app.use('/login', sessionRoutes)
app.use('/contact', contactsRoutes)

app.use(handleError)