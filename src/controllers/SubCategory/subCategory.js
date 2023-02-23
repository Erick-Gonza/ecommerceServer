import { SubCategory } from '../../models/index.js'

const getAllSubCategory = async (req, res) => {
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

const getByIdSubCategory = async (req, res) => {
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

const createSubCategory = async (req, res) => {
  try {
    const { subcategoryId, name, description } = req.body
    const subCategory = await SubCategory.create({
      subcategoryId,
      name,
      description,
    })
    res.send({
      message: 'SubCategory created',
      success: true,
      subCategory,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { subcategoryId, name, description } = req.body
    const SubCategory = await SubCategory.update(
      {
        subcategoryId,
        name,
        description,
      },
      {
        where: { id },
      }
    )
    res.send({
      message: 'SubCategory updated',
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params
    await SubCategory.destroy({
      where: {
        id,
      },
    })
    res.send({
      message: `SubCategory with ${id} deleted`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllSubCategory,
  getByIdSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
}
