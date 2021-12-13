const { Sequelize, Model } = require('sequelize');

module.exports = class Comida extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 60],
            msg: 'O nome não pode ser maior que 60 caracteres.'
          }
        }
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 200],
            msg: 'A descrição não pode ultrapassar 200 caracteres.'
          }
        }
      },
      preco: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O preço deve ser um número.'
          }
        }
      }
    },{
      sequelize
    })
    return this
  }
}