import { Router } from 'express'
import {
  getAllCategory,
  getByIdCategory,
  createCategory,
  updateCategory,
  deleteCategory
} from '../../controllers/Category/category.js'

const categoryRouter = Router()

// Get all categories
categoryRouter.get('/', getAllCategory)

// Get a category
categoryRouter.get('/:id', getByIdCategory)

// Create a category
categoryRouter.post('/', createCategory)

// Update a category
categoryRouter.put('/:id', updateCategory)

// Delete a category
categoryRouter.delete('/:id', deleteCategory)

export { categoryRouter }
