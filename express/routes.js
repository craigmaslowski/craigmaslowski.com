(function() {
  var exports;
  exports = module.exports = function(app) {
    app.get('/', function(req, res) {
      return res.render('index', {
        availability: {
          freelance: false,
          fullTime: false,
          openToContact: true
        }
      });
    });
    app.get('/resume', function(req, res) {
      return res.render('resume');
    });
    app.get('/about', function(req, res) {
      return res.render('about');
    });
    return app.get('/projects', function(req, res) {
      return res.render('projects');
    });
  };
}).call(this);
