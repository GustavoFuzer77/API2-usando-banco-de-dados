const { Sequelize, Model } = require('sequelize');

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
      }
    },{
      sequelize,
      tableName: 'fotosComida',
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.Comida, {foreignKey: 'comida_id'})
  }
}