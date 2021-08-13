const controller = {}

controller.getAllProducts = (req, res) => {
    res.send('All products')
}

controller.getSingleProduct = (req, res) => {
    res.send('Get a single product')
}

controller.createSingleProduct = (req, res) => {
    res.send('Create a single product')
}

controller.updateSingleProduct = (req, res) => {
    res.send('Update a single product')
}

controller.deleteSingleProduct = (req, res) => {
    res.send('Delete a single product')
}

module.exports = controller
