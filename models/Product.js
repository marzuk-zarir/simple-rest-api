class Product {
    constructor() {
        this.products = []
    }

    getAllProducts() {
        return this.products
    }

    getProductById(id) {
        return this.products.find((product) => product.id === id)
    }

    createProduct(product) {
        product.id = this.products.length + 1
        this.products.push(product)
        return product
    }

    updateProductById(id, product) {
        const index = this.products.findIndex((product) => product.id === id)

        if (index === undefined) return false

        this.products[index].name = product.name || this.products[index].name
        this.products[index].price = product.price || this.products[index].price
        this.products[index].description =
            product.description || this.products[index].description

        return this.products[index]
    }

    deleteProductById(id) {
        const deleteProduct = this.products.find((product) => product.id === id)
        this.products = this.products.filter((product) => product.id !== id)
        return deleteProduct
    }
}

module.exports = Product
