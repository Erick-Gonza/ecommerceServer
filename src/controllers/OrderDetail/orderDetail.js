import OrderDetail from '../../models/Order/OrderDetail.js'

const getOrderDetail = async (req, res) => {
  try {
    const data = await OrderDetail.findAll()
    data.length === 0
      ? res
          .status(400)
          .send({ message: 'No OrderDetail found', success: false })
      : res
          .status(200)
          .send({ message: 'Get all OrderDetail', success: true, data })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const getByIdOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    const data = await OrderDetail.findByPk(id)
    data === null
      ? res.status(400).send({
          message: 'OrderDetail with id ' + id + ' not found',
          success: false,
        })
      : res.status(200).send({
          message: 'OrderDetail with id ' + id + ' found',
          success: true,
          data,
        })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const createOrderDetail = async (req, res) => {
  try {
    const { quantity, total, userId, productId } = req.body
    const data = await OrderDetail.create({
      quantity,
      total,
      userId,
      productId,
    })
    res.send({
      message: `OrderDetail created`,
      success: true,
      data,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const updateOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    const { quantity, total, userId, productId } = req.body
    const data = await OrderDetail.update(
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
      message: `OrderDetail updated`,
      success: true,
    })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

const deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    await OrderDetail.destroy({
      where: {
        id,
      },
    })
    res.send({ message: `OrderDetail with ${id} deleted`, success: true })
  } catch (error) {
    res.status(400).send({ message: error, success: false })
  }
}

export {
  getOrderDetail,
  getByIdOrderDetail,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
}
