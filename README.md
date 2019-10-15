# edamam_microservice

This microservice has three endpoints which retrieve data from the edamam microservice and an additional two which retrieve data from the database.

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

### Schema Design
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
