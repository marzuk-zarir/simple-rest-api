const express = require('express')
const morgan = require('morgan')
const productRouter = require('./router/productRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/products', productRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
