// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});