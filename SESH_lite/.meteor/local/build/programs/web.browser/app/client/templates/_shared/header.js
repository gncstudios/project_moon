(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/_shared/header.js                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.header.events({                                               // 1
  "click [data-action='logout']": function (e) {                       // 2
    e.preventDefault();                                                // 3
                                                                       //
    // Log out of Meteor Accounts                                      //
    Meteor.logout();                                                   // 6
                                                                       //
    // Tell the router what page it should go to once we log out       //
    Router.go('/');                                                    // 9
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
