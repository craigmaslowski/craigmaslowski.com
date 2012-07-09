(function (Contact) {
	Contact.Views.Contact = app.factory.View.extend({
		events: {
			'click .send': 'send',
			'click .cancel': 'cancel'
		},

		initialize: function () {
			_.bindAll(this);
 			this.cache = new this.Cache();
 			this.cache.scope = this.el;
 			this.$el.modal({ backdrop: true});
		},

		show: function () {
			this.$el.modal('show');
		},

		hide: function () {
			this.$el.modal('hide');
		},

		cancel: function () {
			this.hide();
			this.clearForm();
		},

		clearForm: function () {
			this.cache.get('.name').val('');
			this.cache.get('.email').val('');
			this.cache.get('.message').val('');
		},

		validateForm: function () {
			var name = this.cache.get('.name').val(),
				email = this.cache.get('.email').val(),
				message = this.cache.get('.message').val(),
				valid = true;

			if (name === '' || email === '' || message === '') {
				console.log('missing a field');
				valid = false;
			}
			
			if (email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) === -1) {
				console.log('invalid email');
				valid = false;
			}
			return valid;
		},

		send: function (e) {
			var self = this,
				data = {
					name: this.cache.get('.name').val(),
					email: this.cache.get('.email').val(),
					message: this.cache.get('.message').val()
				};
			
			e.preventDefault();
			if (self.validateForm()) {
				$.ajax({
					type: 'POST',
					url: '/contact',
					data: data,
					success: function (data) {
						self.clearForm();
						console.log('great success', data);
					},
					error: function (data) {
						console.log('epic failure', data);
					}
				});

				self.hide();
			}
		}
	});
})(app.module('contact'));
