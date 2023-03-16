import { Product, Category, Subcategory } from '../../models/index.js'
const getAllProduct = async (req, res) => {
  try {
    const data = await Product.findAll({ include: [{ all: true }] })
    data.length === 0
      ? res.status(400).send({
        message: 'No products found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all products',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Product.findByPk(id, {
      include: [
        { model: Category, attributes: ['name'] },
        { model: Subcategory, attributes: ['name'] }
      ]
    })
    data === null
      ? res.status(400).send({
        message: `Product with id ${id} not found`,
        success: false
      })
      : res.status(200).send({
        message: `Product with id ${id} found`,
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getAllProductByCategoryId = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Category.findByPk(id)
    const products = await data.getProducts()

    data === null
      ? res.status(400).send({
        message: 'Products with the category Id not found',
        success: false
      })
      : res.send({
        data: {
          products,
          category: data
        },
        success: true
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId, subcategoryId } =
      req.body
    const { files } = req
    // console.log(files[0])
    // console.log(files[0].originalname)
    const imageUrl = files[0].filename
    const [product, created] = await Product.findOrCreate({
      where: {
        name
      },
      defaults: {
        name,
        description,
        price,
        stock,
        categoryId,
        subcategoryId,
        imageUrl
      }
    })
    created === true
      ? res.send({
        message: 'Product created',
        success: true,
        product
      })
      : res.send({
        message: 'Product already exists',
        success: false
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, price, stock, imageUrl, SubcategoryId } =
      req.body

    const data = await Product.findByPk(id)
    if (data === null) {
      res.status(400).send({
        message: `Product with id ${id} not found`,
        success: false
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
          SubcategoryId
        },
        {
          where: { id }
        }
      )
      res.send({
        message: 'Product updated',
        success: true
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
        success: false
      })
    } else {
      await Product.destroy({
        where: {
          id
        }
      })
      res.send({
        message: `Product with ${id} deleted`,
        success: true
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
  getAllProductByCategoryId
}
