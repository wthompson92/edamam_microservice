var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var express = require('express');
var router = express.Router();
var Recipe = require('../../../models').Recipe
var Sequelize = require('sequelize')
require('dotenv').config();

router.get('/calorie_search', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  fetch(`https://api.edamam.com/search?q=${req.query.label}&app_id=${process.env.app_id}&app_key=${process.env.app_key}&from=0&to=1&calories=${req.query.calories}`)
  .then(response =>
    response.json())
  .then(results => {
    res.status(200).send(results)
  })
  .catch(error => {
    res.status(400).send({message: "No recipes were found in this calorie range"})
  })
})

router.get('/health_label_search', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  fetch(`https://api.edamam.com/search?q=${req.query.label}&app_id=${process.env.app_id}&app_key=${process.env.app_key}&from=0&to=1&diet=${req.query.dietLabel}`)
  .then(response =>
    response.json())
  .then(results => {
    res.status(200).send(results)
  })
  .catch(error => {
    res.status(400).send({message: "No recipes were found with this health label"})
  })
})

router.get('/servings_search', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  fetch(`https://api.edamam.com/search?q=${req.query.label}&app_id=${process.env.app_id}&app_key=${process.env.app_key}&from=0&to=1&yield=${req.query.yield}`)
  .then(response =>
    response.json())
  .then(results => {
    res.status(200).send(results)
  })
  .catch(error => {
    res.status(400).send({message: "No recipes were found with this serving size"})
  })
})

router.get('/average_calories', async function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
    let response = await Recipe.findAll({
      attributes: [[Sequelize.fn('AVG', Sequelize.col('calories')), 'avgCalories']]
    })
  res.status(200).send(response)
})

router.get('/order_servings', async function(req, res, next) {
  res.set("Connection", "close");
  let response = await Recipe.findAll({
    order: [
      ['yield', 'DESC']
    ]
  })
  res.status(200).send(response)
})

module.exports = router;
