const { Sequelize, Model } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.STRING
      },
    }, {
      sequelize
    })
    return this;
  }
}

module.exports = Cliente