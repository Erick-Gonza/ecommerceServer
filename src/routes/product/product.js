import { Router } from 'express'
import {
    getAllProduct,
    getByIdProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../../controllers/Product/product.js'

const productRouter = Router()

// Get all products
productRouter.get('/', getAllProduct)

// Get a product
productRouter.get('/:id', getByIdProduct)

// Create a product
productRouter.post('/', createProduct)

// Update a product
productRouter.put('/:id', updateProduct)

// Delete a product
productRouter.delete('/:id', deleteProduct)

export { productRouter }