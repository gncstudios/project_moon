(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/config/config.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// -- Router Config --                                                 //
Router.configure({                                                     // 2
  layoutTemplate: 'appLayout',                                         // 3
  loadingTemplate: 'loading',                                          // 4
  progressSpinner: false,                                              // 5
  onAfterAction: function () {                                         // 6
    document.title = Meteor.settings['public'].PROJECT_NAME;           // 7
  }                                                                    //
});                                                                    //
                                                                       //
Router.plugin('loading', { loadingTemplate: 'loading' });              // 11
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });   // 12
                                                                       //
// Accounts Config                                                     //
AccountsTemplates.configureRoute('signIn', { layoutTemplate: 'appLayout' });
AccountsTemplates.configureRoute('signUp', { layoutTemplate: 'appLayout' });
AccountsTemplates.addField({                                           // 18
  _id: 'name',                                                         // 19
  type: 'text',                                                        // 20
  placeholder: {                                                       // 21
    signUp: "Name"                                                     // 22
  },                                                                   //
  required: true,                                                      // 24
  minLength: 4,                                                        // 25
  //re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,                         //
  errStr: 'At least four characters'                                   // 27
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=config.js.map
