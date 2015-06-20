# Webpack + Rails on Heroku

This shows how you can use webpack to replace sprockets as your compiler for
Rails.  It works on heroku too.

Live Demo: [http://webpack-rails-demo.herokuapp.com/](http://webpack-rails-demo.herokuapp.com/)     


## Local development

```
bundle install
npm install
foreman start -f Procfile.dev
```

The last command will kick off a rails server, and have webpack watch your assets
for changes and automatically compile them.


## Deploying to Heroku


You need both the ruby and node buildpacks.


```
heroku create your-app-name
heroku buildpacks:add --index 1 https://github.com/heroku/heroku-buildpack-ruby.git
heroku buildpacks:add --index 2 https://github.com/heroku/heroku-buildpack-nodejs.git
git push heroku master
```

During slug compilation, heroku will run `npm install`, which will install 
dependencies then execute the line under scripts.postinstall in `package.json`
to compile app/assets/javascripts/app.js into public/bundle.js.

```
"scripts": {
  "build": "webpack --config webpack/config.js --progress --profile --colors",
  "watch": "webpack -w --config webpack/config.js --progress --profile --colors",
  "postinstall": "npm run build"
},
```
