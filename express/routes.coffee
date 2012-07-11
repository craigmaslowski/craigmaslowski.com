# email = require 'emailjs'
nodemailer = require 'nodemailer'

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

    transport = nodemailer.createTransport("SMTP", {
      service: 'Gmail',
      auth: 
        user: '',
        pass: ''
    })

    message = { 
      from: "#{data.name} <#{data.email}>",
      to: 'Craig <craig@craigmaslowski.com>',
      subject: "Email from #{data.name} #{data.email} via craigmaslowski.com",
      headers: {
          'X-Laziness-level': 1000
      },
      text: data.message
    }

    transport.sendMail(message, (error) ->
      if (error)
        res.json {result: 'failure', error: error}, 500
      else
        res.json {result: 'success'}
      transport.close()
    )