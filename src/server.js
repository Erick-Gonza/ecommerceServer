import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/index.js'

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))

//Main route
app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
