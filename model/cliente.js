"use strict";
module.exports = (sequelize, DataTypes) => {

	const Cliente = sequelize.define("cliente", {
		nome: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(254),
			allowNull: false,
			unique: true
		},
		login: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		senha: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		cpf: {
			type: DataTypes.STRING(11),
			allowNull: false,
			unique: true
		},
		avaliacao: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});

	return Cliente;
};
