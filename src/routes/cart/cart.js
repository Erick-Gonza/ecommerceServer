import { Router } from 'express'
import {
  getCart,
  updateCartItem
} from '../../controllers/Cart/cart.js'
import isAuth from '../../middleware/isAuth.js'

const cartRouter = Router()

// Get cart
cartRouter.get('/:id', isAuth, getCart)

// update cart item,item quantity or delete item from cart
cartRouter.put('/', isAuth, updateCartItem)

export { cartRouter }
