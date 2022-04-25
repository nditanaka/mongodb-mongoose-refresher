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

exports.createProduct = createProduct