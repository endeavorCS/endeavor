const model = require('../model/model.js');

function getUserInfo (req, res) {
  const username = req.params.user;
  console.log(username);
  model.getUserData(username, (userData) => res.send(userData));
}

module.exports = { getUserInfo };