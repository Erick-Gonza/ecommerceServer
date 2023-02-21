import Cart from '../../models/Cart/Cart.js'

const getCart = async (req, res) => {
  try {
    const data = await Cart.findAll()
    data.length === 0
      ? res.status(400).send({ message: 'No cart found', success: false })
      : res.status(200).send({ message: 'Get all cart', success: true, data })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdCart = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Cart.findByPk(id)
    data.length === 0
      ? res.status(400).send({
          message: 'Cart with id ' + id + ' not found',
          success: false,
        })
      : res.status(200).send({
          message: 'Cart with id ' + id + ' found',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createCart = async (req, res) => {
  try {
    const { quantity, total, userId, productId } = req.body
    const data = await Cart.create({
      quantity,
      total,
      userId,
      productId,
    })
    res.send({
      message: `Cart created`,
      success: true,
      data,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateCart = async (req, res) => {
  try {
    const { id } = req.params
    const { quantity, total, userId, productId } = req.body
    const data = await Cart.update(
      {
        quantity,
        total,
        userId,
        productId,
      },
      {
        where: { id },
      }
    )

    res.send({
      message: `Cart updated`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params
    await Cart.destroy({
      where: {
        id,
      },
    })
    res.send({ message: `Cart with ${id} deleted`, success: true })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getCart, getByIdCart, createCart, updateCart, deleteCart }