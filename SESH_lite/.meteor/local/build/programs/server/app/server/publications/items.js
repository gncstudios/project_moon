(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications/items.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publishComposite("items", function () {                         // 1
  return {                                                             // 2
    find: function () {                                                // 3
      return Items.find({ owner: this.userId });                       // 4
    }                                                                  //
    // ,                                                               //
    // children: [                                                     //
    //   {                                                             //
    //     find: function(item) {                                      //
    //       return [];                                                //
    //     }                                                           //
    //   }                                                             //
    // ]                                                               //
  };                                                                   //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=items.js.map
