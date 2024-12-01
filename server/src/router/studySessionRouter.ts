import { Router } from 'express'
import studySessionController from '../controller/studySessionController'
import rateLimit from '../middleware/rateLimit'

const router = Router()

router.route('/self').get(studySessionController.self)
router.route('/health').get(studySessionController.health)

// add study session
router.route('/studysession/add').post(rateLimit, studySessionController.addStudySession)
router.route('/studysession/get/:userId').get(rateLimit, studySessionController.getAllSessionById)

export default router

