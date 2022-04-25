const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose') // or ./mongo for the vanilla MongoClient middleware

const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.listen(3000);