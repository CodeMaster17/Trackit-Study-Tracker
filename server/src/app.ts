import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './router/authRouter'
// routes
import songsRoutes from './router/songRoutes'
import adminRoutes from './router/adminRoutes'
import albumRoutes from './router/albumRoutes'
import statRoutes from './router/statRoutes'

import globalErrorHandler from './middleware/globalErrorHandler'
import responseMessage from './constant/responseMessage'
import httpError from './util/httpError'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app: Application = express()

// Middleware
app.use(helmet())
app.use(cookieParser())
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        origin: ['https://client.com'],
        credentials: true
    })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api/v1', router)
app.use('/api/v1/songs', songsRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/albums', albumRoutes)
app.use('/api/v1/stats', statRoutes)
// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

// Global Error Handler
app.use(globalErrorHandler)

export default app

