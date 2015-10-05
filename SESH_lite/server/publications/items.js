Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({owner:this.userId});
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
