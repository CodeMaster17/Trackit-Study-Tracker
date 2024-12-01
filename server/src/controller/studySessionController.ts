import { NextFunction, Request, Response } from 'express'
import responseMessage from '../constant/responseMessage'
import studySessionModel from '../model/studySessionModel'
import httpError from '../util/httpError'
import httpResponse from '../util/httpResponse'
import logger from '../util/logger'
import quicker from '../util/quicker'

interface IAddSessionRequest {
    hours: string
    minutes: string
    seconds: string
}

// interface IAuthenticatedRequest extends Request {
//     authenticatedUser: IUserWithId
// }

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    health: (req: Request, res: Response, next: NextFunction) => {
        try {
            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                timestamp: Date.now()
            }

            httpResponse(req, res, 200, responseMessage.SUCCESS, healthData)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    addStudySession: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { hours, minutes, seconds } = req.body.sessionTime as IAddSessionRequest

            logger.info(hours)
            logger.info(minutes)
            logger.info(seconds)

            if (!hours || !minutes || !seconds || isNaN(parseInt(hours)) || isNaN(parseInt(minutes)) || isNaN(parseInt(seconds))) {
                return httpResponse(req, res, 400, responseMessage.INVALID_HOURS_MINUTES_SECONDS)
            }

            const userId = req.body.userId
            if (!userId) {
                return httpResponse(req, res, 401, responseMessage.UNAUTHORIZED)
            }

            const newStudySession = new studySessionModel({
                userId,
                sessionTime: {
                    hours: hours,
                    minutes,
                    seconds
                },
                date: new Date()
            })

            await newStudySession.save()

            httpResponse(req, res, 201, responseMessage.SUCCESS, newStudySession)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    }
}

