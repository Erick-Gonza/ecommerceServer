import express, { Router } from 'express'
import { filePath, multerUpload } from '../../middleware/multerUpload.js'
import {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductByCategoryId,
} from '../../controllers/Product/product.js'

const productRouter = Router()

//Image service
productRouter.use('/public', express.static(`${filePath}../../../uploads`))

// Get all products
productRouter.get('/', getAllProduct)

// Get a product
productRouter.get('/:id', getByIdProduct)

// Get all products from categoryId
productRouter.get('/category/:id', getAllProductByCategoryId)

// Create a product
productRouter.post('/', multerUpload.single('file'), createProduct)

// Update a product
productRouter.put('/:id', updateProduct)

// Delete a product
productRouter.delete('/:id', deleteProduct)

export { productRouter }
