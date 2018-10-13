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

db.area = require("../model/area.js")(sequelize, Sequelize);
db.cliente = require("../model/cliente.js")(sequelize, Sequelize);
db.designer = require("../model/designer.js")(sequelize, Sequelize);
db.imagemPortifolio = require("../model/imagemPortifolio.js")(sequelize, Sequelize);
db.mensagem = require("../model/mensagem.js")(sequelize, Sequelize);
db.moderador = require("../model/moderador.js")(sequelize, Sequelize);
db.projeto = require("../model/projeto.js")(sequelize, Sequelize);
db.proposta = require("../model/proposta.js")(sequelize, Sequelize);
db.versao = require("../model/versao.js")(sequelize, Sequelize);

module.exports = db;
