'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      yield: {
        type: Sequelize.INTEGER
      },
      calories: {
        type: Sequelize.FLOAT
      },
      ingredientLines: {
        type: Sequelize.STRING
      },
      healthLabels: {
        type: Sequelize.STRING
      },
      totalWeight: {
        type: Sequelize.FLOAT
      },
      uri: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
