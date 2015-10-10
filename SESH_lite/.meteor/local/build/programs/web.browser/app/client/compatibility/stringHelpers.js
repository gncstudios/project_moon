/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/compatibility/stringHelpers.js                               //
// This file is in bare mode and is not in its own closure.            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.settings["public"].PROJECT_NAME = "Sesh";                       // 1
Template.registerHelper('truncate', function (string, length) {        // 2
  var cleanString = _(string).stripTags();                             // 3
  return _(cleanString).truncate(length);                              // 4
});                                                                    //
                                                                       //
Template.registerHelper("PROJECT_NAME", function () {                  // 9
  return Meteor.settings["public"].PROJECT_NAME;                       //
});                                                                    //
                                                                       //
UI.registerHelper("setTitle", function () {                            // 12
  var TITLE_JOIN_STRING = " - ";                                       // 13
  var title = Meteor.settings["public"].PROJECT_NAME;                  // 14
  if (arguments.length > 0) {                                          // 15
    title += TITLE_JOIN_STRING;                                        // 16
  }                                                                    //
  for (var i = 0; i < arguments.length - 1; ++i) {                     // 18
    // don't put falsy values in title                                 //
    if (arguments[i]) {                                                // 20
      title += arguments[i];                                           // 21
    }                                                                  //
  }                                                                    //
  document.title = title;                                              // 24
});                                                                    //
