module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fotosComida', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comida_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comidas',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('fotosComida');
  }
};
