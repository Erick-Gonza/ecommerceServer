import { Product, Category, SubCategory } from '../../models/index.js'
const getAllProduct = async (req, res) => {
  try {
    const data = await Product.findAll()
    data.length === 0
      ? res.status(400).send({
          message: 'No products found',
          success: false,
        })
      : res.status(200).send({
          message: 'Get all products',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Product.findByPk(id)
    data === null
      ? res.status(400).send({
          message: `Product with id ${id} not found`,
          success: false,
        })
      : res.status(200).send({
          message: `Product with id ${id} found`,
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      imageUrl,
      subcategoryId,
    } = req.body
    const [product, created] = await Product.findOrCreate({
      where: {
        name,
      },
      defaults: {
        description,
        price,
        stock,
        imageUrl,
        subcategoryId,
      },
    })
    created === true
      ? res.send({
          message: 'Product created',
          success: true,
          product,
        })
      : res.send({
          message: 'Product already exists',
          success: false,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const {
      name,
      description,
      price,
      stock,
      imageUrl,
      subCategoryId,
    } = req.body

    const data = await Product.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Product with id ${id} not found`,
        success: false,
      })
    } else {
      await Product.update(
        {
          name,
          description,
          price,
          // discount,
          stock,
          imageUrl,
          subCategoryId,
        },
        {
          where: { id },
        }
      )
      res.send({
        message: 'Product updated',
        success: true,
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Product.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Product with id ${id} not found`,
        success: false,
      })
    } else {
      await Product.destroy({
        where: {
          id,
        },
      })
      res.send({
        message: `Product with ${id} deleted`,
        success: true,
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
