import { Router } from 'express'
import {
  getOrderDetailByUserId,
  createOrderDetail
} from '../../controllers/OrderDetail/orderDetail.js'

const orderDetailRouter = Router()

// Get a ordrDetail by id
orderDetailRouter.get('/:id', getOrderDetailByUserId)

// Create a new orderDetail
orderDetailRouter.post('/', createOrderDetail)

export { orderDetailRouter }
