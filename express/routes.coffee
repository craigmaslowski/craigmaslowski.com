email = require 'emailjs'

exports = module.exports = (app) ->
  # home page
  app.get '/', (req, res) ->
    res.render 'index',
      availability: 
        freelance: false
        fullTime: false
        openToContact: true
    
  # resume
  app.get '/resume', (req, res) ->
    res.render 'resume'
    
  # about
  app.get '/about', (req, res) ->
    res.render 'about'
  
  # projects
  app.get '/projects', (req, res) ->
    res.render 'projects'

  # contact
  app.post '/contact', (req, res) ->
    data = req.body

    email.send({
      host: "smtp.sendgrid.net",
      port : "25",
      domain: "smtp.sendgrid.net",
      authentication: "login",
      username: 'craigmaslowski.com',
      password: '4ini.tech',
      to : "craig@craigmaslowski.com",
      from : data.email,
      subject : "Email from #{data.name} via craigmaslowski.com",
      body : data.message },
      (err, result) -> 
        if (err)
          res.json {result: 'failure', error: err}, 500
        else
          res.json {result: 'success'})
    ###
    server = email.server.connect({
      user: '', 
      password: '',
      host: 'smtp.sendgrid.net', 
      ssl: false
    })
    
    headers = {
      text: data.message, 
      from: "#{data.name} <#{data.email}>", 
      to: 'Craig <craig@craigmaslowski.com>',
      subject: "Email from #{data.name} via craigmaslowski.com"
    }
    
    message = email.message.create(headers)

    server.send(message, (err, result) -> 
      if (err)
        res.json {result: 'failure', error: err}, 500
      else
        res.json {result: 'success'}
    )
    ###