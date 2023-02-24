import { Cart } from '../../models/index.js'

const getCart = async(req, res) => {
    try {
        const data = await Cart.findAll()
        data.length === 0 ?
            res.status(400).send({ message: 'No cart found', success: false }) :
            res.status(200).send({ message: 'Get all cart', success: true, data })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const getByIdCart = async(req, res) => {
    try {
        const { id } = req.params
        const data = await Cart.findByPk(id)
        data === null ?
            res.status(400).send({
                message: 'Cart with id ' + id + ' not found',
                success: false,
            }) :
            res.status(200).send({
                message: 'Cart with id ' + id + ' found',
                success: true,
                data,
            })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

//add product to cart
const createCart = async(req, res) => {
    try {
        const { userId } = req.body
        const data = await Cart.create({
            userId,
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

const updateCart = async(req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.body
        const data = await Cart.update({
            userId,
        }, {
            where: { id },
        })

        res.send({
            message: `Cart updated`,
            success: true,
        })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const deleteCart = async(req, res) => {
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