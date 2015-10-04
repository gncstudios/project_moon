Meteor.methods({
  insertMeeting( argument ) {
    check( argument, Object );

    try {
      var documentId = Meeting.insert( argument );
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
