(function(){
Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return HTML.FOOTER("\n    ", HTML.DIV({
    "class": "container"
  }, "\n      ", HTML.P({
    "class": "text-center text-muted"
  }, "\n        ", HTML.Raw("&copy;"), " ", Blaze.View("lookup:PROJECT_NAME", function() {
    return Spacebars.mustache(view.lookup("PROJECT_NAME"));
  }), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
