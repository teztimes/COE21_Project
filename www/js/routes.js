angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('view', {
    url: '/page1w',
    templateUrl: 'templates/view.html',
    controller: 'viewCtrl'
  })

  .state('edit', {
    url: '/page4',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

  .state('detail', {
    url: '/page5',
    templateUrl: 'templates/detail.html',
    controller: 'detailCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page3')

  

});