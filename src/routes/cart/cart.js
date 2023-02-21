import { Router } from 'express'
import {
  createCart,
  deleteCart,
  getByIdCart,
  getCart,
  updateCart,
} from '../../controllers/Cart/cart.js'

const cartRouter = Router()

// Get all categories
cartRouter.get('/', getCart)

// Get a category
cartRouter.get('/:id', getByIdCart)

// Create a category
cartRouter.post('/', createCart)

// Update a category
cartRouter.put('/:id', updateCart)

// Delete a category
cartRouter.delete('/:id', deleteCart)

export { cartRouter }
