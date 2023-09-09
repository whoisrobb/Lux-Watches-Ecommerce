import { Schema, model } from "mongoose"

const accessorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    }
})