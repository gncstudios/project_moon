(function(){
Template.__checkName("profile");
Template["profile"] = new Template("Template.profile", (function() {
  var view = this;
  return HTML.DIV({
    "class": "template-profile"
  }, "\n    ", HTML.DIV({
    "class": "page-header"
  }, "\n      ", HTML.Raw("<h1>Profile</h1>"), "\n      ", HTML.Raw("<h1>Current User</h1>"), "\n      ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n        ", HTML.UL("\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("emails"));
    }, function() {
      return [ "\n          ", HTML.LI(Blaze.View("lookup:address", function() {
        return Spacebars.mustache(view.lookup("address"));
      })), "\n        " ];
    }), "\n        "), "\n      " ];
  }), "\n\n      ", HTML.Raw("<h2>Profile:</h2>"), "\n      ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("profile"));
  }, function() {
    return [ "\n        ", Blaze.View("lookup:setTitle", function() {
      return Spacebars.mustache(view.lookup("setTitle"), "Profile - ", view.lookup("name"));
    }), "\n        ", HTML.FORM({
      "class": "form-horizontal col-md-6"
    }, "\n          ", HTML.DIV({
      "class": "form-group"
    }, "\n            ", HTML.LABEL({
      "for": "inputEmail3",
      "class": "col-sm-2 control-label"
    }, "Name:"), "\n            ", HTML.DIV({
      "class": "col-sm-10"
    }, "\n              ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      name: "nameText",
      placeholder: "",
      value: function() {
        return Spacebars.mustache(view.lookup("name"));
      }
    }), "\n            "), "\n          "), "\n        "), "\n      " ];
  }), "\n      ", HTML.Raw('<div class="clearfix"></div>'), "\n    "), "\n\n  ");
}));

}).call(this);
