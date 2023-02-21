import { Router } from 'express'
import { userRouter } from './user/user.js'
import { categoryRouter } from './category/category.js'
import { productRouter } from './product/product.js'
import { wishListRouter } from './wishList/wishList.js'
import { subCategoryRouter } from './subcategory/subcategory.js'

const router = Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/wishlist', wishListRouter)
router.use('/subcategory', subCategoryRouter)

export { router }
