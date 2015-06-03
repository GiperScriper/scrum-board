(function ($, Backbone, _) {

var  Todo = Backbone.Model.extend({
	
	initialize: function () {
		console.log('Model initialized');

		this.on('change:title', function() {
			console.log('Title value for this model have changed');
		});
	},
	
	defaults: {
		'title': '',
		'completed': false
	},

	validate: function (attribs) {
		if (!attribs.title) {
			return 'Remember to set title to your todo';
		}
	},

	myCustomFunc: function () {
		console.log('from custom func');
		return 1;
	},

	digits: {
		'one': 1,
		'two': 2
	}	
})

var todo1 = new Todo();

console.log(JSON.stringify(todo1));

console.log(todo1.myCustomFunc());

console.log(todo1.digits);

console.log(todo1.defaults);


var todo2 = new Todo({'title':'Learn Backbone Models'});
console.log(todo2.get('title'));
todo2.set('car', 'Mazda');
todo2.set('title', 'Learn Events');
console.log(todo2.title);
console.log(todo2.toJSON());

// Views

var TodoView = Backbone.View.extend({
	tagName: 'li',	
	todoTemplate: _.template("item-template"),	
	//el: '#footer'
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	render: function () {
		this.$el.html(this.todoTemplate(this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	},

	edit: function () {
		// TODO
	},

	close: function () {
		// TODO
	},

	updateOnEnter: function (e) {
		// TODO
	}
})

var todoView1 = new TodoView();

console.log(todoView1.el);


var ListView = Backbone.View.extend({
	events: {},
	render: function () {
		var items = this.model.get('items');
		_.each(items, function (item) {
			var itemView = new ItemView({model: item});
			this.$el.append(itemView.render().el);
		}, this); // this
		//this.$el.html(this.model.toJSON());
		//return this;
	}
});

var ItemView = Backbone.View.extend({
	events: {},
	render: function () {
		this.$el.html(this.model.toJSON());
		return this;
	}
}); 









})($, Backbone, _);