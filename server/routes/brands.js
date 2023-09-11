import express from 'express'
import { createBrand, getAllBrands, getBrand } from '../controllers/brands.js'


const router = express.Router()

/* CREATE BRAND */
router.post('/create', createBrand)


/* GET ONE BRAND */
router.post('/one', getBrand)


/* GET ONE BRAND BY ID */
router.post('/byId', getBrand)


/* GET ALL BRANDS */
router.get('/all', getAllBrands)


export default router