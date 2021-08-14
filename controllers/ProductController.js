const Product = require('../models/Product')
const product = new Product()
const controller = {}

controller.getAllProducts = (req, res) => {
    res.json(product.getAllProducts())
}

controller.getSingleProduct = (req, res) => {
    const getProduct = product.getProductById(+req.params.id)
    if (getProduct) {
        res.json(getProduct)
    } else {
        res.status(404).json({ error: 'Product id not found' })
    }
}

controller.createSingleProduct = (req, res) => {
    const { name, price, description } = req.body

    if (name && price && description) {
        res.json(product.createProduct({ name, price, description }))
    } else {
        res.status(400).send({ error: 'There was a problem in your request' })
    }
}

controller.updateSingleProduct = (req, res) => {
    const { name, price, description } = req.body

    if (name || price || description) {
        const updateProduct = product.updateProductById(+req.params.id, {
            name,
            price,
            description,
        })
        if (updateProduct) {
            res.json(updateProduct)
        } else {
            res.status(404).json({ error: 'Product id not found' })
        }
    } else {
        res.status(400).send({ error: 'There was a problem in your request' })
    }
}

controller.deleteSingleProduct = (req, res) => {
    const deleteProduct = product.deleteProductById(+req.params.id)

    if (deleteProduct) {
        res.json(deleteProduct)
    } else {
        res.status(404).json({ error: 'Product id not found' })
    }
}

module.exports = controller
