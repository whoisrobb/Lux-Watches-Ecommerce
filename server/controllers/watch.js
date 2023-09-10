import Watch from "../models/watch.js"


/* CREATE WATCH ITEM */
export const createWatch = async (req, res) => {
    try {
        const { name, price, description, type, brand } = req.body
        const image = req.file.filename
        const watch = await Watch({ name, price, description, type, brand, coverImage: image })
        const savedWatch = await watch.save()
        res.status(201).json(savedWatch)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


/* GET WATCHES */
export const getWatch = async (req, res) => {
    try {
        const { type, brand } = req.query

        if (type) {
            const watch = await Watch.find({ type: { $in: [type] } }).populate('brand', ['name'])
            return res.status(200).json(watch)
        }

        if (brand) {
            const watch = await  Watch.find({ brand: brand }).populate('brand', ['name'])
            return res.status(200).json(watch)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}