(function (Contact) {
	Contact.Views.Contact = app.factory.View.extend({
		events: {
			'click .send': 'send',
			'blur .name': 'validateName',
			'blur .email': 'validateEmail',
			'blur .message': 'validateMessage'
		},

		initialize: function () {
			_.bindAll(this);
 			this.cache = new this.Cache();
 			this.cache.scope = this.el;
 			this.$el.modal({ backdrop: true});
		},

		getAttention: function () {
			var self = this;
			self.$el.removeClass().addClass('pulse');
			self.$('input.name').focus();

			setTimeout(function () {
				self.$el.removeClass();
			}, 1300);
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
				errors = '',
				valid = false;

			if (name === '') {
				errors = ('Please enter your name.<br>');
			}
			if (email === '' || email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) === -1) {
				errors += ('Please enter a valid email address.<br>');
			}
			if (message === '') {
				errors += ('Please enter a message.');
			}
			if (!valid) {
				this.reportStatus(errors);
			}

			return valid;
		},

		validateName: function () {
			var name = this.cache.get('.name').val();

			if (name === '') {
				this.reportStatus('Please enter your name.<br>');
				this.cache.get('.name').addClass('error');
			} else {
				this.cache.get('.name').removeClass('error');
			}
		},

		validateEmail: function () {
			var email = this.cache.get('.email').val();

			if (email === '' || email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) === -1) {
				this.reportStatus('Please enter a valid email address.<br>');
				this.cache.get('.email').addClass('error');
			} else {
				this.cache.get('.email').removeClass('error');
			}
		},

		validateMessage: function () {
			var message = this.cache.get('.message').val();

			if (message === '') {
				this.reportStatus('Please enter a message.');
				this.cache.get('.message').addClass('error');
			} else {
				this.cache.get('.message').removeClass('error');
			}
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
						self.reportStatus('Thanks. Your message was sent.');
					},
					error: function (data) {
						self.reportStatusAndFadeOut('Oops. Something went wrong. Please try again.');
					}
				});
			}
		},

		reportStatus: function (message) {
			var self = this,
				$info = self.$('.info')

			$info.html(message).removeClass('fadeInDown fadeOutUp').addClass('fadeInDown');
		},

		reportStatusAndFadeOut: function (message) {
			var self = this;

			self.reportStatus(message);

			setTimeout(function () {
				self.$('.info').removeClass('fadeInDown').addClass('fadeOutUp');
			}, 10000);
		}
	});
})(app.module('contact'));
