// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const playersRoute = require('./routes/players');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/monopoly_db';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('Connected to MongoDB');
    })
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    });

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your Monopoly API!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
