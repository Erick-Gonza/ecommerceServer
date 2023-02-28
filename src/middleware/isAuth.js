import { verifyToken } from '../config/authToken.js'

const isAuth = (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export default isAuth
