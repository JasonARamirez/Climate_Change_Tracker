var app = angular.module('myApp', ['ngRoute']) //ngRoute is an angular service
.config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'home_controller',
      templateUrl: 'home_view.html'
    })
    .when('/global_view',{
      controller: 'global_controller',
      templateUrl: 'global_view.html'
    })
    .when('/country_view', {
      controller: 'country_controller',
      templateUrl: 'country_view.html'
    })
    .when('/state_view',{
      controller: 'state_controller',
      templateUrl: 'state_view.html'
    })
    .when('/city_view',{
      controller : 'city_controller',
      templateUrl : 'city_view.html'
    })
    .otherwise({
      redirectTo : '/'
    });
})
.controller('indexController', function($scope) {
});
