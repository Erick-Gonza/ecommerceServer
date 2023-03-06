import { compareBcrypt, signToken } from '../../config/authToken.js'
import { User } from '../../models/index.js'
import { verifyLogin } from '../../utils/functions.js'

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body

    const login = verifyLogin(userName)

    const user = await User.findOne({ where: login })

    const passwordCorrect =
      user === null ? false : compareBcrypt(password, user.password)

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid user or password',
      })
    }

    const userForToken = {
      id: user.id,
      password: user.password,
    }

    const token = signToken(userForToken, process.env.SECRET)

    res.cookie('token', token)

    res.status(200).send({ token, user: user.userName })
  } catch (error) {
    res.status(400).send({ message: 'error', success: false })
  }
}

export { loginUser }
