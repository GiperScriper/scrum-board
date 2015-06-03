(function (Backbone) {

    var Task = Backbone.Model.extend({
        defaults: {
            'name': '',
        }
    });

    var TasksCollection = Backbone.Collection.extend({        
        model: Task,
        url: '/api/v1/tasks/',
    });

    var tasks = new TasksCollection().fetch()

    //console.log(tasks);


    var singleTask = Backbone.Model.extend({urlRoot: '/api/v1/tasks/'});

    var sTask = new singleTask({id: 2}).fetch()

    console.log('single task');
    console.log(singleTask);


})(Backbone);