/* jshint esnext: true */
/* globals Items */


Items.allow({
  'insert': (userId, doc) => {
    return userId===doc.owner;
  },
  'update': (userId, doc, fields, modifier) => {
  	console.log(doc);
  	console.log(fields);
  	console.log(modifier);
  	// user must be the owner and must not try to change the owner
    return userId===doc.owner && !fields.owner; 
  },
  'remove': (userId, doc) => {
    return userId===doc.owner;
  }
});
