import { Router } from 'express'
import {
  createOrder,
  deleteOrder,
  getByIdOrder,
  getOrder,
  updateOrder
} from '../../controllers/Order/order.js'
import isAuth from '../../middleware/isAuth.js'

const orderRouter = Router()

// Get all categories
orderRouter.get('/', getOrder)

// Get a category
orderRouter.get('/:id', isAuth, getByIdOrder)

// Create a category
orderRouter.post('/', createOrder)

// Update a category
orderRouter.put('/:id', isAuth, updateOrder)

// Delete a category
orderRouter.delete('/:id', deleteOrder)

export { orderRouter }
