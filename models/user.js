'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Ravex_Retorno_Nota,{
        foreignKey:conferenteId
      })
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    usuario: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
      unique:true
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING
    },
    cargo:{
      type: Sequelize.STRING
    },
    unidade:{
      type: Sequelize.STRING
    },
    setor:{
      type: Sequelize.STRING
    },
    senha:{
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};