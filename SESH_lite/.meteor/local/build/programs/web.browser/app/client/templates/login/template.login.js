(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return [ HTML.Raw("<h2>Log in</h2>\n\n  "), HTML.FORM({
    "class": function() {
      return [ "col-md-6 ", Spacebars.mustache(view.lookup("formClass")), " col-md-offset-3" ];
    },
    id: "loginForm"
  }, "\n    ", HTML.Raw('<div class="form-group">\n      <label for="email">Email address</label>\n      <input type="email" class="form-control" name="email" placeholder="Email">\n    </div>'), "\n    ", HTML.Raw('<div class="form-group">\n      <label for="password">Password</label>\n      <input type="password" class="form-control" name="password" placeholder="Password">\n    </div>'), "\n    ", HTML.Raw('<button type="submit" class="btn btn-default">Login</button>'), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("badFormResponse"));
  }, function() {
    return [ "\n    ", HTML.SPAN({
      "class": "text-danger pull-right"
    }, Blaze.View("lookup:badFormResponse", function() {
      return Spacebars.mustache(view.lookup("badFormResponse"));
    })), "\n    " ];
  }), "\n  ") ];
}));

}).call(this);
