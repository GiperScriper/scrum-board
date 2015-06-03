// var app = (function ($){
//     var config = $('#config'),
//         app = JSON.parse(config.text());

//     return app

// })($);

var App = (function ($){

    var app = {
        'Models': {},
        'Views': {},
        'Collections': {},
        'Router': null
    };

    $(document).ready(function () {
        var router = new app.Router(); 
    });

    return app;

})($);