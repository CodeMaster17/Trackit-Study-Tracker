import mongoose from 'mongoose'
import { IStudySession } from '../types/studySession'

const studySessionsModel = new mongoose.Schema<IStudySession>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    sessionTime: {
        hours: {
            type: String,
            required: true
        },
        minutes: {
            type: String,
            required: true
        },
        seconds: {
            type: String,
            required: true
        }
    },
    date: {
        type: Date,
        default: null
    }
})

export default mongoose.model('studySessionsModel', studySessionsModel)


