(function (Layout) {
	app.start = function () {
		_.templateSettings = {
			interpolate: /\{\{(.+?)\}\}/g,
			evaluate: /\[\[(.+?)\]\]/g
		};

		var layout = new Layout.Views.Layout({el: 'body'});
	};
})(app.module('layout'));