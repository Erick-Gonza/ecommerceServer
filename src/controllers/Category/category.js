import Category from '../../models/Product/Category.js'

const getAllCategory = async(req, res) => {
    try {
        const data = await Category.findAll()
        data.length === 0 ?
            res.status(400).send({
                message: 'No categories found',
                success: false,
            }) :
            res.status(200).send({
                message: 'Get all categories',
                success: true,
                data,
            })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const getByIdCategory = async(req, res) => {
    try {
        const { id } = req.params
            // const data = await Category.findByIdPk(id, {
            //   include: [Subcategory],
            // })
        const data = await Category.findByPk(id)
        data.length === 0 ?
            res.status(400).send({
                message: `Category with id ${id} not found`,
                success: false,
            }) :
            res.status(200).send({
                message: `Category with id ${id} found`,
                success: true,
                data,
            })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const createCategory = async(req, res) => {
    try {
        const {
            name,
            description,
            subcategoryId,
        } = req.body
        const category = await Category.create({
            name,
            description,
            subcategoryId,
        })
        res.send({
            message: 'Category created',
            success: true,
            product,
        })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const updateCategory = async(req, res) => {
    try {
        const { id } = req.params
        const {
            name,
            description,
            subCategoryId,
        } = req.body
        const category = await Category.update({
            name,
            description,
            subCategoryId,
        }, {
            where: { id },
        })
        res.send({
            message: 'Category updated',
            success: true,
        })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params
        await Category.destroy({
            where: { id },
        })
        res.send({
            message: `Category with ${id} deleted`,
            success: true,
        })
    } catch (error) {
        res.status(400).send({ message: error, success: false })
    }
}

export {
    getAllCategory,
    getByIdCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}