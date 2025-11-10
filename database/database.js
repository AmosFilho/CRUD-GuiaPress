require("dotenv").config();

const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', process.env.SQL_DB_KEY, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;