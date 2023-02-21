import { Router } from 'express'

const orderRouter = Router()

// Get all categories
orderRouter.get('/', (req, res) => res.send('Get all categories'))

// Get a category
orderRouter.get('/:id', (req, res) => res.send('Get a category'))

// Create a category
orderRouter.post('/', (req, res) => res.send('Create a category'))

// Update a category
orderRouter.put('/:id', (req, res) => res.send('Update a category'))

// Delete a category
orderRouter.delete('/:id', (req, res) => res.send('Delete a category'))

export { orderRouter }
