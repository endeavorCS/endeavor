const Sequelize = require('sequelize');
const sequelize = new Sequelize('endeavor', 'nicholasnelson', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: {
    type: Sequelize.TEXT
  },
  email_address: {
    type: Sequelize.TEXT
  },
  password: {
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

const Project = sequelize.define('project', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  github_link: {
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

const Interest = sequelize.define('interest', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  keyword: {
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

// Join tables
const User_Interest = sequelize.define('user_interest', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  interest_id: {
    type: Sequelize.INTEGER
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

const User_Project = sequelize.define('user_project', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  project_id: {
    type: Sequelize.INTEGER
  },
  like: {
    type: Sequelize.BOOLEAN
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

const Project_Interest = sequelize.define('project_interest', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  project_id: {
    type: Sequelize.INTEGER
  },
  interest_id: {
    type: Sequelize.INTEGER
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
      username: 'hoon',
      email_address: 'patrick@email.com',
      password: 'a'
    },
    {
      username: 'nick',
      email_address: 'patrick@email.com',
      password: 'a'
    },
    {
      username: 'dan',
      email_address: 'patrick@email.com',
      password: 'a'
    },
    {
      username: 'patrick',
      email_address: 'patrick@email.com',
      password: 'a'
    },
  ];

  const projects = [
    {
      name: 'Farmville',
      description: 'Build a farm',
      github_link: 'http://www.google.com'
    },
    {
      name: 'Hackernews',
      description: 'Software engineering blog.',
      github_link: 'http://www.google.com'
    },
    {
      name: 'Website',
      description: 'Build a website',
      github_link: 'http://www.google.com'
    },
  ];

  const interests = [
    {
      keyword: 'Javascript',
    },
    {
      keyword: 'React',
    },
    {
      keyword: 'ES6',
    },
  ];

  const user_interests = [
    {  user_id: '1',
      interest_id: '1'
    },
    {  user_id: '1',
      interest_id: '2'
    },
    {  user_id: '2',
      interest_id: '3'
    },
    {  user_id: '3',
      interest_id: '1'
    },
    {  user_id: '3',
      interest_id: '3'
    },
    {  user_id: '4',
      interest_id: '2'
    },
  ];
  const user_projects = [
    {  user_id: '1',
      project_id: '1'
    },
    {  user_id: '1',
      project_id: '2'
    },
    {  user_id: '2',
      project_id: '3'
    },
    {  user_id: '3',
      project_id: '1'
    },
    {  user_id: '3',
      project_id: '3'
    },
    {  user_id: '4',
      project_id: '2'
    },
  ];
  const project_interests = [
    {  interest_id: '1',
      project_id: '1'
    },
    {  interest_id: '1',
      project_id: '2'
    },
    {  interest_id: '2',
      project_id: '3'
    },
    {  interest_id: '3',
      project_id: '1'
    },
    {  interest_id: '3',
      project_id: '3'
    },
  ];

  User.bulkCreate(users, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

  Project.bulkCreate(projects, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

  Interest.bulkCreate(interests, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

  User_Interest.bulkCreate(user_interests, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

  User_Project.bulkCreate(user_projects, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

  Project_Interest.bulkCreate(project_interests, {validate: true})
  .catch((err) => {
    console.log('Create Error: ', err);
  });

});

function getUserData (username, callback) {
  User.findOne({where: { username: username}}).then((data) => {
    return data ? callback(data.dataValues) : callback(data);
  });
}

module.exports = { getUserData };