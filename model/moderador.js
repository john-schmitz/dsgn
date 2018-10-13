"use strict";
//  TO-DO:associação
module.exports = (sequelize, DataTypes) => {

	const Moderador = sequelize.define("moderador", {
		email: {
			type: DataTypes.STRING(254),
			allowNull: false,

		},
		senha: {
			type: DataTypes.STRING(255),
			allowNull: false,
		}
	}, {
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});

	return Moderador;
};