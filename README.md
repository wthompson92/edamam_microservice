# edammam_microservice

This microservice has three endpoints which retrieve data from the edamam microservice and an additional two which retrieve data from the database.

## Visit our app on Heroku
https://shrouded-scrubland-16029.herokuapp.com

## Objective

This group project was completed in 10 days as a requirement for Module 2 at Turing School of Software and Design.

The project was built using Rails which implements the following:

- consume a JSON API
- Build an app that authenticates using OAuth
- Make API calls to an authenticated API
- Build on top of brownfield code
- Empathy for developers facing deadlines
- Empathy for teammates that might work with your code in the future (or future you!)
- Prioritize what code is relevant to your immediate task (and ignore the rest)
- Send email from a Rails application

## Contributors

- Sarah Tatro
- Will Thompson

## GitHub Repository

git@github.com:wthompson92/edamam_microservice.git

## Instructions

Clone down the repo
```
$ git clone
```

Install the gem packages
```
$ bundle install
```

Install node packages for stimulus
```
$ brew install node
$ brew install yarn
$ yarn add stimulus
```

Set up the database
```
$ rake db:create
$ rake db:migrate
$ rake db:seed
```

Run the test suite:
```ruby
$ bundle exec rspec
```

### Technologies
* [Stimulus](https://github.com/stimulusjs/stimulus)
* [will_paginate](https://github.com/mislav/will_paginate)
* [acts-as-taggable-on](https://github.com/mbleigh/acts-as-taggable-on)
* [webpacker](https://github.com/rails/webpacker)
* [vcr](https://github.com/vcr/vcr)
* [selenium-webdriver](https://www.seleniumhq.org/docs/03_webdriver.jsp)
* [chromedriver-helper](http://chromedriver.chromium.org/)

### Versions
* Ruby 2.4.1
* Rails 5.2.0
