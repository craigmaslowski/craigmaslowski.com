(function (Github) {
	Github.Views.GithubRepo = app.factory.View.extend({
		initialize: function () {
			_.bindAll(this);
			this.template = _.template($('#github-repo-template').html());
			this.render();
		},

		render: function () {
			this.$el.append(this.template(this.model.attributes));
		}
	});
})(app.module('github'));