import { Router } from 'express'
import {
  getOrderDetail,
  getByIdOrderDetail,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
} from '../../controllers/OrderDetail/orderDetail.js'

const orderDetailRouter = Router()

// Get all categories
orderDetailRouter.get('/', getOrderDetail)

// Get a category
orderDetailRouter.get('/:id', getByIdOrderDetail)

// Create a category
orderDetailRouter.post('/', createOrderDetail)

// Update a category
orderDetailRouter.put('/:id', updateOrderDetail)

// Delete a category
orderDetailRouter.delete('/:id', deleteOrderDetail)

export { orderDetailRouter }
