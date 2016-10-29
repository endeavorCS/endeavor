const model = require('../model/model.js');

//user info

function getUserInfoController (req, res) {
  const username = req.params.user;
  model.getUserData(username, (userData) => res.json(userData));
}

function getRelatedProjectsController (req, res) {
  const username = req.params.user;
  model.getRelatedProjects(username, (projectData) => res.json(projectData));
}

function getRelatedInterestsController (req, res) {
  const username = req.params.user;
  model.getRelatedInterests(username, (projectData) => res.json(projectData));
}

function getSuggestedProjectsController (req, res) {
  const username = req.params.user;
  model.getSuggestedProjects(username, (projectData) => res.json(projectData));
}

// to make one get request for all the data
function getAllDataForUser (req, res) {
  const username = req.params.user;
  const data = [];

  function promNight (func) {
    return new Promise( (resolve, reject) => {
      func(username, (userData) => {
        data.push(userData);
        resolve();  
      })
    });
  }
  let promArray = [promNight(model.getUserData), promNight(model.getRelatedProjects), 
  promNight(model.getRelatedInterests), promNight(model.getSuggestedProjects)];

  Promise.all(promArray)
  .then(()=>{
    data.push(req.user._json);
    res.json(data);
  });
}


//project data

function getProjectInfoController (req, res) {
  const project = req.params.project;
  model.getProjectInfo(project, (projectData) => res.json(projectData));
}

function getProjectUsersController (req, res) {
  const project = req.params.project;
  model.getProjectUsers(project, (projectData) => res.json(projectData));
}

function getProjectInterestsController (req, res) {
  const project = req.params.project;
  model.getProjectInterests(project, (projectData) => res.json(projectData));
}

function getAllDataForProject (req, res) {

  const project = req.params.project;
  const data = [];

  function promNight (func) {
    return new Promise( (resolve, reject) => {
      func(project, (projectData) => {
        data.push(projectData);
        resolve();  
      })
    });
  }
  let promArray = [promNight(model.getProjectInfo), promNight(model.getProjectUsers), 
  promNight(model.getProjectInterests)];

  Promise.all(promArray)
  .then(()=>{
    data.push(req.user._json);
    res.json(data);
  });
}


module.exports = { 
  getUserInfoController,
  getRelatedProjectsController,
  getRelatedInterestsController,
  getProjectInfoController,
  getProjectUsersController,
  getProjectInterestsController,
  getSuggestedProjectsController,
  getAllDataForUser,
  getAllDataForProject
};