// Qui puoi definire i modelli Sequelize
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './config/database.sqlite'
});

module.exports = { sequelize };
