const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON request bodies

// Route setup
const formRoutes = require('./routes/formRoute.cjs');
app.use('/api/forms', formRoutes);  // Mount form routes under /api/forms

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // Start server after successful database connection
    app.listen(4000, () => console.log('Server running on port 4000'));
  })
  .catch((err) => console.error(err.message));