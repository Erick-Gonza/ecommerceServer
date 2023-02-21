import WishList from '../../models/WishList/WishList.js'

const getByIdWishList = async (req, res) => {
  try {
    const { id } = req.params
    const data = await WishList.findByPk(id)
    data === null
      ? res.status(400).send({
          message: 'wishlist with id ' + id + ' not found',
          success: false,
        })
      : res.status(200).send({
          message: 'wishlist with id ' + id + ' found',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createWishList = async (req, res) => {
  try {
    const { wishlistId, productId, userId } = req.body
    const wishList = await WishList.create({
      wishlistId,
      productId,
      userId,
    })
    res.send({
      message: 'WishList created',
      success: true,
      wishList,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateWishList = async (req, res) => {
  try {
    const { id } = req.params
    const { wishlistId, productId, userId } = req.body
    const WishList = await WishList.update(
      {
        wishlistId,
        productId,
        userId,
      },
      {
        where: { id },
      }
    )
    res.send({
      message: 'WishList updated',
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteWishList = async (req, res) => {
  try {
    const { id } = req.params
    await WishList.destroy({
      where: {
        id,
      },
    })
    res.send({
      message: `WishList with ${id} deleted`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getByIdWishList, createWishList, updateWishList, deleteWishList }
