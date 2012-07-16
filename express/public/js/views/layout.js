(function (Layout, Contact) {
	Layout.Views.Layout = app.factory.View.extend({
		events: {
			'click a.contact': 'showContact'
		},

		initialize: function () {
			var twipsyOptions = {
					placement: 'below',
					delayIn: 700
				};
			_.bindAll(this);

			this.contactView = new Contact.Views.Contact({ el: '#contact' });

			//$('ul.social-icons, a.icon').twipsy(twipsyOptions);
			//$('nav a').twipsy($.extend({}, twipsyOptions, {offset: -20}));
		},

		showContact: function () {
			this.contactView.getAttention();
		}
	});
})(app.module('layout'), app.module('contact'));