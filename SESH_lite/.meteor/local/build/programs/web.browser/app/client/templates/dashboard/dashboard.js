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
  "click [data-action='add-item']": function (e) {                     // 7
                                                                       //
    // Prevent default button click behavior                           //
    e.preventDefault();                                                // 10
                                                                       //
    // Insert the form data into the "Items" collection                //
    Items.insert({                                                     // 13
      name: $("[name='name']").val(),                                  // 14
      rating: $("[name='rating']").val(),                              // 15
      owner: Meteor.userId()                                           // 16
    });                                                                //
                                                                       //
    // Hide the bootstrap modal once we submit the form                //
    $('#addItemModal').modal('hide');                                  // 20
  }                                                                    //
                                                                       //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
