require('dotenv').config()

const Sequelize = require('sequelize');
const ENV = process.env;
const sequelize = new Sequelize(ENV.DB, ENV.DB_USERNAME, ENV.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('models/users.model.js')(sequelize, Sequelize);


module.exports = db;