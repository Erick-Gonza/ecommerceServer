import { Router } from 'express'
import {
  getAllSubcategory,
  getByIdSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from '../../controllers/subcategory/subcategory.js'

const subcategoryRouter = Router()

// Get all subcategory
subcategoryRouter.get('/', getAllSubcategory)

// Get a subcategory
subcategoryRouter.get('/:id', getByIdSubcategory)

// Create a subcategory
subcategoryRouter.post('/', createSubcategory)

// Update a subcategory
subcategoryRouter.put('/:id', updateSubcategory)

// Delete a subcategory
subcategoryRouter.delete('/:id', deleteSubcategory)

export { subcategoryRouter }
