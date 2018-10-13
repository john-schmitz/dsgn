const models = require("./model");
//decalração express
const express = require("express");
const app = express();
const porta = 5500;
// const CONFIG = require("./config/config");\

app.use(express.static("public"));

models.sequelize.sync({
	force: true
}).then(() => {
	app.listen(porta);
	//eslint-disable-next-line
	console.log("Servidor rodando na porta " + porta);
});
