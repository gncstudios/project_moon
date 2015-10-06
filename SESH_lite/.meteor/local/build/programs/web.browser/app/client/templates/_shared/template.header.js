(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default navbar-static-top",
    role: "navigation"
  }, "\n    ", HTML.DIV({
    "class": "container"
  }, "\n\n      ", HTML.DIV({
    "class": "navbar-header"
  }, "\n        ", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>'), "\n        ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, Blaze.View("lookup:PROJECT_NAME", function() {
    return Spacebars.mustache(view.lookup("PROJECT_NAME"));
  })), "\n      "), "\n\n      ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "main-nav"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n          ", HTML.UL({
      "class": "nav navbar-nav navbar-right"
    }, "\n            ", HTML.LI({
      "class": "dropdown"
    }, "\n              ", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "\n                ", HTML.I({
      "class": "fa fa-user"
    }), " ", Blaze.View("lookup:currentUser.profile.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "profile", "name"));
    }), " ", HTML.I({
      "class": "fa fa-caret-down"
    }), "\n              "), "\n              ", HTML.UL({
      "class": "dropdown-menu",
      role: "menu"
    }, "\n                ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "profile");
      }
    }, HTML.I({
      "class": "fa fa-user"
    }), " Profile")), "\n                ", HTML.LI(HTML.A({
      href: "#",
      "data-action": "logout"
    }, HTML.I({
      "class": "fa fa-lock"
    }), " Sign Out")), "\n              "), "\n            "), "\n          "), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "nav navbar-nav navbar-right"
    }, "\n            ", HTML.LI({
      "class": function() {
        return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
          regex: "/login"
        }));
      }
    }, HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "login");
      }
    }, "Login")), "\n            ", HTML.LI({
      "class": function() {
        return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
          regex: "/signup"
        }));
      }
    }, HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "signup");
      }
    }, "Sign Up")), "\n          "), "\n        " ];
  }), "\n\n        ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n          ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "/"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, HTML.Raw('<i class="fa fa-home"></i>'), " Home")), "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n\n            ", HTML.LI({
      "class": function() {
        return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
          regex: "/dashboard"
        }));
      }
    }, HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "dashboard");
      }
    }, HTML.I({
      "class": "fa fa-gear"
    }), " Dashboard")), "\n          " ];
  }), "\n        "), "\n      "), "\n\n    "), "\n  ");
}));

}).call(this);
