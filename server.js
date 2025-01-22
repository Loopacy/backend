// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Use CORS middleware to allow all domains to access the API
app.use(cors());

// Define your products array
const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/200' },
  // Add more products as needed
];

// Route to fetch products
app.get('/products', (req, res) => {
  res.json(products);  // Respond with the products array
});

// Define the port (either from environment or fallback to 3001 for local dev)
const PORT = process.env.PORT || 3001;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
