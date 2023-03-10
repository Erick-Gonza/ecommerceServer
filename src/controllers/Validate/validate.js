import { verifyToken } from '../../config/authToken.js'

const validateUser = async (req, res) => {
  try {
    const { token } = req.body
    const validateToken = verifyToken(token)
    res.send({ message: 'User validated', success: true, user: validateToken.id })
  } catch (error) {
    res.status(400).send({ message: 'error', success: false })
  }
}

export { validateUser }
