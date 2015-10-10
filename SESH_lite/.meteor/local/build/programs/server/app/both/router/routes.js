(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/router/routes.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Home Route                                                          //
Router.route('/', {                                                    // 2
  name: 'home',                                                        // 3
  title: "Home"                                                        // 4
});                                                                    //
                                                                       //
// Dashboard route                                                     //
Router.route('/dashboard', {                                           // 8
  name: 'dashboard',                                                   // 9
  title: "Dashboard",                                                  // 10
  waitOn: function () {                                                // 11
    return this.subscribe('meetings');                                 // 12
  },                                                                   //
  data: {                                                              // 14
    meetings: Meetings.find()                                          // 15
  },                                                                   //
  onBeforeAction: function (pause) {                                   // 17
    AccountsTemplates.ensureSignedIn.call(this, pause);                // 18
  },                                                                   //
  onAfterAction: function () {}                                        // 20
});                                                                    //
                                                                       //
// Profile Route                                                       //
Router.route('/profile', {                                             // 26
  name: 'profile',                                                     // 27
  title: function () {                                                 // 28
    var user = Meteor.user();                                          // 29
    var username = user && user.profile && user.profile.name || "Unknown";
    return "Profile - " + username;                                    // 31
  }                                                                    //
});                                                                    //
                                                                       //
Router.onBeforeAction(function () {                                    // 36
  GoogleMaps.load();                                                   // 37
  this.next();                                                         // 38
}, { only: ['dashboard'] });                                           //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
