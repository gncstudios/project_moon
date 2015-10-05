/* jshint esnext: true */
/* globals Template, Meteor */

Template.profile.rendered = () => {

};
Template.profile.events({
	"change [name='nameText']": (e) => {
		Meteor.users.update({_id:Meteor.userId()}, {$set:{"profile.name":e.target.value}})


	},
	"submit form": (e) => {
		e.preventDefault();
	}

});
Template.profile.helpers({
	/*name: () => {
		return Meteor.user().profile.name;
	},*/
	profile: ()=>Meteor.user().profile || {}
});