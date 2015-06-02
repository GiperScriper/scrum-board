(function() {

	var Sprint = Backbone.Model.extend({
		defaults: {
			'title': '',
			'description': '' 
		}
	});

	App.Models.Sprint = Sprint;

})();