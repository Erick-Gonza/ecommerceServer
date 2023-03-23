import { Order, OrderDetail } from '../../models/index.js'

const getOrderDetailByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const data = await OrderDetail.findByPk(id)
    data === null
      ? res.status(400).send({
        message: 'OrderDetail with id ' + id + ' not found',
        success: false
      })
      : res.status(200).send({
        message: 'OrderDetail with id ' + id + ' found',
        success: true,
        data
      })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createOrderDetail = async (req, res) => {
  const { quantity, productId, orderId } = req.body
  const orderItem = await OrderDetail.create({
    quantity,
    orderId,
    productId
  })

  res.status(201).send({
    message: 'order item added',
    success: true,
    orderItem
  })
  // try {
  //   const { quantity, productId, orderId } = req.body
  //   const order = await OrderDetail.findByPk(orderId)
  //   const orderItem = await OrderDetail.create({
  //     quantity,
  //     orderId: order.id,
  //     productId
  //   })

  //   res.status(201).send({
  //     message: 'order item added',
  //     success: true,
  //     orderItem
  //   })
  // } catch (error) {
  //   res.status(400).send({ message: error, success: false })
  // }
}

export {
  getOrderDetailByUserId,
  createOrderDetail
}
