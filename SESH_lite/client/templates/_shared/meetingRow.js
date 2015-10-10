let that=this;

Template.meetingRow.rendered = function() {

};
Template.meetingRow.created = function() {

}
Template.meetingRow.events({
  "click *": function(e) {
    that=this;
  },
  "click [data-action='delete']": function (e) {
    that=this;
    // Prevent default button click behavior
    e.preventDefault();
    Meetings.remove(this._id);
  }
});

Template.meetingRow.helpers({
  isOwner: function() {
    return Meteor.userId() === this.owner;
  },
  costString: function() {
    return parseFloat(this.cost).toFixed(2);
  }
});
