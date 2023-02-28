import { Router } from 'express'
import {
  createSubcategory,
  deleteSubcategory,
  getAllSubcategory,
  getByIdSubcategory,
  updateSubcategory,
} from '../../controllers/Subcategory/subcategory.js'

const subcategoryRouter = Router()

// Get all Subcategory
subcategoryRouter.get('/', getAllSubcategory)

// Get a Subcategory
subcategoryRouter.get('/:id', getByIdSubcategory)

// Create a Subcategory
subcategoryRouter.post('/', createSubcategory)

// Update a Subcategory
subcategoryRouter.put('/:id', updateSubcategory)

// Delete a Subcategory
subcategoryRouter.delete('/:id', deleteSubcategory)

export { subcategoryRouter }
