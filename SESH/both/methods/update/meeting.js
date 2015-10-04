Meteor.methods({
  updateMeeting( argument ) {
    check( argument, Object );

    try {
      var documentId = Meeting.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
