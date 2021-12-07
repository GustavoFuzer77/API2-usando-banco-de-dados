const { Sequelize ,Model } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'O nome deve estar entre 3 à 150 caracteres.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'O e-mail já existe'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido!'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: 'A idade deve ser um numero.'
          },isInt:{
            msg: 'A idade deve ser um numero inteiro.'
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
            msg: 'A senha deve ter entre 5 à 50 caracteres.'
          }
        }
      }
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      if(user.password)
      user.password_hash = await bcrypt.hash(user.password, 8)
    })

    return this;
  }

  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash)
  }

}
