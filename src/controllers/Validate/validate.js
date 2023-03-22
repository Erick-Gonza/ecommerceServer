import { verifyToken } from '../../config/authToken.js'
import { Role, User } from '../../models/index.js'

const validateUser = async (req, res) => {
  try {
    const { token } = req.body
    const validateToken = verifyToken(token)
    const data = await User.findByPk(validateToken.id, { include: [{ model: Role, as: 'role' }] })
    res.send({ message: 'User validated', success: true, user: validateToken.id, role: data.role.name })
  } catch (error) {
    res.status(400).send({ message: 'error', success: false })
  }
}

export { validateUser }
