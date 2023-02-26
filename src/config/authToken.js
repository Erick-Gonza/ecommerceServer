import jwt from 'jsonwebtoken'

const secret = process.env.SECRET

const generateToken = (payload) => {
  return jwt.sign({ payload }, secret, { expiresIn: '3m' })
}

const validateToken = (token) => {
  return jwt.verify(token, secret)
}

const auth = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized: No token provided' })
  }
  try {
    const verified = jwt.verify(token, secret)
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send({ message: 'Invalid token' })
  }
}

export { generateToken, validateToken, auth }
