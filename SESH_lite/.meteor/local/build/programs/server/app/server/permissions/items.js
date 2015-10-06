(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/permissions/items.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/* jshint esnext: true */                                              //
/* globals Items */                                                    //
                                                                       //
Items.allow({                                                          // 5
  'insert': function (userId, doc) {                                   // 6
    return userId === doc.owner;                                       // 7
  },                                                                   //
  'update': function (userId, doc, fields, modifier) {                 // 9
    console.log(doc);                                                  // 10
    console.log(fields);                                               // 11
    console.log(modifier);                                             // 12
    // user must be the owner and must not try to change the owner     //
    return userId === doc.owner && !fields.owner;                      // 14
  },                                                                   //
  'remove': function (userId, doc) {                                   // 16
    return userId === doc.owner;                                       // 17
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=items.js.map
