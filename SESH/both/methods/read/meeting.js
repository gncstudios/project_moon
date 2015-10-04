Meteor.methods({
  readMeeting(argument ) {
    check( argument, String );

    var document = Meeting.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
    }

    return document;
  }
});
