(function ($, Backbone, _, App) {

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		},

		initialize: function (options) {
			this.contentElement = '#content';
			this.current = null;
			Backbone.history.start();
		},

		home: function () {
			var view = new App.Views.Index({el: this.contentElement});
			this.render(view);
		},

		render: function () {
			if (this.current) {
				this.current.$el = $();
				this.current.remove();
			}
			this.current = view;
			this.current.render();
		}
	});

	App.Router = Router;

})($, Backbone, _, App);