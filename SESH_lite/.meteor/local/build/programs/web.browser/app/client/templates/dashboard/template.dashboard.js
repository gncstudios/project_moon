(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return [ Blaze.View("lookup:setTitle", function() {
    return Spacebars.mustache(view.lookup("setTitle"), "Courses");
  }), "\n  ", HTML.DIV({
    "class": "template-dashboard"
  }, "\n    ", HTML.Raw('<div class="page-header">\n      <h1>Course Dashboard</h1>\n    </div>'), "\n    ", HTML.DIV({
    "class": "col-md-4 col-xs-12 pull-right clearfix"
  }, "\n      ", HTML.DIV({
    "class": "map-container"
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("exampleMap"),
      options: Spacebars.call(view.lookup("exampleMapOptions"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("googleMap"));
  }), "\n      "), "\n    "), "\n\n\n  ", HTML.DIV({
    "class": "col-md-8 form-inline"
  }, "\n    ", HTML.Raw('<h2 class="clearfix">All Courses <input class="pull-right form-control" placeholder="Search" id="course-search"> </h2>'), "\n    ", HTML.UL({
    "class": "list-group"
  }, "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("otherMeetings"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("meetingRow")), "\n      " ];
  }), "\n    "), "\n  "), "\n\n\n    ", HTML.DIV({
    "class": "col-md-8 clearfix"
  }, "\n        ", HTML.Raw("<h2>Courses I Instruct</h2>"), "\n        ", HTML.DIV({
    "class": "page-actions pull-right"
  }, "\n          ", HTML.getTag("btn")({
    "class": "btn btn-primary",
    "data-toggle": "modal",
    "data-target": "#addItemModal"
  }, "+ Add Item"), "\n        "), "\n        ", HTML.UL({
    "class": "list-group"
  }, "\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("myMeetings"));
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.call(view.lookup("."));
    }, function() {
      return Spacebars.include(view.lookupTemplate("meetingRow"));
    }), "\n          " ];
  }), "\n        "), "\n    "), "\n  "), HTML.Raw('\n\n\n  <!-- Modal -->\n  <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n          <h4 class="modal-title" id="myModalLabel">Add an Item</h4>\n        </div>\n        <form role="form" class="add-item">\n          <div class="modal-body">\n              <div class="form-group">\n                <label>Name</label>\n                <input type="text" class="form-control" name="name" placeholder="Name of Item">\n              </div>\n              <div class="form-group">\n                <label>Cost</label>\n                <input type="number" class="form-control" name="cost" placeholder="Cost">\n              </div>\n              <div class="form-group">\n                <label>Latitude</label>\n                <input type="number" class="form-control" name="lat" placeholder="Cost">\n              </div>\n              <div class="form-group">\n                <label>Longitude</label>\n                <input type="number" class="form-control" name="lng" placeholder="Cost">\n              </div>\n          </div>\n          <div class="modal-footer">\n            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n            <input type="submit" class="btn btn-primary" value="+ Add Item">\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  '), HTML.STYLE(".map-container {\n  margin:auto;\n  width: 100%;\n  height: 300px;\n}\n.map-canvas {\n    border-radius:8px;\n    box-shadow: 0 0 10px #EEE;\n}\n") ];
}));

}).call(this);
