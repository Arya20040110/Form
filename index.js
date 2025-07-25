const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve CSS files

// GET: homepage
app.get('/', (req, res) => {
  res.send('<a href="/login">Please Login Here!</a>');
});

// GET: login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// POST: handle login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Username: ${username}<br>Password: ${password}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

