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