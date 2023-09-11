import express from 'express'
import { createWatch, getWatch, getWatchItem } from '../controllers/watch.js'
import { upload } from '../controllers/upload.js'

const router = express.Router()


/* CREATE WATCH ITEM */
router.post('/create', upload.single('image'), createWatch)

/* GET WATCHES */
router.get('/get', getWatch)

/* GET WATCH ITEM */
router.get('/get/:id', getWatchItem)


export default router