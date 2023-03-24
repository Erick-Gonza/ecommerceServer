import { Address, Country, State, City } from '../../models/index.js'

const getAllAddress = async (req, res) => {
  try {
    const data = await Address.findAll({ include: [Country, State] })
    data.length === 0
      ? res.status(400).send({
        message: 'No addresses found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all addresses',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

// get address by userid
const getByIdAddress = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Address.findOne({
      where: { userId: id }
    })
    data.length === 0
      ? res.status(400).send({
        message: `Address with id ${id} not found`,
        success: false
      })
      : res.status(200).send({
        message: `Address with id ${id} found`,
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createAddress = async (req, res) => {
  try {
    const { street, cityId, zipCode, countryId, stateId } = req.body
    const { userId } = req.params
    const address = await Address.create({
      street: 'Change',
      cityId: 1,
      zipCode: 0,
      countryId: 1,
      stateId: 1,
      userId
    })
    res.send({
      message: 'Address created',
      success: true,
      address
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params
    const { street, cityId, zipCode, countryId, stateId, userId } = req.body
    const address = await Address.update(
      {
        street,
        cityId,
        zipCode,
        countryId,
        stateId,
        userId
      },
      {
        where: { id }
      }
    )
    res.send({
      message: 'Address updated',
      success: true,
      address
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params
    await Address.destroy({
      where: { id }
    })
    res.send({
      message: `Address with ${id} deleted`,
      success: true
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
  deleteAddress
}
