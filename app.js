const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key';

// Login route (stateless)
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // In a real scenario, authenticate the user
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
