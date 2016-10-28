const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const model = require('./model/model.js');
const routeControllers = require('./routes/controllers.js');

// Serve static
app.use(express.static(path.join(__dirname, '../../bin')));
//Handle gets
app.get('/user/basic/:user', routeControllers.getUserInfo);
// Handle posts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Establish server
app.listen(3000, () => {
  console.log('Listening on port 3000.');
});