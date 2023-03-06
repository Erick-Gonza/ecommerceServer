import { Router } from 'express'
import { loginUser } from '../../controllers/Login/login.js'

const loginRouter = Router()

// Login with user
loginRouter.post('/', loginUser)

export { loginRouter }
