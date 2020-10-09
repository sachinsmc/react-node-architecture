const Sequelize = require('sequelize');
const sequelize = new Sequelize('reactnode', 'db_user1', 'yourpassword', {
  host: '127.0.0.1',
  port: 8889,
  dialect: 'mysql'
 })
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// CREATE USER 'db_user1'@'%' IDENTIFIED BY 'yourpassword‘;
// GRANT ALL PRIVILEGES ON *.* TO 'db_user1'@'%' WITH GRANT OPTION;
// FLUSH PRIVILEGES;