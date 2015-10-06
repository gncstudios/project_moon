(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/profile/profile.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/* jshint esnext: true */                                              //
/* globals Template, Meteor */                                         //
                                                                       //
Template.profile.rendered = function () {};                            // 4
Template.profile.events({                                              // 7
	"change [name='nameText']": function (e) {                            // 8
		Meteor.users.update({ _id: Meteor.userId() }, { $set: { "profile.name": e.target.value } });
	},                                                                    //
	"submit form": function (e) {                                         // 13
		e.preventDefault();                                                  // 14
	}                                                                     //
                                                                       //
});                                                                    //
Template.profile.helpers({                                             // 18
	/*name: () => {                                                       //
 	return Meteor.user().profile.name;                                   //
 },*/                                                                  //
	profile: function () {                                                // 22
		return Meteor.user().profile || {};                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
