var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
// var db = require("database");
var express = require('express');
// var getAvgCalories = require('getAvgCalories');
var router = express.Router();
var Recipe = require('../../../models').Recipe
var Sequelize = require('sequelize')
require('dotenv').config();

router.get('/calorie_search', function(req, res, next) {
    then (recipes => fetch(`https://api.edamam.com/search?q=chicken&app_id=API_ID&app_key=API_KEY&from=0&to=1&calories=591-722&health=alcohol-free`))
    .then(response => response.json())
    .then(response => {
    res.status(200).send(payload)
    })
  })

router.get('/health_label_search', function(req, res, next) {
    then (recipes => fetch(`https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&dietLabels=gluten-free&health=alcohol-free`))
    .then(response => response.json())
    .then(response => {
    res.status(200).send(payload)
    })
  })

router.get('/servings_search', function(req, res, next) {
    then (recipes => fetch(`https://api.edamam.com/search?q=beef&app_id=API_ID&app_key=API_KEY&from=0&to=1&yield=6&health=alcohol-free`))
    .then(response => response.json())
    .then(response => {
    res.status(200).send(payload)
    })
  })

router.get('/average_calories', async function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let response = await Recipe.findAll({
    where: {
      label: "chicken",
      // req.params.label
      attributes: [[Sequelize.fn('AVG', Sequelize.col('calories')), 'avgCalories']],
    }
    payload = {}
  })
  res.status(200).send(response)
})

router.get('/order_servings', async function(req, res, next) {
    res.set("Connection", "close");
    let response = await Recipe.findAll({
      order: [
        ['yield', 'DESC'],
        ['id', 'ASC']
      ]
    })
    payload = {}
    response.forEach(function(element) {
      payload["yield"] = element.yield
    })
    res.status(200).send(payload)
  })

module.exports = router;
