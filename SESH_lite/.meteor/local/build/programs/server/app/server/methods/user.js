(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/user.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  createNewUser: function (data) {                                     // 2
                                                                       //
    if (data.name.length < 3) {                                        // 4
      throw new Meteor.Error(400, "Error: Your nickname must be at least 3 characters.");
    } else if (data.password.length < 8) {                             //
      throw new Meteor.Error(400, "Your password must be at least 8 characters.");
    } else {                                                           //
      return Accounts.createUser({                                     // 9
        email: data.email,                                             // 10
        password: data.password,                                       // 11
        profile: {                                                     // 12
          name: data.name                                              // 13
        }                                                              //
      });                                                              //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user.js.map
