import jwt from 'jsonwebtoken'

const secret = process.env.SECRET

export const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1d' })
}

export const verifyToken = (token) => {
  return jwt.verify(token, secret)
}

export const cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  try {
    const payload = verifyToken(token)
    req.user = payload
    next()
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' }).clearCookie('token')
  }
}
