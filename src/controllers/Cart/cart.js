import CartItem from '../../models/Cart/CartItem.js'
import { Cart, Product, User } from '../../models/index.js'

const getCart = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Cart.findByPk(id, { include: [{ all: true }] })
    data === null
      ? res.status(400).send({
        message: 'cart not found',
        success: false
      })
      : res.status(200).send({
        message: 'cart',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const addToCart = async (req, res) => {
  try {
    const { productId, userId } = req.body
    // que producto exista
    // !product && new Error("Product doesn't exist")
    const product = await Product.findByPk(productId)

    if (product === null) {
      res.status(400).send({
        message: 'Cart with id ' + productId + ' not found',
        success: false
      })
      return
    }
    // que usuario exista
    const user = await User.findByPk(userId)
    if (user === null) {
      res.status(400).send({
        message: ' with id ' + userId + ' not found',
        success: false
      })
      return
    }
    // que usuario tenga un carrito
    let cart = await Cart.findOne({ where: { userId } })
    if (cart === null) {
      cart = await Cart.create({
        userId
      })
    }

    const cartItem = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId
      }
    })
    if (cartItem === null) {
      await CartItem.create({
        cartId: cart.id,
        productId,
        quantity: 1
      })
    } else {
      await cartItem.update({
        quantity: cartItem.quantity + 1
      })
    }
    res.status(201).send({
      message: 'product added to cart',
      success: true
    })

    // crear cart item
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateCartItem = async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body
    const cart = await Cart.findOne({ where: { userId } })
    const cartItem = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId
      }
    })

    if (cartItem === null) {
      await CartItem.create({
        cartId: cart.id,
        productId,
        quantity
      })
    } else {
      await cartItem.update({
        quantity
      })
    }

    res.status(201).send({
      message: 'cart item updated',
      success: true
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { addToCart, getCart, updateCartItem }
