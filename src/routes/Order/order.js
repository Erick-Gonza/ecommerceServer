import { Router } from 'express'
import {
  createOrder,
  getOrdersByUserId
} from '../../controllers/Order/order.js'
import isAuth from '../../middleware/isAuth.js'

const orderRouter = Router()

orderRouter.get('/:id', isAuth, getOrdersByUserId)

orderRouter.post('/', createOrder)

export { orderRouter }
