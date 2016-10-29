const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const model = require('./model/model.js');
const routeControllers = require('./routes/controllers.js');

// Serve static
app.use(express.static(path.join(__dirname, '../../bin')));
//Handle gets
app.get('/user/basic/:user', routeControllers.getUserInfoController);
app.get('/user/related_projects/:user', routeControllers.getRelatedProjectsController);
app.get('/user/related_interests/:user', routeControllers.getRelatedInterestsController);
// app.get('/user/suggested_projects/:user', routeControllers.getRelatedProjectsController);

app.get('/project/basic/:project', routeControllers.getProjectInfoController);
app.get('/project/related_users/:project', routeControllers.getProjectUsersController);
app.get('/project/related_interests/:project', routeControllers.getProjectInterestsController);

// Handle posts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Establish server
app.listen(3000, () => {
  console.log('Listening on port 3000.');
});