const MongoClient = require('mongodb').MongoClient
require('dotenv').config();

const url =`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority`

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
//   client.close(); // should be included to close the open connection but might not be necessary actually because sockets are pooled??

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
