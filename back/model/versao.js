"use strict"
//  TO-DO:associação
module.exports = (sequelize, DataTypes) => {

    const Versao = sequelize.define('versao', {
        imagemCaminho: {
            type: DataTypes.SRING(300),
            allowNull: false,
            defaultValue: false
        },
        release: {
            type: DataTypes.STRING(5),
            allowNull: false,
            defaultValue: false
        },
    },
        {
            createdAt: 'criado_em',
            updatedAt: 'atualizado_em',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        });

    return Versao;
}