import { Order } from '../../models/index.js'

const getOrder = async (req, res) => {
  try {
    const data = await Order.findAll()
    data.length === 0
      ? res.status(400).send({ message: 'No Order found', success: false })
      : res.status(200).send({ message: 'Get all Order', success: true, data })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdOrder = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Order.findByPk(id)
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
    const { userId, addressId } = req.body
    const data = await Order.create({
      userId,
      addressId
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

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params
    const { userId, addressId } = req.body
    const data = await Order.update(
      {
        userId,
        addressId
      },
      {
        where: { id }
      }
    )

    res.send({
      message: 'Order updated',
      success: true,
      data
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params
    await Order.destroy({
      where: {
        id
      }
    })
    res.send({ message: `Order with ${id} deleted`, success: true })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export { getOrder, getByIdOrder, createOrder, updateOrder, deleteOrder }
