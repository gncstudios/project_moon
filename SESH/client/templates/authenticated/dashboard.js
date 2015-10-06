Template.dashboard.onRendered( () => {
  Modules.client.dashboard( { form: "#test", template: Template.instance() } );
  // For Locations
  if (GoogleMaps.loaded()) {
    $("#classLocation").geocomplete({
      map: "#classLocationMap"
    });
  } // end of locations

}); // end of on rendered

Template.dashboard.events({
  'submit form': ( event ) => event.preventDefault()

});
