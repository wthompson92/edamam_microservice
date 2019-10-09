'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    label: DataTypes.STRING,
    image: DataTypes.STRING,
    source: DataTypes.STRING,
    url: DataTypes.STRING,
    yield: DataTypes.INTEGER,
    calories: DataTypes.FLOAT
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};