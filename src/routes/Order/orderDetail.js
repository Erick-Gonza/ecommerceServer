import { Router } from 'express'

const orderDetailRouter = Router()

// Get all categories
orderDetailRouter.get('/', (req, res) => res.send('Get all categories'))

// Get a category
orderDetailRouter.get('/:id', (req, res) => res.send('Get a category'))

// Create a category
orderDetailRouter.post('/', (req, res) => res.send('Create a category'))

// Update a category
orderDetailRouter.put('/:id', (req, res) => res.send('Update a category'))

// Delete a category
orderDetailRouter.delete('/:id', (req, res) => res.send('Delete a category'))

export { orderDetailRouter }
