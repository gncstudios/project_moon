
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

Template.dashboard.helpers({
  title:function(){
    return "YAY TITLE";
  }
});
Template.dashboard.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {


    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
    //console.log(map.options.center);
    for(let i = 0; i < 10; i++) {
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