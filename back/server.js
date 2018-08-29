var bodyParser = require("body-parser")
var path = require('path')
//decalração express
var express = require('express')
var app = express();
app.use(express.static('../public'))
const porta = 5500
app.listen(5500)
console.log("Servidor rodando na porta " + porta);
