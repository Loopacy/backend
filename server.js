// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Configure CORS to allow requests only from your GitHub Pages domain
const corsOptions = {
  origin: 'https://loopacy.github.io/frontend', // Your GitHub Pages URL
};

// Use CORS middleware with the configured options
app.use(cors(corsOptions));

// Define your products data (you can replace this with your actual data or a database query)
const products = [
  { id: 1, name: 'Custom Neon', price: '$10', image: 'https://imgur.com/undefinedhttps://imgur.com/mTkAJW5'},
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/200' },
  // Add more products as needed
];

// Route to fetch products
app.get('/products', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set the correct content type for JSON
  res.json(products);  // Respond with the products array in JSON format
});

// Use the dynamic port assigned by Render (or 3001 locally for development)
const port = process.env.PORT || 3001;

// Start the server and listen on the assigned port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
