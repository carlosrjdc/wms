'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Ravex_Retorno_Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ravex_Retorno_Nota.belongsTo(models.User)
      // define association here
    }
  }
  Ravex_Retorno_Nota.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    unidade: {
      type: Sequelize.STRING
    },
    refenciaId: {
      unique:true,
      type: Sequelize.STRING
    },
    viagemId: {
      type: Sequelize.STRING
    },
    notaFiscal: {
      type: Sequelize.STRING
    },
    placa: {
      type: Sequelize.STRING
    },
    transportadora: {
      type: Sequelize.STRING
    },
    motivo: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    conferenteId:{
      type: Sequelize.INTEGER,
      references:{ model: "Users", key: "id"}
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Ravex_Retorno_Nota',
  });
  return Ravex_Retorno_Nota;
};