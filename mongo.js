const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://shonacoder:oUcBmBYNgAxd5qAD@cluster0.5q4gx.mongodb.net/products_test?retryWrites=true&w=majority'
const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }
    const client = new MongoClient(url) // tells mongodb which server we want to connect to

    try {
        await client.connect() // establish connection to server
        const db = client.db()
        const result = db.collection('products').insertOne(newProduct)
    } catch (error) {
        return res.json({message: 'Could not store data.'})
    }
    client.close()
    
    res.json(newProduct)
    
}

const getProducts = async (req, res, next) => {

}

exports.createProduct = createProduct
exports.getProducts = getProducts