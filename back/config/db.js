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

db.area = require("../model/area")(sequelize, Sequelize);
db.cliente = require("../model/cliente")(sequelize, Sequelize);
db.designer = require("../model/designer")(sequelize, Sequelize);
db.imagemPortifolio = require("../model/imagemPortifolio")(sequelize, Sequelize);
db.mensagem = require("../model/mensagem")(sequelize, Sequelize);
db.moderador = require("../model/moderador")(sequelize, Sequelize);
db.projeto = require("../model/projeto")(sequelize, Sequelize);
db.proposta = require("../model/proposta")(sequelize, Sequelize);
db.versao = require("../model/versao")(sequelize, Sequelize);

module.exports = db;