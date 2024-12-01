import { ObjectId } from 'mongoose'

export interface IStudySession {
    userId: ObjectId
    sessionTime: {
        hours: string
        minutes: string
        seconds: string
    }
    date: Date
}

