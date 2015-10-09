// Home Route
Router.route('/', {
  name: 'home',
  title: "Home"
});

// Dashboard route
Router.route('/dashboard', {
  name: 'dashboard',
  title: "Dashboard",
  waitOn: function() {
    return this.subscribe('meetings');
  },
  data: {
    meetings: Meetings.find()

  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {

  }
});

// Profile Route
Router.route('/profile', {
  name: 'profile',
  title: function() {
    var user = Meteor.user();
    var username = user && user.profile && user.profile.name || "Unknown";
    return "Profile - " + username;
  }
});


Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['dashboard'] });