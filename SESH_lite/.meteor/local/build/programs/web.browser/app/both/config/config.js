(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/config/config.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// -- Router Config --                                                 //
Router.configure({                                                     // 2
  layoutTemplate: 'appLayout',                                         // 3
  loadingTemplate: 'loading',                                          // 4
  progressSpinner: false                                               // 5
});                                                                    //
                                                                       //
Router.plugin('loading', { loadingTemplate: 'loading' });              // 8
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });   // 9
/////////////////////////////////////////////////////////////////////////

}).call(this);
