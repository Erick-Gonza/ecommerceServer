import db from '../../config/database.js'
import { OrderDetail } from '../../models/index.js'

const getOrderDetailByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const [results] = await db.query(`SELECT OrderDetails.orderId as OrderId, OrderDetails.productId as ProductId, OrderDetails.quantity as ProductQuantity, Products.name AS ProductName, Products.imageUrl as ProductImage, Products.price as ProductPrice FROM OrderDetails INNER JOIN Orders ON Orders.id = OrderDetails.orderId INNER JOIN Products ON Products.id = OrderDetails.productId WHERE Orders.id = ${id}`)
    const data = results
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
  try {
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
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getOrderDetailByUserId,
  createOrderDetail
}
