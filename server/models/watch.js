import { Schema, model } from "mongoose"

const watchSchema = new Schema({
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
    type: {
        type: [String],
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    // images: {
    //     type: [String]
    // }
})

const Watch = model('Watch', watchSchema)
export default Watch