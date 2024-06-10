const express = require("express");
const router = express.Router();
const {getProducts, getSingleProduct, createProduct, editProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts);

router.get('/:id', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

module.exports = router;