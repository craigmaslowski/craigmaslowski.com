(function (Github) {
	Github.Models.GithubUser = app.factory.Model.extend({
		initialize: function () {
			_.bindAll(this);
		},

		url: function () {
			return 'https://api.github.com/users/' + this.options.user
		},

		sync: function(method, model, options){  
			options.timeout = 10000;  
			options.dataType = "jsonp";  
			return Backbone.sync(method, model, options);  
			}
	});
})(app.module('github'));