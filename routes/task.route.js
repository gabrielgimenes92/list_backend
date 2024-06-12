const express = require("express");
const router = express.Router();
const {getTasks, getSingleTask, createTask, editTask, deleteTask, setTaskCompleted, unsetTaskCompleted} = require('../controllers/task.controller.js')

router.get('/', getTasks);

router.get('/:id', getSingleTask);

router.post('/', createTask);

router.put('/:id', editTask);

router.delete('/:id', deleteTask);

router.put('/complete/:id', setTaskCompleted);

router.put('/uncomplete/:id', unsetTaskCompleted);

module.exports = router;