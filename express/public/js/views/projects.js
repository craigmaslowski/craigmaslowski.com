(function (Projects, Github) {
	Projects.Views.Projects = app.factory.View.extend({
		initialize: function () {
			_.bindAll(this);
			this.views = [];
		},

		render: function () {
			var self = this;

			self.$('.loading').hide();
			if (self.repos.length) {
				self.repos.each(function (repo) {
					self.views.push(new Github.Views.GithubRepo({el: '.github-projects', model: repo}));
				});
			} else {
				self.showStatic();
			}
		},

		showStatic: function () {
			this.$('.loading').hide();
			this.$('.static-projects').show();
		}
	});
})(app.module('projects'), app.module('github'));