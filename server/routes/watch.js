import express from 'express'
import { createWatch, getWatch } from '../controllers/watch.js'
import { upload } from '../controllers/upload.js'

const router = express.Router()


/* CREATE WATCH ITEM */
router.post('/create', upload.single('image'), createWatch)

/* GET WATCHES */
router.get('/get', getWatch)


export default router