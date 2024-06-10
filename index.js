const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://gabrielcgimenes:rrpCFvvb1dnzjaVc@backenddb.iyb5wkq.mongodb.net/listDB?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log("Connection failed!");
})

app.get('/', (req, res) => {
    res.send("Hello from node API")
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})