import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import { router } from './routes/index.js'
import db from './config/database.js'
import cookieParser from 'cookie-parser'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(morgan('tiny'))

// Main route
app.use('/api/v1', router)

await db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})
