(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var check = Package.check.check;
var Match = Package.check.Match;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Iron = Package['iron:core'].Iron;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/useraccounts_iron-routing/packages/useraccounts_iron-routing.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/useraccounts:iron-routing/lib/core.js                                                              //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
/* global                                                                                                      // 1   // 9
  AccountsTemplates: false                                                                                     // 2   // 10
*/                                                                                                             // 3   // 11
'use strict';                                                                                                  // 4   // 12
                                                                                                               // 5   // 13
// ---------------------------------------------------------------------------------                           // 6   // 14
                                                                                                               // 7   // 15
// Patterns for methods" parameters                                                                            // 8   // 16
                                                                                                               // 9   // 17
// ---------------------------------------------------------------------------------                           // 10  // 18
                                                                                                               // 11  // 19
// Route configuration pattern to be checked with check                                                        // 12  // 20
var ROUTE_PAT = {                                                                                              // 13  // 21
  name: Match.Optional(String),                                                                                // 14  // 22
  path: Match.Optional(String),                                                                                // 15  // 23
  template: Match.Optional(String),                                                                            // 16  // 24
  layoutTemplate: Match.Optional(String),                                                                      // 17  // 25
  redirect: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                    // 18  // 26
};                                                                                                             // 19  // 27
                                                                                                               // 20  // 28
/*                                                                                                             // 21  // 29
  Routes configuration can be done by calling AccountsTemplates.configureRoute with the route name and the     // 22  // 30
  following options in a separate object. E.g. AccountsTemplates.configureRoute("gingIn", option);             // 23  // 31
    name:           String (optional). A unique route"s name to be passed to iron-router                       // 24  // 32
    path:           String (optional). A unique route"s path to be passed to iron-router                       // 25  // 33
    template:       String (optional). The name of the template to be rendered                                 // 26  // 34
    layoutTemplate: String (optional). The name of the layout to be used                                       // 27  // 35
    redirect:       String (optional). The name of the route (or its path) where to redirect after form submit // 28  // 36
*/                                                                                                             // 29  // 37
                                                                                                               // 30  // 38
                                                                                                               // 31  // 39
// Allowed routes along with theirs default configuration values                                               // 32  // 40
AccountsTemplates.ROUTE_DEFAULT = {                                                                            // 33  // 41
  changePwd:      { name: "atChangePwd",      path: "/change-password"},                                       // 34  // 42
  enrollAccount:  { name: "atEnrollAccount",  path: "/enroll-account"},                                        // 35  // 43
  ensureSignedIn: { name: "atEnsureSignedIn", path: null},                                                     // 36  // 44
  forgotPwd:      { name: "atForgotPwd",      path: "/forgot-password"},                                       // 37  // 45
  resetPwd:       { name: "atResetPwd",       path: "/reset-password"},                                        // 38  // 46
  signIn:         { name: "atSignIn",         path: "/sign-in"},                                               // 39  // 47
  signUp:         { name: "atSignUp",         path: "/sign-up"},                                               // 40  // 48
  verifyEmail:    { name: "atVerifyEmail",    path: "/verify-email"},                                          // 41  // 49
  resendVerificationEmail: { name: "atResendVerificationEmail", path: "/send-again"},                          // 42  // 50
};                                                                                                             // 43  // 51
                                                                                                               // 44  // 52
                                                                                                               // 45  // 53
// Current configuration values                                                                                // 46  // 54
// Redirects                                                                                                   // 47  // 55
AccountsTemplates.options.homeRoutePath = "/";                                                                 // 48  // 56
AccountsTemplates.options.redirectTimeout = 2000; // 2 seconds                                                 // 49  // 57
                                                                                                               // 50  // 58
// Known routes used to filter out previous path for redirects...                                              // 51  // 59
AccountsTemplates.knownRoutes = [];                                                                            // 52  // 60
                                                                                                               // 53  // 61
// Configured routes                                                                                           // 54  // 62
AccountsTemplates.routes = {};                                                                                 // 55  // 63
                                                                                                               // 56  // 64
AccountsTemplates.configureRoute = function(route, options) {                                                  // 57  // 65
  check(route, String);                                                                                        // 58  // 66
  check(options, Match.OneOf(undefined, Match.ObjectIncluding(ROUTE_PAT)));                                    // 59  // 67
  options = _.clone(options);                                                                                  // 60  // 68
  // Route Configuration can be done only before initialization                                                // 61  // 69
  if (this._initialized) {                                                                                     // 62  // 70
    throw new Error("Route Configuration can be done only before AccountsTemplates.init!");                    // 63  // 71
  }                                                                                                            // 64  // 72
  // Only allowed routes can be configured                                                                     // 65  // 73
  if (!(route in this.ROUTE_DEFAULT)) {                                                                        // 66  // 74
    throw new Error("Unknown Route!");                                                                         // 67  // 75
  }                                                                                                            // 68  // 76
  // Allow route configuration only once                                                                       // 69  // 77
  if (route in this.routes) {                                                                                  // 70  // 78
    throw new Error("Route already configured!");                                                              // 71  // 79
  }                                                                                                            // 72  // 80
                                                                                                               // 73  // 81
  // Possibly adds a initial / to the provided path                                                            // 74  // 82
  if (options && options.path && options.path[0] !== "/") {                                                    // 75  // 83
    options.path = "/" + options.path;                                                                         // 76  // 84
  }                                                                                                            // 77  // 85
  // Updates the current configuration                                                                         // 78  // 86
  options = _.defaults(options || {}, this.ROUTE_DEFAULT[route]);                                              // 79  // 87
                                                                                                               // 80  // 88
  this.routes[route] = options;                                                                                // 81  // 89
  // Known routes are used to filter out previous path for redirects...                                        // 82  // 90
  AccountsTemplates.knownRoutes.push(options.path);                                                            // 83  // 91
                                                                                                               // 84  // 92
  if (Meteor.isServer){                                                                                        // 85  // 93
    // Configures "reset password" email link                                                                  // 86  // 94
    if (route === "resetPwd"){                                                                                 // 87  // 95
      var resetPwdPath = options.path.substr(1);                                                               // 88  // 96
      Accounts.urls.resetPassword = function(token){                                                           // 89  // 97
        return Meteor.absoluteUrl(resetPwdPath + "/" + token);                                                 // 90  // 98
      };                                                                                                       // 91  // 99
    }                                                                                                          // 92  // 100
    // Configures "enroll account" email link                                                                  // 93  // 101
    if (route === "enrollAccount"){                                                                            // 94  // 102
      var enrollAccountPath = options.path.substr(1);                                                          // 95  // 103
      Accounts.urls.enrollAccount = function(token){                                                           // 96  // 104
        return Meteor.absoluteUrl(enrollAccountPath + "/" + token);                                            // 97  // 105
      };                                                                                                       // 98  // 106
    }                                                                                                          // 99  // 107
    // Configures "verify email" email link                                                                    // 100
    if (route === "verifyEmail"){                                                                              // 101
      var verifyEmailPath = options.path.substr(1);                                                            // 102
      Accounts.urls.verifyEmail = function(token){                                                             // 103
        return Meteor.absoluteUrl(verifyEmailPath + "/" + token);                                              // 104
      };                                                                                                       // 105
    }                                                                                                          // 106
  }                                                                                                            // 107
                                                                                                               // 108
  if (route === "ensureSignedIn") {                                                                            // 109
    return;                                                                                                    // 110
  }                                                                                                            // 111
  if (route === "changePwd" && !AccountsTemplates.options.enablePasswordChange) {                              // 112
    throw new Error("changePwd route configured but enablePasswordChange set to false!");                      // 113
  }                                                                                                            // 114
  if (route === "forgotPwd" && !AccountsTemplates.options.showForgotPasswordLink) {                            // 115
    throw new Error("forgotPwd route configured but showForgotPasswordLink set to false!");                    // 116
  }                                                                                                            // 117
  if (route === "signUp" && AccountsTemplates.options.forbidClientAccountCreation) {                           // 118
    throw new Error("signUp route configured but forbidClientAccountCreation set to true!");                   // 119
  }                                                                                                            // 120
                                                                                                               // 121
  // Determines the default layout to be used in case no specific one is specified for single routes           // 122
  var defaultLayout = AccountsTemplates.options.defaultLayout || Router.options.layoutTemplate;                // 123
                                                                                                               // 124
  var name = options.name; // Default provided...                                                              // 125
  var path = options.path; // Default provided...                                                              // 126
  var template = options.template || "fullPageAtForm";                                                         // 127
  var layoutTemplate = options.layoutTemplate || defaultLayout;                                                // 128
  var additionalOptions = _.omit(options, [                                                                    // 129
    "layoutTemplate", "name", "path", "redirect", "template"                                                   // 130
  ]);                                                                                                          // 131
                                                                                                               // 132
  // Possibly adds token parameter                                                                             // 133
  if (_.contains(["enrollAccount", "resetPwd", "verifyEmail"], route)){                                        // 134
    path += "/:paramToken";                                                                                    // 135
    if (route === "verifyEmail") {                                                                             // 136
      Router.route(path, _.extend(additionalOptions, {                                                         // 137
        name: name,                                                                                            // 138
        template: template,                                                                                    // 139
        layoutTemplate: layoutTemplate,                                                                        // 140
        onRun: function() {                                                                                    // 141
          AccountsTemplates.setState(route);                                                                   // 142
          AccountsTemplates.setDisabled(true);                                                                 // 143
          var token = this.params.paramToken;                                                                  // 144
          Accounts.verifyEmail(token, function(error){                                                         // 145
            AccountsTemplates.setDisabled(false);                                                              // 146
            AccountsTemplates.submitCallback(error, route, function(){                                         // 147
              AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailVerified);          // 148
            });                                                                                                // 149
          });                                                                                                  // 150
                                                                                                               // 151
          this.next();                                                                                         // 152
        },                                                                                                     // 153
        onStop: function() {                                                                                   // 154
          AccountsTemplates.clearState();                                                                      // 155
        },                                                                                                     // 156
      }));                                                                                                     // 157
    }                                                                                                          // 158
    else {                                                                                                     // 159
      Router.route(path, _.extend(additionalOptions, {                                                         // 160
        name: name,                                                                                            // 161
        template: template,                                                                                    // 162
        layoutTemplate: layoutTemplate,                                                                        // 163
        onBeforeAction: function() {                                                                           // 164
          AccountsTemplates.paramToken = this.params.paramToken;                                               // 165
          AccountsTemplates.setState(route);                                                                   // 166
          this.next();                                                                                         // 167
        },                                                                                                     // 168
        onStop: function() {                                                                                   // 169
          AccountsTemplates.clearState();                                                                      // 170
          AccountsTemplates.paramToken = null;                                                                 // 171
        }                                                                                                      // 172
      }));                                                                                                     // 173
    }                                                                                                          // 174
  }                                                                                                            // 175
  else {                                                                                                       // 176
    Router.route(path, _.extend(additionalOptions, {                                                           // 177
      name: name,                                                                                              // 178
      template: template,                                                                                      // 179
      layoutTemplate: layoutTemplate,                                                                          // 180
      onBeforeAction: function() {                                                                             // 181
        var redirect = false;                                                                                  // 182
        if (route === 'changePwd') {                                                                           // 183
          if (!Meteor.loggingIn() && !Meteor.userId()) {                                                       // 184
            redirect = true;                                                                                   // 185
          }                                                                                                    // 186
        }                                                                                                      // 187
        else if (Meteor.userId()) {                                                                            // 188
          redirect = true;                                                                                     // 189
        }                                                                                                      // 190
        if (redirect) {                                                                                        // 191
          AccountsTemplates.postSubmitRedirect(route);                                                         // 192
          this.stop();                                                                                         // 193
        }                                                                                                      // 194
        else {                                                                                                 // 195
          AccountsTemplates.setState(route);                                                                   // 196
          this.next();                                                                                         // 197
        }                                                                                                      // 198
      },                                                                                                       // 199
      onStop: function() {                                                                                     // 200
        AccountsTemplates.clearState();                                                                        // 201
      }                                                                                                        // 202
    }));                                                                                                       // 203
  }                                                                                                            // 204
};                                                                                                             // 205
                                                                                                               // 206
                                                                                                               // 207
AccountsTemplates.getRouteName = function(route) {                                                             // 208
  if (route in this.routes) {                                                                                  // 209
    return this.routes[route].name;                                                                            // 210
  }                                                                                                            // 211
  return null;                                                                                                 // 212
};                                                                                                             // 213
                                                                                                               // 214
AccountsTemplates.getRoutePath = function(route) {                                                             // 215
  if (route in this.routes) {                                                                                  // 216
    return this.routes[route].path;                                                                            // 217
  }                                                                                                            // 218
  return "#";                                                                                                  // 219
};                                                                                                             // 220
                                                                                                               // 221
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 230
                                                                                                                      // 231
}).call(this);                                                                                                        // 232
                                                                                                                      // 233
                                                                                                                      // 234
                                                                                                                      // 235
                                                                                                                      // 236
                                                                                                                      // 237
                                                                                                                      // 238
(function () {                                                                                                        // 239
                                                                                                                      // 240
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 241
//                                                                                                             //     // 242
// packages/useraccounts:iron-routing/lib/server.js                                                            //     // 243
//                                                                                                             //     // 244
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 245
                                                                                                               //     // 246
/* global                                                                                                      // 1   // 247
  Iron: false                                                                                                  // 2   // 248
*/                                                                                                             // 3   // 249
'use strict';                                                                                                  // 4   // 250
                                                                                                               // 5   // 251
                                                                                                               // 6   // 252
// Fake server-side IR plugin to allow for shared routing files                                                // 7   // 253
Iron.Router.plugins.ensureSignedIn = function (router, options) {};                                            // 8   // 254
                                                                                                               // 9   // 255
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 256
                                                                                                                      // 257
}).call(this);                                                                                                        // 258
                                                                                                                      // 259
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:iron-routing'] = {};

})();

//# sourceMappingURL=useraccounts_iron-routing.js.map
