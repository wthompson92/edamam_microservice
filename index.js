const request = require('request-promise');
const caloriesEndpoint = `https://api.edamam.com/search?q=chicken&app_id=API_ID&app_key=API_KEY&from=0&to=1&calories=591-722&health=alcohol-free`;
const healthLabelsEndpoint = `https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&dietLabels=gluten-free&health=alcohol-free`;
const yieldEndpoint = `https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&yield=6.0-8.0&health=alcohol-free`;
const fetch = require("node-fetch");
const axios = require("axios");
var Sequelize = require('sequelize')
var Recipe = require('./models').Recipe

const getRecipe = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data.hits;
    const recipe = data[0].recipe;
    // const ingredients = recipe.ingredientLines
    console.log(data[0]);
    Recipe.create({
        url: recipe.url,
        label: recipe.label,
        calories: recipe.calories,
        yield: recipe.yield,
        image: recipe.image,
        ingredientLines: recipe.ingredientLines.join(),
        healthLabels: recipe.healthLabels.join(),
        uri: recipe.uri,
        totalWeight: recipe.totalWeight,
        source: recipe.source,
        ingredients: recipe.ingredients
      })
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAvgCalories:getAvgCalories
}
getRecipe(caloriesEndpoint);
getRecipe(healthLabelsEndpoint);
getRecipe(yieldEndpoint);
