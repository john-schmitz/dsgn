const db = require("../model/");
const criptografia = require("../services/criptografia");

const designerController = {};

const criar = async function (req, res, next) {
	const body = req.body;
	await db.designer.findOne({ where: { email: body.email } }).then(designer => {
		if (designer)
			return next("O email informado já consta no banco de dados.");
	}).catch(erro => {
		return next(erro);
	});

	body.senha = criptografia.criptografar(body.senha);

	db.designer.create(body).then(() => {
		res.status(200).send({ mensagem: "Sucesso" });
	}).catch(erro => {
		return next(erro);
	});
};
const get = async function (req, res) {

	const idDesigner = req.params.designer_id;

	db.designer.findOne({ where: { id: idDesigner } }).then((admin) => {
		res.json(admin);
	});
};
const atualizar = async function (req, res, next) {
	const idDesigner = req.params.designer_id;
	const body = req.body;

	body.senha = criptografia.criptografar(body.senha);

	db.admin.update(body, { where: { id: idDesigner } }).then(() => {
		res.status(200).send({ mensagem: "Sucesso" });
	}).catch(erro => {
		return next(erro);
	});

};

designerController.get = get;
designerController.atualizar = atualizar;
designerController.criar = criar;

module.exports = designerController;