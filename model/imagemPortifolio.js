"use strict";
//TO-DO: Associação
module.exports = (sequelize, DataTypes) => {

	const Imagem = sequelize.define("imagemPortifolio", {
		titulo: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		descricao: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		ordem: {
			type: DataTypes.INTEGER(),
			allowNull: false
		}
	}, {
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});
	return Imagem;
};