(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/dashboard/dashboard.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.dashboard.rendered = function () {};                          // 1
                                                                       //
Template.dashboard.events({                                            // 6
  "submit .add-item": function (e) {                                   // 7
                                                                       //
    // Prevent default button click behavior                           //
    e.preventDefault();                                                // 10
                                                                       //
    // Insert the form data into the "Items" collection                //
    Meetings.insert({                                                  // 13
      name: $("[name='name']").val(),                                  // 14
      cost: $("[name='cost']").val(),                                  // 15
      owner: Meteor.userId()                                           // 16
    });                                                                //
                                                                       //
    // Hide the bootstrap modal once we submit the form                //
    $('#addItemModal').modal('hide');                                  // 20
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Template.dashboard.helpers({                                           // 25
  myMeetings: function () {                                            // 26
    return Meetings.find({ owner: Meteor.userId() });                  // 27
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
