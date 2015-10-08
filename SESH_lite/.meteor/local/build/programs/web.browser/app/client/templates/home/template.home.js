(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ Blaze.View("lookup:setTitle", function() {
    return Spacebars.mustache(view.lookup("setTitle"));
  }), "\n  ", HTML.DIV({
    "class": "template-home"
  }, "\n    ", HTML.DIV({
    "class": "page-header"
  }, "\n      ", HTML.H1("Welcome to ", Blaze.View("lookup:PROJECT_NAME", function() {
    return Spacebars.mustache(view.lookup("PROJECT_NAME"));
  })), "\n    "), "\n    ", HTML.Raw('<div class="col-md-6">\n    	<h2>What is Sesh?</h2>\n	    <p>\n	      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n	    </p>\n    </div>'), "\n    ", HTML.Raw('<div class="col-md-6">\n    	<h2>So what?</h2>\n	    <p>\n	      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n	    </p>\n    </div>'), "\n  "), HTML.Raw('\n  <div style="border-radius:3px;min-height:3px;box-shadow:0 0 1px black;padding:0;overflow:hidden;opacity:0.5" class="col-md-12">\n	  <div class="col-md-2" style="height:3px;background:red"></div>\n	  <div class="col-md-2" style="height:3px;background:orange"></div>\n	  <div class="col-md-2" style="height:3px;background:yellow"></div>\n	  <div class="col-md-2" style="height:3px;background:green"></div>\n	  <div class="col-md-2" style="height:3px;background:blue"></div>\n	  <div class="col-md-2" style="height:3px;background:purple"></div>\n  </div>') ];
}));

}).call(this);
