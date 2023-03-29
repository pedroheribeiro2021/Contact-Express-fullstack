import "express-async-errors";
import express, { Application } from 'express'
import { sessionRoutes } from './routes/session.routes'
import { userRoutes } from './routes/user.routes'
// import "reflect-metadata"
import { handleError } from "./errors/handleError"

export const app: Application = express()
app.use(express.json())

app.use('/user', userRoutes)
app.use('/login', sessionRoutes)

app.use(handleError)