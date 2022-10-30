import express from 'express'
// import controllers
import { isAuthenticate } from '../controllers/auth.js'
import {
    getAllTopics,
    createTopic
} from '../controllers/topic.js'
import { imageUpload } from '../utils/multer.js'

const router = express.Router()

// Get all topics
router.route('/').get(getAllTopics)

// Create new topic
router.route('/create').post(isAuthenticate, imageUpload, createTopic)

export default router