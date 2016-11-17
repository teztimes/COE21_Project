// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','angularTouchWidgets','chart.js'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])
.controller("LineCtrl2", function ($scope) {

  $scope.labels = ["0", "5", "10", "15", "20", "25", "30"];
  $scope.series = ['Temperature', 'Humidity'];
  $scope.data = [
    [15, 18, 19, 18, 19, 16, 25],
    [28, 48, 40, 19, 25, 27, 25]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'Temperature' }, { yAxisID: 'Humidity' }, { xAxisID: 'x-axe' }];
  $scope.options = {
    scales: {
     
      yAxes: [
        {
          id: 'Temperature',
          type: 'linear',
          display: true,
          position: 'left',
           ticks: {
          beginAtZero: true,
          min: 0,
          max: 50,
          stepWidth: 2
                },
          scaleLabel: {
            display: true,
            labelString: 'Temperature (Celcius)'
         }
        },
        {
          id: 'Humidity',
          type: 'linear',
          display: true,
          position: 'right',
           ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepWidth: 2
                },
          scaleLabel: {
            display: true,
            labelString: 'Humidity (Percent)'
         }
          
        }
      ],
   xAxes: [
          {
          id: 'x-axe',
          display: true,
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'Time (minute)'
          }
    }]
    }
  };
}).controller("Temper", function ($scope) {
$scope.actualTemp= 10; 
$scope.setTemp= 18; 
}).controller("LineCtrl", function ($scope) {

  $scope.labels = ["5", "10", "15", "20", "25", "30", "35"];
  $scope.series = ['Temperature', 'Humidity'];
  $scope.data = [
    [22, 19, 20, 18, 19, 18, 25],
    [28, 48, 40, 19, 86, 27, 25]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'Temperature' }, { yAxisID: 'Humidity' }, { xAxisID: 'x-axe' }];
  $scope.options = {
    scales: {
       yAxes: [
        {
          id: 'Temperature',
          type: 'linear',
          display: true,
          position: 'left',
           ticks: {
          beginAtZero: true,
          min: 0,
          max: 50,
          stepWidth: 2
                },
          scaleLabel: {
            display: true,
            labelString: 'Temperature (Celcius)'
         }
        },
        {
          id: 'Humidity',
          type: 'linear',
          display: true,
          position: 'right',
           ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepWidth: 2
                },
          scaleLabel: {
            display: true,
            labelString: 'Humidity (Percent)'
         },
       
        }
      ],
       xAxes: [
          {
          id: 'x-axe',
          display: true,
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'Time (minute)'
          }
    }]
    }
  };
}).controller("Temper", function ($scope) {
$scope.actualTemp= 10; 
$scope.setTemp= 25; 
});
