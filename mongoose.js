const mongoose = require('mongoose')

const Product = require('./models/product')

const createProduct = async (req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.prince
    })
}

exports.createProduct = createProduct