(function (Github) {
	Github.Models.GithubRepo = app.factory.Model.extend({
		initialize: function () {
			_.bindAll(this);
		}
	});
})(app.module('github'));