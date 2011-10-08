(function() {
  var exports, express, stylus;
  express = require('express');
  stylus = require('stylus');
  exports = module.exports = function(app) {
    app.configure(function() {
      app.set('views', "" + __dirname + "/views");
      app.set('view engine', 'jade');
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      app.use(app.router);
      app.use(stylus.middleware({
        src: "" + __dirname + "/views",
        dest: "" + __dirname + "/public",
        compile: function(str, path, fn) {
          return stylus(str).set('filename', path).set('compress', true).render(fn);
        }
      }));
      return app.use(express.static("" + __dirname + "/public"));
    });
    app.configure('development', function() {
      return app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
    });
    return app.configure('production', function() {
      return app.use(express.errorHandler());
    });
  };
}).call(this);
