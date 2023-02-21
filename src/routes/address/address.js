import { Router } from 'express'
import {
    getAllAddress,
    getByIdAddress,
    createAddress,
    updateAddress,
    deleteAddress,
} from '../../controllers/Address/address.js'

const addressRouter = Router()

// Get all users
addressRouter.get('/', getAllAddress)

// Get a user
addressRouter.get('/:id', getByIdAddress)

// Create a user
addressRouter.post('/', createAddress)

// Update a user
addressRouter.put('/:id', updateAddress)

// Delete a user
addressRouter.delete('/:id', deleteAddress)

export { userRouter }