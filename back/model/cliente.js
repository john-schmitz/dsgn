"use strict"
module.exports = (sequelize, DataTypes) => {

    const Cliente = sequelize.define('cliente', {
        
    },
        {
            createdAt: 'criado_em',
            updatedAt: 'atualizado_em',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        })

    return Cliente;
}