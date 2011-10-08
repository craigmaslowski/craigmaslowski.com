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
    return app.get('/about', function(req, res) {
      return res.render('about');
    });
  };
}).call(this);
