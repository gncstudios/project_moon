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
      lat: $("[name='lat']").val(),                                    // 20
      lng: $("[name='lng']").val(),                                    // 21
      owner: Meteor.userId()                                           // 22
    });                                                                //
                                                                       //
    // Hide the bootstrap modal once we submit the form                //
    $('#addItemModal').modal('hide');                                  // 26
  },                                                                   //
  "change #course-search, keyup #course-search": function (e) {        // 28
    //console.log("change");                                           //
    if (this.search === undefined) {                                   // 30
      this.search = new ReactiveVar("");                               // 31
    }                                                                  //
    this.search.set(e.target.value);                                   // 33
    //  console.log(this.search.get());                                //
  }                                                                    //
                                                                       //
});                                                                    //
                                                                       //
Template.dashboard.helpers({                                           // 39
  exampleMapOptions: function () {                                     // 40
    // Make sure the maps API has loaded                               //
    if (GoogleMaps.loaded()) {                                         // 42
      // Map initialization options                                    //
      return {                                                         // 44
        center: new google.maps.LatLng(33.7683, -118.1956),            // 45
        zoom: 8                                                        // 46
      };                                                               //
    }                                                                  //
  }                                                                    //
});                                                                    //
Template.dashboard.helpers({                                           // 52
  myMeetings: function () {                                            // 53
    return Meetings.find({ owner: Meteor.userId() });                  // 54
  },                                                                   //
  otherMeetings: function () {                                         // 56
    //console.log("other");                                            //
    if (!this.search.get()) {                                          // 58
      return Meetings.find();                                          // 59
    }                                                                  //
    var regex = new RegExp([this.search.get()].join(""), "i");         // 61
    //console.log(regex);                                              //
    return Meetings.find({ name: regex });                             // 63
  },                                                                   //
  matches: function (str) {                                            // 65
    dep.depend();                                                      // 66
    //console.log("Search term: "+searchTerm);                         //
    var regex = new RegExp(["/", this.search.get() || "/"].join(""), "i");
    //console.log(regex);                                              //
                                                                       //
    return !searchTerm || str.match(regex);                            // 71
  }                                                                    //
});                                                                    //
                                                                       //
Template.dashboard.onCreated(function () {                             // 76
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function (map) {                      // 78
                                                                       //
    Meetings.find().observe({                                          // 81
      added: function (document) {                                     // 82
        // Create a marker for this document                           //
        var lat = document.lat;                                        // 84
        var lng = document.lng;                                        // 85
        if (lat && lng) {                                              // 86
          var marker = new google.maps.Marker({                        // 87
            draggable: true,                                           // 88
            animation: google.maps.Animation.DROP,                     // 89
            position: new google.maps.LatLng(lat, lng),                // 90
            map: map.instance,                                         // 91
            // We store the document _id on the marker in order        //
            // to update the document within the 'dragend' event below.
            id: document._id                                           // 94
          });                                                          //
                                                                       //
          // This listener lets us drag markers on the map and update their corresponding document.
          google.maps.event.addListener(marker, 'dragend', function (event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() } });
          });                                                          //
          if (document._id)                                            // 102
            // Store this marker instance within the markers object.   //
            markers[document._id] = marker;else console.log("no document _id??");
        }                                                              //
      },                                                               //
      changed: function (newDocument, oldDocument) {                   // 109
        if (markers[newDocument._id]) {                                // 110
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
        }                                                              //
      },                                                               //
      removed: function (oldDocument) {                                // 114
                                                                       //
        console.log("removed:");                                       // 116
        console.log(oldDocument);                                      // 117
        markers[oldDocument._id].setMap(null);                         // 118
                                                                       //
        // Clear the event listener                                    //
        google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
                                                                       //
        // Remove the reference to this marker instance                //
        delete markers[oldDocument._id];                               // 125
      }                                                                //
    });                                                                //
                                                                       //
    $("[name='lat']").val(map.options.center.lat() + Math.random() - 0.5);
    $("[name='lng']").val(map.options.center.lng() + Math.random() - 0.5);
    //console.log(map.options.center);                                 //
                                                                       //
    var _loop = function (i) {                                         //
      setTimeout(function () {                                         // 133
        var position = new google.maps.LatLng(map.options.center.lat() + Math.random() - 0.5, map.options.center.lng() + Math.random() - 0.5);
        var marker = new google.maps.Marker({                          // 135
          draggable: true,                                             // 136
          animation: google.maps.Animation.DROP,                       // 137
          position: position,                                          // 138
          map: map.instance,                                           // 139
          // We store the document _id on the marker in order          //
          // to update the document within the 'dragend' event below.  //
          id: i                                                        // 142
        });                                                            //
      }, 50 * i);                                                      //
    };                                                                 //
                                                                       //
    for (var i = 0; false && i < 10; i++) {                            // 132
      _loop(i);                                                        //
    }                                                                  //
  });                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
