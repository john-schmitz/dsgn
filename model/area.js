"use strict";
//TO-DO: Tabela especializacao
module.exports = (sequelize, DataTypes) => {

	const Area = sequelize.define("area", {
		titulo: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		descricao: {
			type: DataTypes.STRING(1024),
			allowNull: false
		}
	}, {
		createdAt: "criado_em",
		updatedAt: "atualizado_em",
		charset: "utf8",
		collate: "utf8_general_ci",
		freezeTableName: true
	});
	Area.associar = (models) => {
		this.designer = this.belongsToMany(models.designer);

		// this.designer = this.belongsToMany(models.designer, {
		// 	through: "especializacao"
		// });
	};
	return Area;
};