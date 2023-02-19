import User from '../../models/User/User.js'
import Address from '../../models/User/Address.js'
import Role from '../../models/User/Role.js'
import State from '../../models/User/State.js'

const getAllUser = async (req, res) => {
  try {
    const data = await User.findAll({ include: [Address, Role, State] })
    data.length === 0
      ? res.status(400).send({ message: 'No users found', success: false })
      : res.status(200).send({ message: 'Get all users', success: true, data })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdUser = async (req, res) => {
  try {
    const { id } = req.params
    const data = await User.findByPk(id, { include: [Address, Role, State] })
    data.length === 0
      ? res.status(400).send({
          message: 'User with id ' + id + ' not found',
          success: false,
        })
      : res.status(200).send({
          message: 'User with id ' + id + ' found',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password,
    })
    res.send({
      message: `User created`,
      success: true,
      user,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

//TODO: FIX CASCADE UPDATE WITH TABLE ADDRESS
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { firstName, lastName, userName, password, email } = req.body
    const user = await User.update(
      {
        firstName,
        lastName,
        userName,
        email,
        password,
      },
      {
        where: { id },
      }
    )
    res.send({
      message: `User updated`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await User.destroy({
      where: {
        id,
      },
    })
    res.send({ message: `User with ${id} deleted`, success: true })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getAllUser, getByIdUser, createUser, updateUser, deleteUser }
