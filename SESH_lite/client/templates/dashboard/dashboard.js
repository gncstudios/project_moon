
Template.dashboard.rendered = function() {

};
Template.dashboard.created = function() {
    this.data.search = new ReactiveVar(undefined);
};
let dep = new Tracker.Dependency();

Template.dashboard.events({
  "submit .add-item": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

    // Insert the form data into the "Items" collection
    Meetings.insert({
      name: $("[name='name']").val(),
      cost: $("[name='cost']").val() || 1.00,
      lat: $("[name='lat']").val(),
      lng: $("[name='lng']").val(),
      owner: Meteor.userId()
    });

    // Hide the bootstrap modal once we submit the form
    $('#addItemModal').modal('hide');
  },
  "change #course-search, keyup #course-search": function(e) {
    //console.log("change");
    if(this.search === undefined) {
      this.search = new ReactiveVar("");
    }
    this.search.set(e.target.value);
  //  console.log(this.search.get());
  }

});

Template.dashboard.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(33.7683, -118.1956),
        zoom: 8
      };

    }
  }
});
Template.dashboard.helpers({
  myMeetings: function() {
    return Meetings.find({owner: Meteor.userId()});
  },
  otherMeetings: function() {
    //console.log("other");
    if(!this.search.get()) {
      return Meetings.find();
    }
    var regex = new RegExp([this.search.get()].join(""), "i");
    //console.log(regex);
    return Meetings.find({name: regex});
  },
  matches: function(str) {
    dep.depend();
    //console.log("Search term: "+searchTerm);
    var regex = new RegExp(["/", this.search.get() || "/"].join(""), "i");
    //console.log(regex);

    return !searchTerm || str.match(regex);
  }
});


Template.dashboard.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {

var markers = {};

Meetings.find().observe({  
  added: function(document) {
    // Create a marker for this document
    var lat = document.lat;
    var lng = document.lng;
    if(lat && lng) {
      var marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(lat, lng),
        map: map.instance,
        // We store the document _id on the marker in order 
        // to update the document within the 'dragend' event below.
        id: document._id
      });


      // This listener lets us drag markers on the map and update their corresponding document.
      google.maps.event.addListener(marker, 'dragend', function(event) {
        Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
      });
      if(document._id) {
      // Store this marker instance within the markers object.
        markers[document._id] = marker;
      } else {
        console.log("no document _id??");
      }
    }
  },
  changed: function(newDocument, oldDocument) {
    if(markers[newDocument._id]) {
      markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
    }
  },
  removed: function(oldDocument) {
    
    console.log("removed:")
    console.log(oldDocument);
    markers[oldDocument._id].setMap(null);

    // Clear the event listener
    google.maps.event.clearInstanceListeners(
      markers[oldDocument._id]);

    // Remove the reference to this marker instance
    delete markers[oldDocument._id];
  }
});

    $("[name='lat']").val(map.options.center.lat()+Math.random()-0.5);
    $("[name='lng']").val(map.options.center.lng()+Math.random()-0.5);
    //console.log(map.options.center);
    for(let i = 0; false && i < 10; i++) {
      setTimeout(function() {
        let position = new google.maps.LatLng(map.options.center.lat()+Math.random()-0.5, map.options.center.lng()+Math.random()-0.5);
        let marker = new google.maps.Marker({
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: position,
              map: map.instance,
              // We store the document _id on the marker in order 
              // to update the document within the 'dragend' event below.
              id: i
            });
      }, 50*i);
    }
  });

});