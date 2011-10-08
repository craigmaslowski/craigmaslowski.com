(function() {
  var app, express;
  express = require('express');
  app = module.exports = express.createServer();
  require('./config')(app);
  require('./routes')(app);
  app.listen(3000);
  console.log("Express server listening on port " + (app.address().port) + " in " + app.settings.env + " mode");
}).call(this);
