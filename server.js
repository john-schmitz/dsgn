const routerapi = require("./routes");
const models = require("./model");
//decalração express
const express = require("express");
const app = express();
const CONFIG = require("./config/config");
const porta = CONFIG.port;




app.use(express.static("public"));
app.use("/api", routerapi);
models.sequelize.sync({
	force: true
}).then(() => {
	app.listen(porta);
	//eslint-disable-next-line
	console.log("Servidor rodando na porta " + porta);
});
