import { City } from '../../models/index.js'

const getAllCity = async (req, res) => {
  try {
    const { stateId } = req.params
    const cities = await City.findAll({ where: { stateId } })
    cities.length === 0
      ? res.status(400).send({
        message: 'No cities found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all cities',
        success: true,
        cities
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getCityById = async (req, res) => {
  try {
    const { cityId } = req.params
    const data = await City.findByPk(cityId)
    data.length === 0
      ? res.status(400).send({
        message: 'No city found',
        success: false
      })
      : res.status(200).send({
        message: ' City found',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllCity,
  getCityById
}
