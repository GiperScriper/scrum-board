(function ($, Backbone, _, App) {

    var Index = Backbone.View.extend({
        templateName: "#index-template",
        
        initialize: function () {
            this.template = _.template($(this.templateName).html());
            console.log('init view');
        },
        
        render: function () {
            var context = this.getContext(),
                html = this.template(context);
            this.$el.html(html);
        },
        
        getContext: function () {
            return {};
        }
    });

    App.Views.Index = Index;

})($, Backbone, _, App);