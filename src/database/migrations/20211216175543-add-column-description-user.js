'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'descricao',
      {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async () => { }
};
