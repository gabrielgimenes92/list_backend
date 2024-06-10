const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/api/products", productRoute)


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