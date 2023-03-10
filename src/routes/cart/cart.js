import { Router } from 'express'
import {
  getCart,
  addToCart,
  deleteFromCart
} from '../../controllers/Cart/cart.js'
import isAuth from '../../middleware/isAuth.js'

const cartRouter = Router()

// Get cart
// cartRouter.get('/', getCart)

// Get cart
cartRouter.get('/:id', isAuth, getCart)

// add to cart
cartRouter.post('/', isAuth, addToCart)

// delete from cart
cartRouter.put('/', isAuth, deleteFromCart)

// Create a category
// cartRouter.post('/', createCart)

// Update a category
// cartRouter.put('/:id', updateCart)

// Delete a category
// cartRouter.delete('/:id', deleteCart)

export { cartRouter }
