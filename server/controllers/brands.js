import Brand from "../models/brand.js"


/* CREATE A BRAND ENTRY */
export const createBrand = async (req, res) => {
    try {
        const { name, description } = req.body
        // const { name, description } = test
        const brand = new Brand({ name, description })
        const savedBrand = await brand.save()
        res.status(201).json(savedBrand)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}


/* GET BRAND DETAILS */
export const getBrand = async (req, res) => {
    try {
        const { name } = req.body
        const brand = await Brand.find({ name: name })
        res.status(200).json({ brand })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


/* GET BRAND BY ID */
export const getBrandById = async (req, res) => {
    try {
        const { _id } = req.body
        const brand = await Brand.find({ _id: _id })
        res.status(200).json({ brand })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


/* GET BRAND BY ID */
export const getBrandByName = async (req, res) => {
    try {
        const { name } = req.body
        const brand = await Brand.find({ name: name })
        res.status(200).json({ brand })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


/* GET ALL BRANDS */
export const getAllBrands = async (req, res) => {
    try {
        // Use Mongoose to find all brand documents and project only the 'name' field
        const brands = await Brand.find({}, 'name')
    
        // Send the array of brand names as a JSON response
        res.status(200).json(brands)
      } catch (error) {
        res.status(500).json({ message: err.message })
      }
}