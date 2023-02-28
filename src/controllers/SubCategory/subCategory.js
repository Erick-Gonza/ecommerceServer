import { SubCategory } from '../../models/index.js'

const getAllSubcategory = async (req, res) => {
  try {
    const data = await SubCategory.findAll()
    data.length === 0
      ? res.status(400).send({
          message: 'No SubCategories found',
          success: false,
        })
      : res.status(200).send({
          message: 'Get all SubCategories',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await SubCategory.findByPk(id)
    data === null
      ? res.status(400).send({
          message: `SubCategory with id ${id} not found`,
          success: false,
        })
      : res.status(200).send({
          message: `SubCategory with id ${id} found`,
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createSubcategory = async (req, res) => {
  try {
    const { categoryId, name, description } = req.body
    const [subCategory, created] = await SubCategory.findOrCreate({
      where: { name },
      defaults: { description, categoryId },
    })
    created === true
      ? res.send({
          message: 'SubCategory created',
          success: true,
          subCategory,
        })
      : res.send({
          message: `Subcategory with name ${name} already exist`,
          success: false,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, categoryId } = req.body
    const data = await SubCategory.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Subcategory with id ${id} not found`,
        success: false,
      })
    } else {
      await Subcategory.update(
        {
          name,
          description,
          categoryId,
        },
        {
          where: { id },
        }
      )
      res.send({
        message: 'SubCategory updated',
        success: true,
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await SubCategory.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Subcategory with id ${id} not found`,
        success: false,
      })
    } else {
      await SubCategory.destroy({
        where: {
          id,
        },
      })
      res.send({
        message: `SubCategory with ${id} deleted`,
        success: true,
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
  deleteSubcategory,
}
