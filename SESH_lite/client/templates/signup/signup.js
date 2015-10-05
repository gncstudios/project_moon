    let that = this;

Template.signup.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.email.value;
    var passwordVar = event.target.password.value;
    var nameVar = event.target.name.value;
    Meteor.call("createNewUser", {
      email: emailVar,
      password: passwordVar,
      name: nameVar
    }, function(err) {
      if(err) {
        console.log(err);
        that.badFormResponse.set(err.reason);
      } else {
        Router.go("/login")
      }
    });
  }
});


Template.signup.onCreated(() => {
  this.badFormResponse = new ReactiveVar(undefined);
});
Template.signup.helpers({
  formClass: () => {
    return this.badFormResponse.get() ? "has-error" : "";
  }, 
  badFormResponse: () => this.badFormResponse.get()
});