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