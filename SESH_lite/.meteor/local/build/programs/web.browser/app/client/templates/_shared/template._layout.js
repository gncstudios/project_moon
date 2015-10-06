(function(){
Template.__checkName("appLayout");
Template["appLayout"] = new Template("Template.appLayout", (function() {
  var view = this;
  return [ HTML.Raw('<!--[if lt IE 9]>\n    <p class="browser-warning"><strong><i class="icon-exclamation-sign"></i> Warning</strong> - You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to properly view this website.</p>\n  <![endif]-->\n\n  '), Spacebars.include(view.lookupTemplate("header")), "\n\n  ", HTML.DIV({
    "class": "container"
  }, "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  "), "\n\n  ", Spacebars.include(view.lookupTemplate("footer")) ];
}));

Template.__checkName("authLayout");
Template["authLayout"] = new Template("Template.authLayout", (function() {
  var view = this;
  return [ HTML.Raw('<!--[if lt IE 9]>\n    <p class="browser-warning"><strong><i class="icon-exclamation-sign"></i> Warning</strong> - You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to properly view this website.</p>\n  <![endif]-->\n\n  '), HTML.DIV({
    "class": "text-center"
  }, "\n    ", HTML.Raw("<h3>\n      Sesh\n    </h3>"), "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  ") ];
}));

}).call(this);
