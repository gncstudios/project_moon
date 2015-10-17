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
  },                                                                   //
  "click [data-action='toggle-side-nav']": function (e) {              // 11
    e.preventDefault();                                                // 12
    console.log("Toggling side nav");                                  // 13
    // toggle the side Navigation                                      //
    $('.side-nav').toggle('1000');                                     // 15
  }                                                                    //
});                                                                    //
                                                                       //
/* THis shit here hides the side nav if it is open ON ANY FUCKING CLICK EXCEPT!!!!
    - When you click any button with data-action equal to toggle-side-nav
    - on the side menu itself or any of its children elements          //
*/                                                                     //
Template.header.rendered = function () {                               // 24
  $('html').click(function () {                                        // 25
    console.log($(event.target));                                      // 26
    console.log($(event.target).closest('.side-nav'));                 // 27
    if (!$(event.target).closest('.side-nav').length && $(event.target).attr('data-action') !== "toggle-side-nav") {
      console.log("clicked outside the nav");                          // 29
      $('.side-nav').hide('1000');                                     // 30
    }                                                                  //
  });                                                                  //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
