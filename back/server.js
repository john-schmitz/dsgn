var bodyParser = require("body-parser")
var path = require('path')
//decalração express
var express = require('express')
var app = express();
app.use(express.static('../public'))
app.use(bodyParser.json())
const porta = 5500
const caminhoHtml = path.join(__dirname, "..", 'docs', 'html')

//roteamento dos html
app.get("/", function (req, res) {
    res.sendFile(path.join(caminhoHtml, '..', "index.html"))
})
app.listen(5500)
console.log("Servidor rodando na porta " + porta);
