(function(){Meteor.methods({
  createNewUser: (data) => {

    if(data.name.length<3) {
      throw new Meteor.Error(400, "Error: Your nickname must be at least 3 characters.");
    } else if(data.password.length<8) {
      throw new Meteor.Error(400, "Your password must be at least 8 characters.");
    } else {
      return Accounts.createUser({
        email: data.email,
        password: data.password,
        profile: {
          name: data.name
        }
      });
    } 
  }
});
}).call(this);

//# sourceMappingURL=user.js.map
