/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/compatibility/stringHelpers.js                               //
// This file is in bare mode and is not in its own closure.            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.registerHelper('truncate', function (string, length) {        // 1
  var cleanString = _(string).stripTags();                             // 2
  return _(cleanString).truncate(length);                              // 3
});                                                                    //
                                                                       //
Template.registerHelper("PROJECT_NAME", function () {                  // 6
  return "Sesh";                                                       //
});                                                                    //
