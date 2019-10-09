var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var express = require('express');
var router = express.Router();
// var recipes = require('../../../models').Recipe
require('dotenv').config();

var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var express = require('express');
var router = express.Router();
var users = require('../../../models').User
require('dotenv').config();

var darkskyApiKey = process.env.DARKSKY_API_KEY
var googleApiKey = process.env.GOOGLE_API_KEY

router.get('/', function(req, res, next) {
    then (recipes => fetch(`https://api.edamam.com/search?q=chicken&app_id=API_ID&app_key=API_KEY&from=0&to=1&calories=591-722&health=alcohol-free`))
    .then(response => response.json())
    .then(response => {
    res.status(200).send(payload)
    })
  })

        module.exports = router;

module.exports = router;
