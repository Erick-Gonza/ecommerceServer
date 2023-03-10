import { Router } from 'express'
import {
  getAllUser,
  getByIdUser,
  createUser,
  updateUser,
  deleteUser,
  createUserAddress
} from '../../controllers/User/user.js'
import isAuth from '../../middleware/isAuth.js'

const userRouter = Router()

// Get all users
userRouter.get('/', getAllUser)

// Get a user
userRouter.get('/:id', isAuth, getByIdUser)

// Create a user
userRouter.post('/', createUser)

// Update a user
userRouter.put('/:id', updateUser)

// Delete a user
userRouter.delete('/:id', deleteUser)

// Add a new address to a user
userRouter.post('/:id/address', isAuth, createUserAddress)

export { userRouter }
