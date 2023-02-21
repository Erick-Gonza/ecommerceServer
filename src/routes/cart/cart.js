import { Router } from 'express'

const cartRouter = Router()

// Get all categories
cartRouter.get('/', (req, res) => res.send('Get all categories'))

// Get a category
cartRouter.get('/:id', (req, res) => res.send('Get a category'))

// Create a category
cartRouter.post('/', (req, res) => res.send('Create a category'))

// Update a category
cartRouter.put('/:id', (req, res) => res.send('Update a category'))

// Delete a category
cartRouter.delete('/:id', (req, res) => res.send('Delete a category'))

export { cartRouter }
