(function (Projects, Github) {
	Projects.Views.Projects = app.factory.View.extend({
		initialize: function () {
			_.bindAll(this);
			this.template = _.template($('#github-repo-template').html());
			this.views = [];
		},

		render: function () {
			var self = this;

			// Hide the ajax activity indicator
			self.$('.loading').hide();

			// Render the view
			if (self.repos.length) {
				self.repos.each(function (repo) {
					// Only list my repos
					if (repo.get('fork')) return;

					// Inject DOM Elements
					self.$('.github-projects')
						.append(self.template(repo.attributes));
				});
			} else {
				// Show static (though likely out of date) projects 
				// when Github is not responding
				self.showStatic();
			}
		},

		showStatic: function () {
			this.$('.loading').hide();
			this.$('.static-projects').show();
		}
	});
})(app.module('projects'), app.module('github'));