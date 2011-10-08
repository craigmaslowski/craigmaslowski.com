express = require 'express'
app = module.exports = express.createServer()

# configure
require('./config')(app)

# setup routes
require('./routes')(app)

#
app.listen 3000
console.log "Express server listening on port #{app.address().port} in #{app.settings.env} mode"
