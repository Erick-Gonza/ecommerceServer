import { Router } from 'express'
import { userRouter } from './user/user.js'
import { categoryRouter } from './category/category.js'
import { productRouter } from './product/product.js'
import { cartRouter } from './cart/cart.js'
import { orderRouter } from './Order/order.js'
import { orderDetailRouter } from './Order/orderDetail.js'
import { wishListRouter } from './wishList/wishList.js'
import { addressRouter } from './address/address.js'
import { loginRouter } from './login/login.js'
import { validateRouter } from './validate/validate.js'
import { cityRouter } from './address/city.js'
import { stateRouter } from './address/state.js'
import { countryRouter } from './address/country.js'

const router = Router()

router.use('/user', userRouter)
router.use('/login', loginRouter)
router.use('/validate', validateRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/wishlist', wishListRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)
router.use('/orderDetail', orderDetailRouter)
router.use('/address', addressRouter)
router.use('/cities', cityRouter)
router.use('/states', stateRouter)
router.use('/countries', countryRouter)

export { router }
