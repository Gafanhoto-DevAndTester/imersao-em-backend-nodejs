const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Medico = sequelize.define('medico',{

    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    nome:{
        allowNull:false,
        type:Sequelize.STRING(120),
        validate:{
            len:[3,120]
        }
    },
    crm:{
        allowNull:false,
        type:Sequelize.INTEGER,
        validate:{
            len:[1,9]
        }
    },
    telefoneFixo:{
        allowNull:false,
        type:Sequelize.STRING(13)
    },
    celular:{
        allowNull:false,
        type:Sequelize.STRING(13)
    }
});
module.exports = Medico;