(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/signup/signup.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _this = this;                                                      //
                                                                       //
var that = this;                                                       // 1
                                                                       //
Template.signup.events({                                               // 3
  'submit form': function (event) {                                    // 4
    event.preventDefault();                                            // 5
    var emailVar = event.target.email.value;                           // 6
    var passwordVar = event.target.password.value;                     // 7
    var nameVar = event.target.name.value;                             // 8
    Meteor.call("createNewUser", {                                     // 9
      email: emailVar,                                                 // 10
      password: passwordVar,                                           // 11
      name: nameVar                                                    // 12
    }, function (err) {                                                //
      if (err) {                                                       // 14
        console.log(err);                                              // 15
        that.badFormResponse.set(err.reason);                          // 16
      } else {                                                         //
        Router.go("/login");                                           // 18
      }                                                                //
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.signup.onCreated(function () {                                // 25
  _this.badFormResponse = new ReactiveVar(undefined);                  // 26
});                                                                    //
Template.signup.helpers({                                              // 28
  formClass: function () {                                             // 29
    return _this.badFormResponse.get() ? "has-error" : "";             // 30
  },                                                                   //
  badFormResponse: function () {                                       // 32
    return _this.badFormResponse.get();                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
