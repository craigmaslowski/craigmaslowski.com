express = require('express')
app = module.exports = express.createServer()
require('./config')(app)
require('./routes')(app)
app.listen 3000
#con