let dashboard = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      test: {
        required: true
      }
    },
    messages: {
      test: {
        required: "what's the name?",
        }
    },
    submitHandler() { _handledashboard( template ); }
  };
};

let _handledashboard = ( template ) => {
  let test    = template.find( '[name="test"]' ).value;
  Meeting.insert({owner:Meteor.userId, name: "Test", attendees:[]});
  console.log(Meeting.find().fetch());
/*
  Meteor.dashboardWithPassword( email, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Logged in!', 'success' );
    }
  });*/
};

Modules.client.dashboard = dashboard;
