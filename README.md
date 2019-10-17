# edamam_microservice

This microservice is part of the [Quantified Self](https://github.com/ktsune/quantified-self
) project and has three endpoints which retrieve data from the edamam microservice and an additional two which retrieve data from the database.

View our project board here:

https://github.com/ktsune/quantified-self/projects/1

## Visit our app on Heroku

https://dashboard.heroku.com/apps/edamammicroservice

## Objective

This paired project was completed in 7 days as a requirement for Module 4 at Turing School of Software and Design.

The project was built using Node & Express. It implements the following:

- Uses the Edamam API to search for a particular kind of food (for example, chicken).
- Builds out a recipes table
- With a list of recipes, creates an endpoint that finds the average calorie total of all foods
- With a list of recipes, creates an endpoint that orders the recipes based on yield from greatest servings to least number of servings

## GitHub Repository

git@github.com:wthompson92/edamam_microservice.git

## Instructions

Clone down the repo
```
$ git clone
```

Set up the database
```
$ npx sequelize db:create
$ npx sequelize db:migrate
```

Add a .env file to your root directory to save your API keys in

**Note, you will need your own Edamam app_key & app_id for the external API access in this project**

Here is the format they should be in in your .env file:

```
APP_KEY=<YOUR APP KEY>
APP_ID=<YOUR APP ID>
```
## Endpoints

**Get all recipes in a given calorie range**

Request:
```
GET /api/v1/recipes/calorie_search?q=LABEL
Content-Type: application/json
```

Response:
```
Body:
[
  {
    "id": 1,
    "name": "Chicken Parmesan",
    "calories": 300,
    "yield": 4,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs chicken"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
```

**Get all recipes with a given health label**

Request:
```
GET /api/v1/recipes/health_label_search?q=500-700
Content-Type: application/json
```

Response:
```
Body:
[
  {
    "id": 1,
    "name": "Chicken Parmesan",
    "calories": 300,
    "yield": 4,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs chicken"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
```

**Get all recipes with a given serving size**

Request:
```
GET /api/v1/recipes/serving_size_search?q=4
Content-Type: application/json
```

Response:
```
Body:
[
  {
    "id": 1,
    "name": "Chicken Parmesan",
    "calories": 300,
    "yield": 4,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs chicken"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
```
**Get average calories of all recipes**

Request:
```
GET /api/v1/recipes/average_calories
Content-Type: application/json
```
Response:
```
Status: 200
Content-Type: application/json
Body:
{
  "average_calories": 685
}
```

**Sort servings by yield in descending order**

Request:
```
GET /api/v1/recipes/order_servings
Content-Type: application/json
```
Response:
```
Body:
[
  {
    "id": 1,
    "name": "Beef Stew",
    "calories": 900,
    "yield": 6,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs beef"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
[
  {
    "id": 1,
    "name": "Chicken Parmesan",
    "calories": 600,
    "yield": 4,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs chicken"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
[
  {
    "id": 1,
    "name": "Chicken Pasta",
    "calories": 300,
    "yield": 2,
    "ingredients": [
      {
        "id": 1,
        "text": "2lbs chicken"
      },
      {
        "id": 2,
        "text": "16oz marinara sauce"
      }
      {
        "id": 2,
        "text": "cilantro"
      }
    ]
  }
]
```

## Schema Design
<a href="https://cl.ly/a649678f79b6" target="_blank"><img src="https://dzwonsemrish7.cloudfront.net/items/3V0C0O1n1O053T1r2n3C/Screen%20Shot%202019-10-15%20at%203.07.42%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

## Contributors

- [Sarah Tatro](https://github.com/ktsune)
- [Will Thompson](https://github.com/wthompson92)

### Technologies
* Sequelize
* Node
* Express
* Postgres

### Versions
* Node ~ 11
* Express ~ 6.0
