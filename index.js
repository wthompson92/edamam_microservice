const request = require('request-promise');
const caloriesEndpoint = `https://api.edamam.com/search?q=chicken&app_id=API_ID&app_key=API_KEY&from=0&to=1&calories=591-722&health=alcohol-free`;
const healthLabelsEndpoint = `https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&dietLabels=gluten-free&health=alcohol-free`;
const yieldEndpoint = `https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&yield=6.0-8.0&health=alcohol-free`;
const fetch = require("node-fetch");
const axios = require("axios");
var Sequelize = require('sequelize')

var Recipe = require('./models').Recipe

// request.get(endpoint, (error, response, body) => {
//   let json = JSON.parse(body);
//   console.log(body);
// });
//
// const getRecipe = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getAvgCalories = async function create(req, res, next) {
  try {
    const avg = await Recipe.findAll({
      where: { label: 'chicken' }
    })
    .then(label => {
      console.log('LABEL', label)
      label.findAll({
        attributes: [[Sequelize.fn('AVG', Sequelize.col('calories')), 'avgCalories']],
        raw: true,
      })
    })
    } catch(error) {
    console.log(error);
  }
}

const getRecipe = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data.hits;
    const recipe = data[0].recipe;
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
        totalTime: recipe.totalTime,
        source: recipe.source
        // ingredientLines: recipe.ingredientLines
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
