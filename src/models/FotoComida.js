const { Sequelize, Model } = require('sequelize');

const link = require('../config/linkPhoto');

module.exports = class Foto extends Model{
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio.'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ser vazio.'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `${link.url}images/${this.getDataValue('filename')}` 
        }
      }
    },{
      sequelize,
      tableName: 'fotosComida',
    })
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Comida, {foreignKey: 'comida_id'})
  }
}