"use strict"
//TO-DO: associacao
module.exports = (sequelize, DataTypes) => {

    const Mensagem = sequelize.define('mensagem', {
        conteudo: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        emissor: {
            type: DataTypes.BOOLEAN(),
            allowNull: false
        }
    },
        {
            createdAt: 'criado_em',
            updatedAt: 'atualizado_em',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        });

    return Mensagem;
}