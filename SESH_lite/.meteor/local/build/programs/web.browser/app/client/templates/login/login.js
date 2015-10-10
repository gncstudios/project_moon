(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/login/login.js                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _this = this;                                                      //
                                                                       //
Template.login.onCreated(function () {                                 // 2
  _this.badFormResponse = new ReactiveVar(undefined);                  // 3
});                                                                    //
var that = this;                                                       // 5
                                                                       //
Template.login.events({                                                // 7
  'keydown #loginForm input': function (event) {                       // 8
    that.badFormResponse.set(undefined);                               // 9
  },                                                                   //
  'submit #loginForm': function (event) {                              // 11
    event.preventDefault();                                            // 12
                                                                       //
    var email = event.target.email.value;                              // 14
    var password = event.target.password.value;                        // 15
    var rawFormData = event.target;                                    // 16
    Meteor.loginWithPassword(email, password, function (err) {         // 17
      if (err) {                                                       // 18
        that.badFormResponse.set("Invalid username or password.");     // 19
        // The user might not have been found, or their passwword      //
        // could be incorrect. Inform the user that their              //
        // login attempt has failed.                                   //
      } else {                                                         //
          Router.go("/profile");                                       // 24
        }                                                              //
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.login.helpers({                                               // 31
  formClass: function () {                                             // 32
    return _this.badFormResponse.get() ? "has-error" : "";             // 33
  },                                                                   //
  badFormResponse: function () {                                       // 35
    return _this.badFormResponse.get();                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
