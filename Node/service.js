const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');


const app = express();

// Middleware
app.use(express.json());

// Routes
// Define your routes for user registration, login, etc.
// For example:
app.post('/api/register', (req, res) => {
  // Handle user registration logic and save the user data to MongoDB
  const { email, password } = req.body;
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
mongoose.connect('mongodb+srv://fowedlungatsafac:agafina@cluster0.x3nwz3m.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  
  });
  
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Find the user based on the provided email
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              // Generate a JWT token for the authenticated user
              const token = jwt.sign({ userId: user._id }, 'your-secret-key');
  
              // Send the token as the response
              res.json({ token });
            } else {
              res.status(401).json({ error: 'Invalid credentials' });
            }
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to compare passwords' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to find user' });
      });
  });
  
// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  // This route can only be accessed by authenticated users
  res.json({ message: 'Protected route accessed successfully' });
});

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // Store the authenticated user in the request object
    req.user = user;

    next();
  });
}

  