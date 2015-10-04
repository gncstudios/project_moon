Template.dashboard.onRendered( () => {
  Modules.client.dashboard( { form: "#test", template: Template.instance() } );
});

Template.dashboard.events({
  'submit form': ( event ) => event.preventDefault()

});
