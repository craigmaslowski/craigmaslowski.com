(function (Projects, Github) {
	'use strict';
	
	var githubRepos,
		projectsView;

	projectsView = new Projects.Views.Projects({ el: '#main .projects' });
	githubRepos = new Github.Collections.GithubRepos([]);
	githubRepos.options = { user: 'craigmaslowski' };

	githubRepos.fetch()
		.done(function () {
			projectsView.repos = githubRepos;
			projectsView.render();
		}).fail(function () {
			projectsView.showStatic();
		});
})(app.module('projects'), app.module('github'));