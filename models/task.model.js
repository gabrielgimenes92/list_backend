const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, 'Please enter a task'],
    },
    completedAt: {
      type: Date,
      required: false,
      nullable: true,
    },
    checked: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
