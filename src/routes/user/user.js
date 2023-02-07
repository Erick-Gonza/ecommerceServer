import { Router } from 'express'

const userRouter = Router()

// Get all users
userRouter.get('/', (req, res) => {
  res.send('Get all users')
})

// Get a user
userRouter.get('/:id', (req, res) => {
  res.send('Get a user')
})

// Create a user
userRouter.post('/', (req, res) => {
  res.send('Create a user')
})

// Update a user
userRouter.put('/:id', (req, res) => {
  res.send('Update a user')
})

// Delete a user
userRouter.delete('/:id', (req, res) => {
  res.send('Delete a user')
})

export { userRouter }
