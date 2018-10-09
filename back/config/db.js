"use strict";

const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:123456@localhost:3306/dsgn", {
	timezone: "-03:00"
});

sequelize.authenticate().then(() => {
	// eslint-disable-next-line
    console.log("Banco Conectado");

}).catch(err => {
	// eslint-disable-next-line
    console.log(err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.designer = require("../model/designer")(sequelize, Sequelize);

module.exports = db;