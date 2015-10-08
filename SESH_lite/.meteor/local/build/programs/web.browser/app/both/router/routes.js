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
                                                                       //
  },                                                                   //
  onBeforeAction: function (pause) {                                   // 18
    AccountsTemplates.ensureSignedIn.call(this, pause);                // 19
  },                                                                   //
  onAfterAction: function () {}                                        // 21
});                                                                    //
                                                                       //
// Profile Route                                                       //
Router.route('/profile', {                                             // 27
  name: 'profile',                                                     // 28
  title: function () {                                                 // 29
    var user = Meteor.user();                                          // 30
    var username = user && user.profile && user.profile.name || "Unknown";
    return "Profile - " + username;                                    // 32
  }                                                                    //
});                                                                    //
                                                                       //
Router.onBeforeAction(function () {                                    // 37
  GoogleMaps.load();                                                   // 38
  this.next();                                                         // 39
}, { only: ['dashboard'] });                                           //
/////////////////////////////////////////////////////////////////////////

}).call(this);
