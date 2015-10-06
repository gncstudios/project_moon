(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/collections/items.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Define Collection                                                   //
Items = new Mongo.Collection('items');                                 // 2
                                                                       //
// Collection Helpers https://github.com/dburles/meteor-collection-helpers
Items.helpers({});                                                     // 5
                                                                       //
// Collection Hooks https://github.com/matb33/meteor-collection-hooks  //
Items.before.insert(function (userId, doc) {                           // 10
  doc.createdAt = moment().toDate();                                   // 11
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=items.js.map
