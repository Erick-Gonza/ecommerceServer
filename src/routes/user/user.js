import { Router } from 'express'
import {
  getAllUser,
  getByIdUser,
  createUser,
  updateUser,
  deleteUser,
  createUserAddress
} from '../../controllers/User/user.js'

const userRouter = Router()

// Get all users
userRouter.get('/', getAllUser)

// Get a user
userRouter.get('/:id', getByIdUser)

// Create a user
userRouter.post('/', createUser)

// Update a user
userRouter.put('/:id', updateUser)

// Delete a user
userRouter.delete('/:id', deleteUser)

// Add a new address to a user
userRouter.post('/:id/address', createUserAddress)

export { userRouter }
