import { Router } from 'express'
import { userRouter } from './user/user.js'
import { categoryRouter } from './category/category.js'
import { productRouter } from './product/product.js'
import { cartRouter } from './cart/cart.js'
import { orderRouter } from './Order/order.js'
import { orderDetailRouter } from './Order/orderDetail.js'
import { wishListRouter } from './wishList/wishList.js'
import { subCategoryRouter } from './subcategory/subcategory.js'
import { addressRouter } from './address/address.js'

const router = Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/wishlist', wishListRouter)
router.use('/subcategory', subCategoryRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)
router.use('/orderDetail', orderDetailRouter)
router.use('/address', addressRouter)

export { router }
