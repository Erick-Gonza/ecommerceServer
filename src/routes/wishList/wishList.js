import { Router } from 'express'
import {
    getByIdWishList,
    createWishList,
    updateWishList,
    deleteWishList,
} from '../../controllers/WishList/wishList.js'

const wishListRouter = Router()

// Get a WishList
wishListRouter.get('/:id', getByIdWishList)

// Create a WishList
wishListRouter.post('/', createWishList)

// Update a WishList
wishListRouter.put('/:id', updateWishList)

// Delete a WishList
wishListRouter.delete('/:id', deleteWishList)

export { wishListRouter }