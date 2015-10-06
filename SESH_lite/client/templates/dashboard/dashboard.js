Template.dashboard.rendered = function() {

};


Template.dashboard.events({
  "submit .add-item": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

    // Insert the form data into the "Items" collection
    Meetings.insert({
      name: $("[name='name']").val(),
      cost: $("[name='cost']").val(),
      owner: Meteor.userId()
    });

    // Hide the bootstrap modal once we submit the form
    $('#addItemModal').modal('hide');
  }

});

Template.dashboard.helpers({
  myMeetings: function() {
    return Meetings.find({owner: Meteor.userId()});
  }
});