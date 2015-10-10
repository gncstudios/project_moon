// Define Collection
Meetings = new Mongo.Collection('meetings');

// Collection Helpers https://github.com/dburles/meteor-collection-helpers
Meetings.helpers({

});

// Collection Hooks https://github.com/matb33/meteor-collection-hooks
Meetings.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
