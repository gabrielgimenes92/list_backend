const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
    const products = await Product.find({});
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({message: error.message})
}}

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const editProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);

        if (!updateProduct) {
            return res.status(404).json({message: "Product not found"})
        } else {
            const product = await Product.findById(id);
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json({ message: "Product not found"})
        } else {
            res.status(200).json({ message: "Product deleted successfully"})
        }

    } catch (error) {
}}

const setTaskCompleted = async (req, res) => {
    try {
        const {id} = req.params;
        let currentDate = {
            completedAt: new Date()
        }
        const products = await Product.findByIdAndUpdate(id, currentDate);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
}}

const unsetTaskCompleted = async (req, res) => {
    try {
        const {id} = req.params;
        let currentDate = {
            completedAt: null
        }
        const products = await Product.findByIdAndUpdate(id, currentDate);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
}}

module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    editProduct,
    deleteProduct,
    setTaskCompleted,
    unsetTaskCompleted
}