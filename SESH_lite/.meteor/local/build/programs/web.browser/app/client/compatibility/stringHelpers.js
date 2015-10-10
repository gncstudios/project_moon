Meteor.settings.public.PROJECT_NAME  = "Sesh";
Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});



Template.registerHelper("PROJECT_NAME", ()=>Meteor.settings.public.PROJECT_NAME);


UI.registerHelper("setTitle", function() {
  const TITLE_JOIN_STRING = " - ";
  var title = Meteor.settings.public.PROJECT_NAME;
  if(arguments.length > 0) { 
  	title+= TITLE_JOIN_STRING;
  }
  for (var i = 0; i < arguments.length - 1; ++i) {
  	// don't put falsy values in title
  	if(arguments[i]) {
    	title += arguments[i];
	}
  }
  document.title = title;
});
