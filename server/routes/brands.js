import express from 'express'
import { createBrand, getBrand } from '../controllers/brands.js'


const router = express.Router()

/* CREATE BRAND */
router.post('/create', createBrand)


/* GET BRAND */
router.post('/one', getBrand)


export default router