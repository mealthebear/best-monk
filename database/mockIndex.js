const Sequelize = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    host: localhost,
    dialect: 'sql'
});

db.authenticate()
  .then(() => console.log('Connected to the database successfully!')) 
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;