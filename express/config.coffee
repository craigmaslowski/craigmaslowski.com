express = require 'express'
stylus = require 'stylus'

exports = module.exports = (app) ->
  app.configure ->
    app.set 'views', "#{__dirname}/views"
    app.set 'view engine', 'jade'
    app.use express.bodyParser()
    app.use express.methodOverride()
    app.use app.router
    app.use stylus.middleware
      src: "#{__dirname}/views"
      dest: "#{__dirname}/public"
      compile:  (str, path, fn) ->
        stylus(str)
          .set('filename', path)
          .set('compress', true)
          .render(fn)
    app.use express.static "#{__dirname}/public"

  app.configure 'development', ->
    app.use express.errorHandler { dumpExceptions: true, showStack: true }

  app.configure 'production', ->
    app.use express.errorHandler()