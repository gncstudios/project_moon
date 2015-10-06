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
    return this.subscribe('meetings');                                 // 10
  },                                                                   //
  data: {                                                              // 12
    meetings: Meetings.find()                                          // 13
                                                                       //
  },                                                                   //
  onBeforeAction: function (pause) {                                   // 16
    AccountsTemplates.ensureSignedIn.call(this, pause);                // 17
  },                                                                   //
  onAfterAction: function () {}                                        // 19
});                                                                    //
                                                                       //
// Profile Route                                                       //
Router.route('/profile', {                                             // 25
  name: 'profile'                                                      // 26
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
