const Task = require('../models/task.model')

const getTasks = async (req, res) => {
    try {
    const products = await Task.find({});
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({message: error.message})
}}

const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Task.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res) => {
    try {
        const product = await Task.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const editTask = async (req, res) => {
    try {
        const {id} = req.params;
        const updateProduct = await Task.findByIdAndUpdate(id, req.body);

        if (!updateProduct) {
            return res.status(404).json({message: "Product not found"})
        } else {
            const product = await Task.findById(id);
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Task.findByIdAndDelete(id)

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
        const products = await Task.findByIdAndUpdate(id, currentDate);
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
        const products = await Task.findByIdAndUpdate(id, currentDate);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
}}

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
    setTaskCompleted,
    unsetTaskCompleted
}