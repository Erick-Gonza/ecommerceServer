import { Router } from 'express'

const productRouter = Router()

// Get all products
productRouter.get('/', (req, res) => res.send('Get all products'))

// Get a product
productRouter.get('/:id', (req, res) => res.send('Get a product'))

// Create a product
productRouter.post('/', (req, res) => res.send('Create a product'))

// Update a product
productRouter.put('/:id', (req, res) => res.send('Update a product'))

// Delete a product
productRouter.delete('/:id', (req, res) => res.send('Delete a product'))

export { productRouter }
