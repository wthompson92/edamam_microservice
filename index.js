const request = require('request-promise');
const endpoint = `https://api.edamam.com/search?q=chicken&app_id=API_ID&app_key=API_KEY&from=0&to=1&calories=591-722&health=alcohol-free`;
const fetch = require("node-fetch");
//
var Recipe = require('./models').Recipe

// request.get(endpoint, (error, response, body) => {
//   let json = JSON.parse(body);
//   console.log(body);
// });
//
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

const axios = require("axios");
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
        source: recipe.source
      })
  } catch (error) {
    console.log(error);
  }
};

getRecipe(endpoint);
