// require('dotenv').config();
// const uri = process.env.MONGO_URI;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoute = require('./routes/task.route.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/tasks', taskRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.get('/', (req, res) => {
  res.send('Hello from node API');
});
