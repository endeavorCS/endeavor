var Sequelize = require('sequelize');
const sequelize = new Sequelize('endeavor', 'pdivine', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var User = sequelize.define('user', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.TEXT
  },
  email_address: {
    type: Sequelize.TEXT
  },
  pw: {
    type: Sequelize.TEXT
  },
  createdAt: {
   type: Sequelize.DATE,
   default: Date.now
 },
 updatedAt: {
   type: Sequelize.DATE,
   default: Date.now
 },
});

sequelize.sync({
  logging: console.log,
  force: true // true will drop the table and rebuild (for dev)
}).then(() => {
  const users = [
    {
      first_name: 'hoon',
      email_address: 'patrick@email.com',
      pw: 'a'
    },
    {
      first_name: 'nick',
      email_address: 'patrick@email.com',
      pw: 'a'
    },
    {
      first_name: 'dan',
      email_address: 'patrick@email.com',
      pw: 'a'
    },
    {
      first_name: 'patrick',
      email_address: 'patrick@email.com',
      pw: 'a'
    },
  ];
  User.bulkCreate(users, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });
});

function getUserData (callback) {}
module.exports.getUserData = getUserData;