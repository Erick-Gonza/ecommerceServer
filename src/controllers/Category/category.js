import { Category } from '../../models/index.js'

const getAllCategory = async (req, res) => {
  try {
    const data = await Category.findAll()
    data.length === 0
      ? res.status(400).send({
          message: 'No categories found',
          success: false,
        })
      : res.status(200).send({
          message: 'Get all categories',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdCategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Category.findByPk(id)
    data === null
      ? res.status(400).send({
          message: `Category with id ${id} not found`,
          success: false,
        })
      : res.status(200).send({
          message: `Category with id ${id} found`,
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body
    const [category, created] = await Category.findOrCreate({
      where: { name },
      defaults: { description },
    })
    created === true
      ? res.send({
          message: 'Category created',
          success: true,
        })
      : res.send({
          message: `Category with name ${name} already exist`,
          success: false,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body
    const data = await Category.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Category with id ${id} not found`,
        success: false,
      })
    } else {
      await Category.update(
        {
          name,
          description,
        },
        {
          where: { id },
        }
      )
      res.send({
        message: 'Category updated',
        success: true,
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Category.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Category with id ${id} not found`,
        success: false,
      })
    } else {
      await Category.destroy({
        where: { id },
      })
      res.send({
        message: `Category with id ${id} deleted`,
        success: true,
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllCategory,
  getByIdCategory,
  createCategory,
  updateCategory,
  deleteCategory,
}
