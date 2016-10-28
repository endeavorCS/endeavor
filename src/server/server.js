const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Serve static
app.use(express.static(path.join(__dirname, '../../bin')));

// Handle posts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Establish server
app.listen(3000, () => {
  console.log('Listening on port 3000.');
});