const mongoose = require('mongoose')
require('dotenv').config();

const Product = require('./models/product')

const url =`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority`

mongoose.connect(url)
    .then(() => {
    console.log('Connected to database!')
    }).catch(() => {
    console.log('Connection failed!')
})


const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })
    const result = createdProduct.save()
    res.json(createdProduct)
}

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec() // mongoose find method returns an array by default. exec() returns a promise thus the await.
    res.json(products)
}


exports.createProduct = createProduct
exports.getProducts = getProducts