import express from 'express'
import { createBrand, getAllBrands, getBrand, getBrandByName } from '../controllers/brands.js'


const router = express.Router()

/* CREATE BRAND */
router.post('/create', createBrand)


/* GET ONE BRAND */
router.post('/one', getBrand)


/* GET ONE BRAND BY ID */
router.post('/byId', getBrand)


/* GET ONE BRAND BY NAME */
router.post('/byName', getBrandByName)


/* GET ALL BRANDS */
router.get('/all', getAllBrands)


export default router