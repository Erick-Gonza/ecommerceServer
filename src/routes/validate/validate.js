import { Router } from 'express'
import { validateUser } from '../../controllers/Validate/validate.js'

const validateRouter = Router()

// Login with user
validateRouter.post('/', validateUser)

export { validateRouter }
