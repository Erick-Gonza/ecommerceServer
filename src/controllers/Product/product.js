import { Product, Category } from '../../models/index.js'
import db from '../../config/database.js'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const getAllProduct = async (req, res) => {
  try {
    const { userId } = req.params
    if (userId === undefined || userId === null) {
      const results = await Product.findAll({ include: [{ all: true }] })
      results.length === 0
        ? res.status(400).send({
          message: 'No products found',
          success: false
        })
        : res.status(200).send({
          message: 'Get all products ',
          success: true,
          results
        })
    } else {
      const [results] = await db.query(`SELECT Products.price as price,Products.id AS id, Products.name , Products.description , Products.imageUrl as imageUrl, Products.categoryId as CategoryId, UserWishListItem.productId IS NOT NULL AS isFavorite
      FROM Products
      LEFT JOIN (SELECT WishListItems.id as WishListItemId, WishListItems.productId
      FROM WishLists
      RIGHT JOIN WishListItems ON WishLists.id = WishListItems.wishlistId
      WHERE WishLists.userId = ${userId}) as UserWishListItem ON Products.id = UserWishListItem.productId`
      )
      results.length === 0
        ? res.status(400).send({
          message: 'No products found',
          success: false
        })
        : res.status(200).send({
          message: 'Get all products',
          success: true,
          results
        })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Product.findByPk(id, {
      include: [
        { model: Category, attributes: ['name'] }
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
    const { name, description, price, stock, categoryId, color } =
    req.body
    const { files } = req
    // handle base64 image
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const imageUrl = path.resolve(__dirname, `../../../uploads/${files[0].filename}`)
    const imageBase64 = fs.readFileSync(imageUrl, 'base64')
    const encodedImage = `data:image/png;base64,${imageBase64}`
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
        imageUrl: encodedImage,
        color
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
        success: false,
        encodedImage
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, price, stock, imageUrl, color, categoryId } =
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
          stock,
          imageUrl,
          color,
          categoryId
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
