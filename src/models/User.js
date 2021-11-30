const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 35],
            msg: 'campo nome deve ter entre 4 e 35 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 50],
            msg: 'A senha deve ter entre 5 e 50 caracteres'
          }
        }
      },
    }, {
      sequelize
    })

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    })

    return this;
  }
}

module.exports = User;