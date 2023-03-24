import { Country } from '../../models/index.js'

const getAllCountry = async (req, res) => {
  try {
    const countries = await Country.findAll({ include: [{ all: true }] })
    countries.length === 0
      ? res.status(400).send({
        message: 'No countries found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all countries',
        success: true,
        countries
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllCountry
}
