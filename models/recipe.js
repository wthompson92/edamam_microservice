'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    label: DataTypes.STRING,
    image: DataTypes.STRING,
    source: DataTypes.STRING,
    url: DataTypes.STRING,
    yield: DataTypes.INTEGER,
    calories: DataTypes.FLOAT,
    totalWeight: DataTypes.FLOAT,
    totalTime: DataTypes.FLOAT,
    ingredientLines: DataTypes.STRING,
    healthLabels: DataTypes.STRING,
    uri: DataTypes.STRING,
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };

  // average_calories(food_type) {
  //   // grab chicken from db
  //   // average calories from all chicken columns
  //   sequelize.query("SELECT * from label")
  //    .then(label =>
  //   console.log()
  //   )
  // }

  // average_servings(food_type) {

  // }

  return Recipe;
};
