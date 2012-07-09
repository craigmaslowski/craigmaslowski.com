(function (app) {
	var moduleMemoizer = function () {
		var modules = {};

		return function (name, setup) {
			if (modules[name]) {
				return modules[name];
			}
			return modules[name] = setup || {};
		};
	} ();

	app.factory = Backbone.Factory({ 
		view: {
			Cache: ElCacheo.Cache.extend({})
		}
	});

	app.module = function (name) {
		return moduleMemoizer(name, { Collections: {}, Models: {}, Views: {} });
	};
})(window.app = window.app || {});
