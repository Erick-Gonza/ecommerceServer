import CartItem from '../../models/Cart/CartItem.js'
import { WishList, Product, User } from '../../models/index.js'
import WishListItem from '../../models/WishList/WishListItem.js'

const getWishList = async (req, res) => {
  try {
    const { id } = req.params
    const data = await WishList.findByPk(id, { include: [{ all: true }] })

    data === null
      ? res.status(400).send({
        message: 'wishlist not found',
        success: false
      })
      : res.status(200).send({
        message: 'wishlist',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const addToWishList = async (req, res) => {
  try {
    const { productId, userId } = req.body
    // que producto exista
    const product = await Product.findByPk(productId)
    if (product === null) {
      res.status(400).send({
        message: 'product with id ' + productId + ' not found',
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
    // que usuario tenga wl
    let wishlist = await WishList.findOne({ where: { userId } })
    if (wishlist === null) {
      wishlist = await WishList.create({
        userId
      })
    }

    const wishlistItem = await WishListItem.findOne({
      where: {
        wishListId: wishlist.id,
        productId
      }
    })
    if (wishlistItem === null) {
      await CartItem.create({
        cartId: user.id,
        productId,
        quantity: 1
      })
      res.status(201).send({
        message: 'product added to wishlist',
        success: true
      })
    } else {
      res.send({
        message: 'product already in wl',
        success: true
      })
    }
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteFromWishlist = async (req, res) => {
  try {
    const { productId, userId } = req.body
    const product = await Product.findByPk(productId)
    // que producto exista
    if (product === null) {
      res.status(400).send({
        message: 'product with id ' + productId + ' not found',
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
    // que usuario tenga wl
    const wishlist = await WishList.findOne({ where: { userId } })
    wishlist === null &&
      res.status(400).send({
        message: 'wishlist not found',
        success: false
      })

    const wishlistItem = await WishListItem.findOne({
      where: {
        wishListId: wishlist.id,
        productId
      }
    })
    wishlistItem === null
      ? res.status(400).send({
        message: 'product not found in wishlist',
        success: false
      })
      : wishlistItem.destroy({ where: { id: wishlistItem.id } })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getWishList, addToWishList, deleteFromWishlist }
