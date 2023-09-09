import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import brandRoutes from './routes/brands.js'
import watchRoutes from './routes/watch.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'


/* CONFIGURATIONS */
const app = express()
dotenv.config()

app.use(cors())
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use(express.json())


/* ROUTES */
app.use('/brands', brandRoutes)
app.use('/watch', watchRoutes)


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })
}).catch((err) => console.log(err))