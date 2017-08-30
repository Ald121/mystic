'use strict';

/**
 * @ngdoc overview
 * @name mysticApp
 * @description
 * # mysticApp
 *
 * Main module of the application.
 */
var app = angular
  .module('mysticApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'route-segment',
    'view-segment',
  ]);
  app.config(function ($routeSegmentProvider, $routeProvider,$locationProvider) {
      $routeSegmentProvider.options.autoLoadTemplates = true; 
      $routeSegmentProvider    
            .when('/',    'main')        
            .segment('main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).up()
  });
