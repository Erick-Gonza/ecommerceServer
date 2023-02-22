import Address from '../../models/User/Address/Address.js'

const getAllAddress = async (req, res) => {
  try {
    const data = await Address.findAll()
    data.length === 0
      ? res.status(400).send({
          message: 'No addresses found',
          success: false,
        })
      : res.status(200).send({
          message: 'Get all addresses',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdAddress = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Address.findByPk(id)
    data.length === 0
      ? res.status(400).send({
          message: `Address with id ${id} not found`,
          success: false,
        })
      : res.status(200).send({
          message: `Address with id ${id} found`,
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createAddress = async (req, res) => {
  try {
    const { street, city, state, zipCode, country } = req.body
    const address = await Address.create({
      street,
      city,
      state,
      zipCode,
      country,
    })
    res.send({
      message: 'Address created',
      success: true,
      address,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params
    const { street, city, state, zipCode, country } = req.body
    const address = await Address.update(
      {
        street,
        city,
        state,
        zipCode,
        country,
      },
      {
        where: { id },
      }
    )
    res.send({
      message: 'Address created',
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params
    await Address.destroy({
      where: { id },
    })
    res.send({
      message: `Address with ${id} deleted`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllAddress,
  getByIdAddress,
  createAddress,
  updateAddress,
  deleteAddress,
}
