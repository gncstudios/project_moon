Meeting = new Meteor.Collection( 'meetings' );

Meeting.allow({
  insert: (userId, post) =>  {
    console.log("Insert:");
    console.log(userId);
    console.log(post);
    return userId === post.owner;
  },
  update: () => userId == post.owner,
  remove: () => userId == post.owner
});

Meeting.deny({
 // insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  /*
    I like this. - Sam
  */
  "owner": {
    type: String,
    label: "The ID of the owner of the meeting."
  },
  "name": {
    type: String,
    label: "The name of the meeting"
  },
  "time": {
    type: Date,
    label: "The time of the meeting"
  },
  "attendees": {
    /*
      So are attendees goign to have a type? teacher or student? this may solve
      the many to many.
    */
    type: [String],
    label: "The users attending the event"
  }
});

Meeting.attachSchema( CollectionSchema );
