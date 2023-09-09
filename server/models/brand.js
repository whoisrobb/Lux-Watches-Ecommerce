import { Schema, model } from "mongoose"

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        requred: true
    }
})

const Brand = model('Brand', brandSchema)
export default Brand