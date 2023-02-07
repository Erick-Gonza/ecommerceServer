import { Router } from 'express'
import { userRouter } from './user/user.js'

const router = Router()

router.use('/user', userRouter)

export { router }
