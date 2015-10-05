// -- Router Config --
Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  progressSpinner : false
});

Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});


