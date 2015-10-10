Meteor.publishComposite("meetings", function() {
  return {
    find: function() {
      return Meetings.find();
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  };
});

Meteor.publish("otherMeetings", function(search) {
  return {
    find: function() {
      if(!search) {
        return Meetings.find();
      }
      var regex = new RegExp(["^", search || "", "$"].join(""), "i");

      return Meetings.find({name:regex});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  };
});
