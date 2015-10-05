// Home Route
Router.route('/', {
  name: 'home'
});

// Dashboard route
Router.route('/dashboard', {
  name: 'dashboard',
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  },
  onBeforeAction: function (pause) {
    if(!Meteor.userId()) {
      Router.go("/login");
    }
    this.next();
  },
  onAfterAction: function () {

  }
});

// Profile Route
Router.route('/profile', {
  name: 'profile'
});

// Login Route
Router.route('/login', {
  name: 'login'
});
// Signup Route
Router.route('/signup', {
  name: 'signup'
});