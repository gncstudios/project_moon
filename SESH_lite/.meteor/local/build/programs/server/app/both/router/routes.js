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
    if (!Meteor.userId()) {                                            // 16
      Router.go("/login");                                             // 17
    }                                                                  //
    this.next();                                                       // 19
  },                                                                   //
  onAfterAction: function () {}                                        // 21
});                                                                    //
                                                                       //
// Profile Route                                                       //
Router.route('/profile', {                                             // 27
  name: 'profile'                                                      // 28
});                                                                    //
                                                                       //
// Login Route                                                         //
Router.route('/login', {                                               // 32
  name: 'login'                                                        // 33
});                                                                    //
// Signup Route                                                        //
Router.route('/signup', {                                              // 36
  name: 'signup'                                                       // 37
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
