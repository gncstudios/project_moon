/* jshint esnext: true */
/* globals Meetings */


Meetings.allow({
  'insert': (userId, doc) => {
    return userId===doc.owner;
  },
  'update': (userId, doc, fields, modifier) => {
  	// user must be the owner and must not try to change the owner
    return userId===doc.owner && !fields.owner; 
  },
  'remove': (userId, doc) => {
    return userId===doc.owner;
  }
});
