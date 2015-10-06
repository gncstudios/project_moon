(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "template-dashboard"
  }, "\n    ", HTML.DIV({
    "class": "page-header"
  }, "\n      ", HTML.Raw("<h1>Courses I Teach</h1>"), "\n\n      ", HTML.DIV({
    "class": "page-actions pull-right"
  }, "\n        ", HTML.getTag("btn")({
    "class": "btn btn-primary",
    "data-toggle": "modal",
    "data-target": "#addItemModal"
  }, "+ Add Item"), "\n      "), "\n    "), "\n\n    ", HTML.UL({
    "class": "list-group"
  }, "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("items"));
  }, function() {
    return [ "\n        ", HTML.LI({
      "class": "list-group-item"
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), " ", HTML.SPAN({
      "class": "label label-default"
    }, Blaze.View("lookup:rating", function() {
      return Spacebars.mustache(view.lookup("rating"));
    }))), "\n      " ];
  }), "\n    "), "\n\n  "), HTML.Raw('\n\n\n  <!-- Modal -->\n  <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n          <h4 class="modal-title" id="myModalLabel">Add an Item</h4>\n        </div>\n        <div class="modal-body">\n          <form role="form">\n            <div class="form-group">\n              <label>Name</label>\n              <input type="text" class="form-control" name="name" placeholder="Name of Item">\n            </div>\n            <div class="form-group">\n              <label>Cost</label>\n              <input type="number" class="form-control" name="rating" placeholder="Rating">\n            </div>\n          </form>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <button type="button" data-action="add-item" class="btn btn-primary">+ Add Item</button>\n        </div>\n      </div>\n    </div>\n  </div>') ];
}));

}).call(this);
