(function(){
Template.login.onCreated(() => {
  this.badFormResponse = new ReactiveVar(undefined);
});
    let that = this;

Template.login.events({
  'keydown #loginForm input': function(event) {
    that.badFormResponse.set(undefined);
  },
  'submit #loginForm': function(event) {
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.password.value;
    var rawFormData = event.target;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        that.badFormResponse.set("Invalid username or password.");
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
      } else {
        Router.go("/profile");
      }
    });

  }
});

Template.login.helpers({
  formClass: () => {
    return this.badFormResponse.get() ? "has-error" : "";
  }, 
  badFormResponse: () => this.badFormResponse.get()
});
}).call(this);
