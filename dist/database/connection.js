"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    operationAliases: false,
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
        timezone: '+06:00',
    },
    timezone: '+06:00',
});
sequelize
    .authenticate()
    .then(() => {
    console.timeEnd('Database Connection Time');
    console.log('Database Connected');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
