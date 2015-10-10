(function(){// -- Router Config --
Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  progressSpinner : false,
  onAfterAction: function() {
    document.title = Meteor.settings.public.PROJECT_NAME;
  }
});

Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});


// Accounts Config
AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    placeholder: {
        signUp: "Name"
    },
    required: true,
    minLength: 4,
    //re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least four characters',
});

}).call(this);

//# sourceMappingURL=config.js.map
