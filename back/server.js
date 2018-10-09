const db = require("./config/db");
//decalração express
const express = require("express");
const app = express();
const porta = 5500;

app.use(express.static("../public"));

db.sequelize.sync().then(() => {
	app.listen(porta);
	//eslint-disable-next-line
    console.log("Servidor rodando na porta " + porta);
});