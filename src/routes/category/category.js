import { Router } from 'express'

const categoryRouter = Router()

// Get all categories
categoryRouter.get('/', (req, res) => res.send('Get all categories'))

// Get a category
categoryRouter.get('/:id', (req, res) => res.send('Get a category'))

// Create a category
categoryRouter.post('/', (req, res) => res.send('Create a category'))

// Update a category
categoryRouter.put('/:id', (req, res) => res.send('Update a category'))

// Delete a category
categoryRouter.delete('/:id', (req, res) => res.send('Delete a category'))

export { categoryRouter }
