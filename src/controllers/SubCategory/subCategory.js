import { Subcategory } from '../../models/index.js'

const getAllSubcategory = async (req, res) => {
  try {
    const data = await Subcategory.findAll()
    data.length === 0
      ? res.status(400).send({
        message: 'No SubCategories found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all SubCategories',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Subcategory.findByPk(id)
    data === null
      ? res.status(400).send({
        message: `Subcategory with id ${id} not found`,
        success: false
      })
      : res.status(200).send({
        message: `Subcategory with id ${id} found`,
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createSubcategory = async (req, res) => {
  try {
    const { categoryId, name, description } = req.body
    const [Subcategory, created] = await Subcategory.findOrCreate({
      where: { name },
      defaults: { description, categoryId }
    })
    created === true
      ? res.send({
        message: 'Subcategory created',
        success: true,
        Subcategory
      })
      : res.send({
        message: `Subcategory with name ${name} already exist`,
        success: false
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, categoryId } = req.body
    const data = await Subcategory.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Subcategory with id ${id} not found`,
        success: false
      })
    } else {
      await Subcategory.update(
        {
          name,
          description,
          categoryId
        },
        {
          where: { id }
        }
      )
      res.send({
        message: 'Subcategory updated',
        success: true
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Subcategory.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Subcategory with id ${id} not found`,
        success: false
      })
    } else {
      await Subcategory.destroy({
        where: {
          id
        }
      })
      res.send({
        message: `Subcategory with ${id} deleted`,
        success: true
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllSubcategory,
  getByIdSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
}
