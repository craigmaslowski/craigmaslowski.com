(function (Github) {
	Github.Collections.GithubRepos = app.factory.Collection.extend({
		model: Github.Models.GithubRepo,

		initialize: function () {
			_.bindAll(this);
		},

		url: function () {
			return 'https://api.github.com/users/' + this.options.user + '/repos'
		},

		sync: function(method, model, options){  
			options.timeout = 3000;  
			options.dataType = "jsonp";  
			return Backbone.sync(method, model, options);  
		},

		parse: function (resp) {
			if (resp.data && resp.data.message && resp.data.message === 'Not Found') {
				return [];
			}
			return resp.data;
		}
	});
})(app.module('github'));	