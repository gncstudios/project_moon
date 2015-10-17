Template.header.events({
  "click [data-action='logout']": function (e) {
    e.preventDefault();

    // Log out of Meteor Accounts
    Meteor.logout();

    // Tell the router what page it should go to once we log out
    Router.go('/');
  },
  "click [data-action='toggle-side-nav']": function (e) {
    e.preventDefault();
    console.log("Toggling side nav");
    // toggle the side Navigation
    $('.side-nav').toggle('1000');
  }
});


/* THis shit here hides the side nav if it is open ON ANY FUCKING CLICK EXCEPT!!!!
    - When you click any button with data-action equal to toggle-side-nav
    - on the side menu itself or any of its children elements
*/
Template.header.rendered = function () {
  $('html').click(function() {
    console.log($(event.target));
    console.log($(event.target).closest('.side-nav'));
    if(!$(event.target).closest('.side-nav').length && ($(event.target).attr('data-action') !== "toggle-side-nav")) {
      console.log("clicked outside the nav");
        $('.side-nav').hide('1000');
    }
  });
}
