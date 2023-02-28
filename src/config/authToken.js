import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const secret = process.env.SECRET

const signToken = (user) => {
  return jwt.sign(user, secret)
}

const verifyToken = (token) => {
  return jwt.verify(token, secret)
}

const compareBcrypt = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export { compareBcrypt, signToken, verifyToken }
