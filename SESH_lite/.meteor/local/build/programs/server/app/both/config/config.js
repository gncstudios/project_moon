(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/config/config.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// -- Router Config --                                                 //
Router.configure({                                                     // 2
    layoutTemplate: 'appLayout',                                       // 3
    loadingTemplate: 'loading',                                        // 4
    progressSpinner: false                                             // 5
});                                                                    //
                                                                       //
Router.plugin('loading', { loadingTemplate: 'loading' });              // 8
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });   // 9
                                                                       //
// Accounts Config                                                     //
AccountsTemplates.configureRoute('signIn', { layoutTemplate: 'appLayout' });
AccountsTemplates.configureRoute('signUp', { layoutTemplate: 'appLayout' });
AccountsTemplates.addField({                                           // 16
    _id: 'name',                                                       // 17
    type: 'text',                                                      // 18
    placeholder: {                                                     // 19
        signUp: "Name"                                                 // 20
    },                                                                 //
    required: true,                                                    // 22
    minLength: 4,                                                      // 23
    //re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,                       //
    errStr: 'At least four characters'                                 // 25
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=config.js.map
