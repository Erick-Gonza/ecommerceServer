import { Router } from 'express'
import {
  createOrder,
  deleteOrder,
  getByIdOrder,
  getOrder,
  updateOrder
} from '../../controllers/Order/order.js'

const orderRouter = Router()

// Get all categories
orderRouter.get('/', getOrder)

// Get a category
orderRouter.get('/:id', getByIdOrder)

// Create a category
orderRouter.post('/', createOrder)

// Update a category
orderRouter.put('/:id', updateOrder)

// Delete a category
orderRouter.delete('/:id', deleteOrder)

export { orderRouter }
