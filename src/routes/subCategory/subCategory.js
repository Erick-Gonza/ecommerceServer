import { Router } from 'express'
import { 
    createSubCategory,
    deleteSubCategory,
    getAllSubCategory,
    getByIdSubCategory,
    updateSubCategory
    } from '../../controllers/SubCategory/subCategory.js'

const subCategoryRouter = Router()

// Get all SubCategory
subCategoryRouter.get('/', getAllSubCategory)

// Get a SubCategory
subCategoryRouter.get('/:id', getByIdSubCategory)

// Create a SubCategory
subCategoryRouter.post('/', createSubCategory)

// Update a SubCategory
subCategoryRouter.put('/:id', updateSubCategory)

// Delete a SubCategory
subCategoryRouter.delete('/:id', deleteSubCategory)

export { subCategoryRouter }