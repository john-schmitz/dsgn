"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dir = path.basename(__filename);
const db = {};
const CONFIG = require("../config/config");

const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
	host: CONFIG.db_host,
	dialect: CONFIG.db_dialect,
	port: CONFIG.db_port,
	operatorsAliases: false
});

fs.readdirSync(__dirname)
	.filter((file) => {
		return (file.indexOf(".") !== 0) && (file !== dir) && (file.slice(-3) === ".js");
	})
	.forEach((file) => {
		let model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(db).forEach((model) => {
	if (db[model].associar) {
		db[model].associar(db);
	}
});

module.exports = db;