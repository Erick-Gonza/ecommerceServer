import { Router } from 'express'
import { userRouter } from './user/user.js'
import { categoryRouter } from './category/category.js'
import { productRouter } from './product/product.js'
import { cartRouter } from './cart/cart.js'
import { orderRouter } from './Order/order.js'
import { orderDetailRouter } from './Order/orderDetail.js'
import { wishListRouter } from './wishList/wishList.js'
import { subcategoryRouter } from './subCategory/subCategory.js'
import { addressRouter } from './address/address.js'
import { loginRouter } from './login/login.js'

const router = Router()

router.use('/user', userRouter)
router.use('/login', loginRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/wishlist', wishListRouter)
router.use('/Subcategory', subcategoryRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)
router.use('/orderDetail', orderDetailRouter)
router.use('/address', addressRouter)

export { router }
