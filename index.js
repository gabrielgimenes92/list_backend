// require('dotenv').config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT;

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

console.log(uri);
console.log(port);

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to database!');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.get('/', (req, res) => {
  res.send('Hello from node API');
});
