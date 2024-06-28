const Task = require('../models/task.model');

const getTasks = async (req, res) => {
  try {
    let checkedTasks = [];
    const tasks = await Task.find({});
    for (let i = 0; i < tasks.length; i++) {
      checkedTasks.push(tasks[i]);

      if (tasks[i].completedAt) {
        checkedTasks[i].checked = 'true';
      } else {
        checkedTasks[i].checked = 'false';
      }
    }
    res.status(200).json(checkedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatetask = await Task.findByIdAndUpdate(id, req.body);

    if (!updatetask) {
      return res.status(404).json({ message: 'Task not found' });
    } else {
      const task = await Task.findById(id);
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json({ message: 'task deleted successfully' });
    }
  } catch (error) {}
};

const setTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    let currentDate = {
      completedAt: new Date(),
    };
    const tasks = await Task.findByIdAndUpdate(id, currentDate);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unsetTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    let currentDate = {
      completedAt: null,
    };
    const tasks = await Task.findByIdAndUpdate(id, currentDate);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
  setTaskCompleted,
  unsetTaskCompleted,
};
