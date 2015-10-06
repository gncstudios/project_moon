(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/router/routes.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Home Route                                                          //
Router.route('/', {                                                    // 2
  name: 'home'                                                         // 3
});                                                                    //
                                                                       //
// Dashboard route                                                     //
Router.route('/dashboard', {                                           // 7
  name: 'dashboard',                                                   // 8
  waitOn: function () {                                                // 9
    return this.subscribe('items');                                    // 10
  },                                                                   //
  data: {                                                              // 12
    items: Items.find({})                                              // 13
  },                                                                   //
  onBeforeAction: function (pause) {                                   // 15
    AccountsTemplates.ensureSignedIn.call(this, pause);                // 16
  },                                                                   //
  onAfterAction: function () {}                                        // 18
});                                                                    //
                                                                       //
// Profile Route                                                       //
Router.route('/profile', {                                             // 24
  name: 'profile'                                                      // 25
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
