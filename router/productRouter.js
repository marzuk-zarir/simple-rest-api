const productRouter = require('express').Router()
const {
    getAllProducts,
    getSingleProduct,
    createSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
} = require('../controllers/ProductController')

// GET - /products/ - Get all products
productRouter.get('/', getAllProducts)

// GET - /products/:id - Get a single product
productRouter.get('/:id', getSingleProduct)

// POST - /products/ - Create a single product
productRouter.post('/', createSingleProduct)

// PUT - /products/:id - Update a single product
productRouter.put('/:id', updateSingleProduct)

// DELETE - /products/:id - Delete a single product
productRouter.delete('/:id', deleteSingleProduct)

module.exports = productRouter
