"use strict";
//TO-DO: Associação
module.exports = (sequelize, DataTypes) => {

	const Proposta = sequelize.define("proposta", {
		titulo: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		descricao: {
			type: DataTypes.STRING(1024),
			allowNull: false
		},
		pagamento: {
			type: DataTypes.DECIMAL(),
			allowNull: false
		}
	},
	{
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});
	return Proposta;
};
