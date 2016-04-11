'use strict';

/**
 * @ngdoc overview
 * @name swotApp
 * @description
 * # swotApp
 *
 * Main module of the application.
 */
var swotAnalysisApp=
angular
  .module('swotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'ui.router'
  ]);
  swotAnalysisApp.config(function ($routeProvider,$stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/login.html',
                controller: 'MainCtrl'
            })
           .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            });

    $urlRouterProvider.otherwise('/home');
     
  });
