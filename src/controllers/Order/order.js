import { Address, Order } from '../../models/index.js'

const getOrdersByUserId = async (req, res) => {
  try {
    const { id } = req.body
    const data = await Order.findAll({ where: { userId: id } })
    data === null
      ? res.status(400).send({
        message: 'Order with id ' + id + ' not found',
        success: false
      })
      : res.status(200).send({
        message: 'Order with id ' + id + ' found',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createOrder = async (req, res) => {
  try {
    const { userId } = req.body
    const address = await Address.findOne({ where: { userId } })
    const data = await Order.create({
      userId,
      addressId: address.id
    })
    res.send({
      message: 'Order created',
      success: true,
      data
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getOrdersByUserId, createOrder }
