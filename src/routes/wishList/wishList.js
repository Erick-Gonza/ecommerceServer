import { Router } from 'express'
import {
  getWishList,
  addToWishList
  // deleteFromWishList
} from '../../controllers/WishList/wishList.js'

const wishListRouter = Router()

// Get a WishList
wishListRouter.get('/:userId', getWishList)

// add to wishlist
wishListRouter.post('/', addToWishList)

// delete from wishlist
// wishListRouter.delete('/', deleteFromWishList)

// // Create a WishList
// wishListRouter.post('/', createWishList)

// // Update a WishList
// wishListRouter.put('/:id', updateWishList)

// // Delete a WishList
// wishListRouter.delete('/:id', deleteWishList)

export { wishListRouter }
