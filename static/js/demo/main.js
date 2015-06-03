var Task = Backbone.Model.extend({

    defaults: {
        'title': '',
        'description': ''
    }

});

var task1 = new Task({'title': 'First Task', 'description': 'description'});

console.log(task1.toJSON());


var taskCollection = Backbone.Collection.extend({
    model: Task
});


// var TasksView = Backbone.View.extend({
//     tagName: 'ul',

//     initialize: function () {
//         //console.log('collection');
//         //console.log(this.collection);
//     },
    
//     // render: function () {
//     //     //
//     // }
// });


var TaskView = Backbone.View.extend({
    tagName: 'span',
    taskTemplate: _.template($('#task-template').html()),
    
    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.taskTemplate(this.model.toJSON()));        
        return this;
    }
});


var taskView1 = new TaskView({ model: task1 });

console.log(taskView1);


var tasks = taskCollection(
    {
        'title' : 'first',
        'description': 'first'
    },
    {
        'title' : 'second',
        'description': 'second'
    }
)


var tasksCollectionView = new TasksView({ collection: tasks });
