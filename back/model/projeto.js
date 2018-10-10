"use strict";
//  TO-DO:associação
module.exports = (sequelize, DataTypes) => {

	const Projeto = sequelize.define("projeto", {
		status: {
			type: DataTypes.BOOLEAN(),
			allowNull: false,
			defaultValue: false
		},
		statusPagameto: {
			type: DataTypes.BOOLEAN(),
			allowNull: false,
			defaultValue: false
		}
	},
	{
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});

	return Projeto;
};