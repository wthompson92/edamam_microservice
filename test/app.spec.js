var recipe = require('../models').Recipe
var request = require('supertest');
var shell = require('shelljs');
var app = require('../app');

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create --env test')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate --env test')
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all --env test')
  });

  describe('Test it can GET recipes in a calorie range', () => {
    test('should return a 200', async () => {
      await recipe.bulkCreate([
        {id: '1', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 600, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '2', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '3', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'}
      ])
      return request(app).get("/api/v1/recipes/calorie_search?calories=592-722&label=chicken")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  });

  describe('Test it can GET recipes with a specified health label', () => {
    test('should return a 200', async () => {
      await recipe.bulkCreate([
        {id: '1', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 600, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '2', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '3', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'}
      ])
      return request(app).get("/api/v1/recipes/health_label_search?diet=soy&label=chicken")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  });

  describe('Test it can GET recipes of a specific yield', () => {
    test('should return a 200', async () => {
      await recipe.bulkCreate([
        {id: '1', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 600, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '2', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '3', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'}
      ])
      return request(app).get("/api/v1/recipes/servings_search?yield=4&label=chicken")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  });

  describe('Test it can GET average calories of all recipes', () => {
    test('should return a 200', async () => {
      await recipe.bulkCreate([
        {id: '1', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 600, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '2', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '3', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'}
      ])
      return request(app).get("/api/v1/recipes/average_calories")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  });

  describe('Test it can GET average calories of all recipes', () => {
    test('should return a 200', async () => {
      await recipe.bulkCreate([
        {id: '1', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 600, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '2', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'},
        {id: '3', label: 'roast chicken', image: 'edamam.png', source: 'www.edamam.com', url: 'www.edamam.com', yield: 4, calories: 800, totalWeight: 980, uri: 'www.edamam.com', healthLabels: 'soy', ingredients: 'butter'}
      ])
      return request(app).get("/api/v1/recipes/order_servings")
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  });
});
