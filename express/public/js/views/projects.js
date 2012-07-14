(function (Projects, Github) {
	Projects.Views.Projects = app.factory.View.extend({
		initialize: function () {
			_.bindAll(this);
			this.template = _.template($('#github-repo-template').html());
			this.views = [];
		},

		render: function () {
			var self = this;

			self.$('.loading').hide();
			if (self.repos.length) {
				self.repos.each(function (repo) {
					if (repo.get('fork')) return;

					self.$('.github-projects')
						.append(self.template(repo.attributes));
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