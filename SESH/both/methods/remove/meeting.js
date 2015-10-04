Meteor.methods({
  removeMeeting(argument ) {
    check( argument, String );

    try {
      Meeting.remove( argument );
    } catch( exception ) {
      return exception;
    }
  }
});
