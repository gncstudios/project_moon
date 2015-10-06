//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Iron = Package['iron:core'].Iron;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/multiply_iron-router-progress/template.progress.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("__IronRouterProgress__");                                                                  // 2
Template["__IronRouterProgress__"] = new Template("Template.__IronRouterProgress__", (function() {               // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      template: Spacebars.call(view.lookup("template")),                                                         // 7
      data: Spacebars.call(view.lookup("data"))                                                                  // 8
    };                                                                                                           // 9
  }, function() {                                                                                                // 10
    return Spacebars.include(function() {                                                                        // 11
      return Spacebars.call(Template.__dynamic);                                                                 // 12
    });                                                                                                          // 13
  });                                                                                                            // 14
}));                                                                                                             // 15
                                                                                                                 // 16
Template.__checkName("__IronRouterProgressDefault__");                                                           // 17
Template["__IronRouterProgressDefault__"] = new Template("Template.__IronRouterProgressDefault__", (function() {
  var view = this;                                                                                               // 19
  return HTML.DIV({                                                                                              // 20
    id: "iron-router-progress",                                                                                  // 21
    "class": function() {                                                                                        // 22
      return Spacebars.mustache(view.lookup("cssClass"));                                                        // 23
    },                                                                                                           // 24
    style: function() {                                                                                          // 25
      return Spacebars.mustache(view.lookup("cssStyle"));                                                        // 26
    }                                                                                                            // 27
  });                                                                                                            // 28
}));                                                                                                             // 29
                                                                                                                 // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/multiply_iron-router-progress/progress.coffee.js                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var debug;                                                                                                       // 2
                                                                                                                 //
Router.configure({                                                                                               // 2
  progress: true,                                                                                                // 3
  progressDebug: false,                                                                                          // 3
  progressDelay: false,                                                                                          // 3
  progressSpinner: true,                                                                                         // 3
  progressTick: true                                                                                             // 3
});                                                                                                              //
                                                                                                                 //
debug = function() {                                                                                             // 2
  if (Router.current().lookupOption('progressDebug')) {                                                          // 10
    return console.log.apply(console, arguments);                                                                //
  }                                                                                                              //
};                                                                                                               // 10
                                                                                                                 //
Template.__IronRouterProgress__.created = function() {                                                           // 2
  var self;                                                                                                      // 13
  self = this;                                                                                                   // 13
  this.ticker = false;                                                                                           // 13
  this.delay = false;                                                                                            // 13
  this.started = false;                                                                                          // 13
  this.loading = new ReactiveVar(false);                                                                         // 13
  this.spinner = new ReactiveVar(false);                                                                         // 13
  this.done = new ReactiveVar(false);                                                                            // 13
  this.percent = new ReactiveVar(false);                                                                         // 13
  this.functions = {                                                                                             // 13
    reset: function(element) {                                                                                   // 24
      debug('Reset');                                                                                            // 25
      self.functions.stop();                                                                                     // 25
      self.loading.set(false);                                                                                   // 25
      self.done.set(false);                                                                                      // 25
      self.percent.set(0);                                                                                       // 25
      self.started = false;                                                                                      // 25
      if (element) {                                                                                             // 35
        element.offsetWidth = element.offsetWidth;                                                               // 35
      }                                                                                                          //
      return self;                                                                                               //
    },                                                                                                           //
    start: function(element) {                                                                                   // 24
      var delay;                                                                                                 // 40
      debug('Start');                                                                                            // 40
      self.functions.reset(element);                                                                             // 40
      self.spinner.set(Router.current().lookupOption('progressSpinner') || false);                               // 40
      self.loading.set(true);                                                                                    // 40
      delay = Router.current().lookupOption('progressDelay');                                                    // 40
      if (delay > 0) {                                                                                           // 52
        debug('Delayed');                                                                                        // 53
        self.delay = Meteor.setTimeout(function() {                                                              // 53
          self.started = true;                                                                                   // 55
          self.functions.progress();                                                                             // 55
          return self.functions.tick();                                                                          //
        }, delay);                                                                                               //
      } else {                                                                                                   //
        debug('Not delayed');                                                                                    // 60
        self.started = true;                                                                                     // 60
        self.functions.progress();                                                                               // 60
        self.functions.tick();                                                                                   // 60
      }                                                                                                          //
      return self;                                                                                               //
    },                                                                                                           //
    progress: function(progress) {                                                                               // 24
      var percent, percentNew;                                                                                   // 68
      if (progress == null) {                                                                                    //
        progress = false;                                                                                        //
      }                                                                                                          //
      debug('Progress');                                                                                         // 68
      percent = self.percent.get();                                                                              // 68
      percentNew = percent + (progress ? progress : (100 - percent) * (Math.random() * 0.45 + 0.05) | 0);        // 68
      if (percentNew >= 100) {                                                                                   // 74
        self.functions.done();                                                                                   // 75
      } else {                                                                                                   //
        self.percent.set(percentNew);                                                                            // 77
        self.functions.tick();                                                                                   // 77
      }                                                                                                          //
      return self;                                                                                               //
    },                                                                                                           //
    tick: function() {                                                                                           // 24
      debug('Tick');                                                                                             // 83
      if (Router.current().lookupOption('progressTick')) {                                                       // 85
        debug('starting new ticker');                                                                            // 86
        if (self.ticker) {                                                                                       // 87
          Meteor.clearTimeout(self.ticker);                                                                      // 88
          self.ticker = false;                                                                                   // 88
        }                                                                                                        //
        self.ticker = Meteor.setTimeout(function() {                                                             // 86
          self.ticker = false;                                                                                   // 92
          return self.functions.progress();                                                                      //
        }, Math.random() * 750 + 750);                                                                           //
      } else {                                                                                                   //
        debug('Not starting ticker');                                                                            // 96
      }                                                                                                          //
      return self;                                                                                               //
    },                                                                                                           //
    done: function() {                                                                                           // 24
      debug('Done');                                                                                             // 101
      self.functions.stop();                                                                                     // 101
      if (!self.started) {                                                                                       // 105
        self.functions.reset();                                                                                  // 106
      } else {                                                                                                   //
        _.defer(function() {                                                                                     // 108
          return self.done.set(true);                                                                            //
        });                                                                                                      //
        self.loading.set(true);                                                                                  // 108
        self.percent.set(100);                                                                                   // 108
      }                                                                                                          //
      return self;                                                                                               //
    },                                                                                                           //
    stop: function() {                                                                                           // 24
      debug('Stop');                                                                                             // 115
      if (self.ticker) {                                                                                         // 118
        Meteor.clearTimeout(self.ticker);                                                                        // 119
        self.ticker = false;                                                                                     // 119
      }                                                                                                          //
      if (self.delay) {                                                                                          // 121
        Meteor.clearTimeout(self.delay);                                                                         // 122
        self.delay = false;                                                                                      // 122
      }                                                                                                          //
      return self;                                                                                               //
    }                                                                                                            //
  };                                                                                                             //
  Router.load(function() {                                                                                       // 13
    var element;                                                                                                 // 128
    debug('IR:load');                                                                                            // 128
    element = self.find('*');                                                                                    // 128
    self.functions.start(element);                                                                               // 128
    this.next();                                                                                                 // 128
    return this;                                                                                                 //
  });                                                                                                            //
  Router.unload(function() {                                                                                     // 13
    debug('IR:unload');                                                                                          // 136
    self.functions.reset();                                                                                      // 136
    return this;                                                                                                 //
  });                                                                                                            //
  Router.onRun(function() {                                                                                      // 13
    debug('IR:run');                                                                                             // 141
    self.loading.set(true);                                                                                      // 141
    this.next();                                                                                                 // 141
    return this;                                                                                                 //
  });                                                                                                            //
  Router.onRerun(function() {                                                                                    // 13
    debug('IR:re-run');                                                                                          // 147
    this.next();                                                                                                 // 147
    return this;                                                                                                 //
  });                                                                                                            //
  Router.onBeforeAction(function() {                                                                             // 13
    debug('IR:before');                                                                                          // 152
    if (this.ready()) {                                                                                          // 153
      self.functions.done();                                                                                     // 154
      self.functions.stop();                                                                                     // 154
    } else {                                                                                                     //
      self.functions.progress();                                                                                 // 157
    }                                                                                                            //
    this.next();                                                                                                 // 152
    return this;                                                                                                 //
  });                                                                                                            //
  Router.onAfterAction(function() {                                                                              // 13
    debug('IR:after');                                                                                           // 162
    return this;                                                                                                 //
  });                                                                                                            //
  return Router.onStop(function() {                                                                              //
    debug('IR:stop');                                                                                            // 166
    self.functions.reset();                                                                                      // 166
    return this;                                                                                                 //
  });                                                                                                            //
};                                                                                                               // 12
                                                                                                                 //
Template.__IronRouterProgress__.helpers({                                                                        // 2
  data: function() {                                                                                             // 171
    return Template.instance();                                                                                  //
  },                                                                                                             //
  template: function() {                                                                                         // 171
    var ref;                                                                                                     // 174
    if (!((ref = Router.current()) != null ? ref.lookupOption('progress') : void 0)) {                           // 174
      return null;                                                                                               // 174
    }                                                                                                            //
    if (Template.instance().loading.get()) {                                                                     // 176
      return '__IronRouterProgressDefault__';                                                                    //
    } else {                                                                                                     //
      return null;                                                                                               //
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Template.__IronRouterProgressDefault__.rendered = function() {                                                   // 2
  return this.element = this.$('#iron-router-progress');                                                         //
};                                                                                                               // 178
                                                                                                                 //
Template.__IronRouterProgressDefault__.helpers({                                                                 // 2
  cssClass: function() {                                                                                         // 183
    var classes;                                                                                                 // 184
    classes = [];                                                                                                // 184
    if (this.loading.get()) {                                                                                    // 186
      classes.push('loading');                                                                                   // 186
    }                                                                                                            //
    if (this.spinner.get()) {                                                                                    // 187
      classes.push('spinner');                                                                                   // 187
    }                                                                                                            //
    if (this.done.get()) {                                                                                       // 188
      classes.push('done');                                                                                      // 188
    }                                                                                                            //
    return classes.join(' ');                                                                                    //
  },                                                                                                             //
  cssStyle: function() {                                                                                         // 183
    var styles;                                                                                                  // 192
    styles = [];                                                                                                 // 192
    if (this.percent.get()) {                                                                                    // 194
      styles.push("width:" + (this.percent.get()) + "%");                                                        // 194
    }                                                                                                            //
    return styles.join(';');                                                                                     //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Template.__IronRouterProgressDefault__.events({                                                                  // 2
  'transitionend #iron-router-progress, webkitTransitionEnd #iron-router-progress, oTransitionEnd #iron-router-progress, otransitionend #iron-router-progress, MSTransitionEnd #iron-router-progress': function(e, template) {
    var data;                                                                                                    // 206
    if (e.originalEvent.pseudoElement === '' && e.originalEvent.propertyName === _.last(template.element.css('transition-property').split(', '))) {
      debug('transitionend');                                                                                    // 207
      data = Template.currentData();                                                                             // 207
      data.done.set(false);                                                                                      // 207
      data.loading.set(false);                                                                                   // 207
      return data.percent.set(false);                                                                            //
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Meteor.startup(function() {                                                                                      // 2
  var layout;                                                                                                    // 215
  layout = new Iron.Layout({                                                                                     // 215
    template: '__IronRouterProgress__'                                                                           // 216
  });                                                                                                            //
  return layout.insert({                                                                                         //
    el: document.body                                                                                            // 218
  });                                                                                                            //
});                                                                                                              // 214
                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['multiply:iron-router-progress'] = {};

})();
