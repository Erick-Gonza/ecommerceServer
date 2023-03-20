import { compareBcrypt, signToken } from '../../config/authToken.js'
import { User } from '../../models/index.js'
import { verifyLogin } from '../../utils/functions.js'

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body

    const login = verifyLogin(userName)

    const user = await User.findOne({ where: login })

    if (!user) {
      return res.status(404).send({ message: 'User not found', success: false })
    }

    const isCorrect = await compareBcrypt(password, user?.password)
    if (!(user && isCorrect)) {
      return res.status(401).json({
        error: 'invalid user or password'
      })
    }

    const userForToken = {
      id: user.id,
      password: user.password
    }

    console.log(process.env.SECRET)
    const token = signToken(userForToken, process.env.SECRET)

    res.cookie('token', token).status(200).send({ token, user: user.userName })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { loginUser }
