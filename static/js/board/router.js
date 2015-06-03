(function ($, Backbone, _, App) {

	var Router = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		initialize: function (options) {
			this.contentElement = '#content';
			this.current = null;
			Backbone.history.start();
		},

		index: function () {
			var view = new App.Views.Index({el: this.contentElement});			
			this.render(view);
		},

		render: function (view) {
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