(function ($, Backbone, _, app) {

    var IndexView = Backbone.View.extend({
        templateName: "#index-template",
        initialize: function () {
            this.template = _.template($(this.templateName).html());
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

    app.views.IndexView = IndexView;

})($, Backbone, _, app);