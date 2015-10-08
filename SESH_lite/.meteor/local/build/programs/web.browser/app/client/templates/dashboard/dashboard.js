(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/dashboard/dashboard.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Template.dashboard.rendered = function () {};                          // 2
Template.dashboard.created = function () {                             // 5
  this.data.search = new ReactiveVar(undefined);                       // 6
};                                                                     //
var dep = new Tracker.Dependency();                                    // 8
                                                                       //
Template.dashboard.events({                                            // 10
  "submit .add-item": function (e) {                                   // 11
                                                                       //
    // Prevent default button click behavior                           //
    e.preventDefault();                                                // 14
                                                                       //
    // Insert the form data into the "Items" collection                //
    Meetings.insert({                                                  // 17
      name: $("[name='name']").val(),                                  // 18
      cost: $("[name='cost']").val() || 1.00,                          // 19
      owner: Meteor.userId()                                           // 20
    });                                                                //
                                                                       //
    // Hide the bootstrap modal once we submit the form                //
    $('#addItemModal').modal('hide');                                  // 24
  },                                                                   //
  "change #course-search, keyup #course-search": function (e) {        // 26
    //console.log("change");                                           //
    if (this.search === undefined) {                                   // 28
      this.search = new ReactiveVar("");                               // 29
    }                                                                  //
    this.search.set(e.target.value);                                   // 31
    //  console.log(this.search.get());                                //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Template.dashboard.helpers({                                           // 37
  exampleMapOptions: function () {                                     // 38
    // Make sure the maps API has loaded                               //
    if (GoogleMaps.loaded()) {                                         // 40
      // Map initialization options                                    //
      return {                                                         // 42
        center: new google.maps.LatLng(33.7683, -118.1956),            // 43
        zoom: 8                                                        // 44
      };                                                               //
    }                                                                  //
  }                                                                    //
});                                                                    //
Template.dashboard.helpers({                                           // 50
  myMeetings: function () {                                            // 51
    return Meetings.find({ owner: Meteor.userId() });                  // 52
  },                                                                   //
  otherMeetings: function () {                                         // 54
    //console.log("other");                                            //
    if (!this.search.get()) {                                          // 56
      return Meetings.find();                                          // 57
    }                                                                  //
    var regex = new RegExp([this.search.get()].join(""), "i");         // 59
    //console.log(regex);                                              //
    return Meetings.find({ name: regex });                             // 61
  },                                                                   //
  matches: function (str) {                                            // 63
    dep.depend();                                                      // 64
    //console.log("Search term: "+searchTerm);                         //
    var regex = new RegExp(["/", this.search.get() || "/"].join(""), "i");
    //console.log(regex);                                              //
                                                                       //
    return !searchTerm || str.match(regex);                            // 69
  }                                                                    //
});                                                                    //
                                                                       //
Template.dashboard.helpers({                                           // 73
  title: function () {                                                 // 74
    return "YAY TITLE";                                                // 75
  }                                                                    //
});                                                                    //
Template.dashboard.onCreated(function () {                             // 78
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function (map) {                      // 80
                                                                       //
    // Add a marker to the map once it's ready                         //
    var marker = new google.maps.Marker({                              // 84
      position: map.options.center,                                    // 85
      map: map.instance                                                // 86
    });                                                                //
    //console.log(map.options.center);                                 //
                                                                       //
    var _loop = function (i) {                                         //
      setTimeout(function () {                                         // 90
        var position = new google.maps.LatLng(map.options.center.lat() + Math.random() - 0.5, map.options.center.lng() + Math.random() - 0.5);
        var marker = new google.maps.Marker({                          // 92
          draggable: true,                                             // 93
          animation: google.maps.Animation.DROP,                       // 94
          position: position,                                          // 95
          map: map.instance,                                           // 96
          // We store the document _id on the marker in order          //
          // to update the document within the 'dragend' event below.  //
          id: i                                                        // 99
        });                                                            //
      }, 50 * i);                                                      //
    };                                                                 //
                                                                       //
    for (var i = 0; i < 10; i++) {                                     // 89
      _loop(i);                                                        //
    }                                                                  //
  });                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
