// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Use CORS middleware to allow all domains to access the API
app.use(cors());

// Define your routes
const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/200' },
  // Add more products as needed
];

// Route to fetch products
app.get('/products', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set the correct content type for JSON
  res.json(products);  // Respond with the products array in JSON format
});

// Start the server and listen on port 3000
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
