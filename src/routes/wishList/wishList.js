import { Router } from 'express'
import {
  getWishList,
  addToWishList,
  deleteFromWishlist
  // deleteFromWishList
} from '../../controllers/WishList/wishList.js'
import isAuth from '../../middleware/isAuth.js'

const wishListRouter = Router()

// Get a WishList
wishListRouter.get('/:userId', getWishList)

// add to wishlist
wishListRouter.post('/', isAuth, addToWishList)

wishListRouter.delete('/:productId', deleteFromWishlist)

// // Create a WishList
// wishListRouter.post('/', createWishList)

// // Update a WishList
// wishListRouter.put('/:id', updateWishList)

// // Delete a WishList
// wishListRouter.delete('/:id', deleteWishList)

export { wishListRouter }
