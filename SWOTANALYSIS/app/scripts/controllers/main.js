'use strict';

/**
 * @ngdoc function
 * @name swotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swotApp
 */
 

  swotAnalysisApp.controller('MainCtrl', function ($scope,$state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.text="hello EVERYONE";
    }
  );

  swotAnalysisApp.controller('loginCtrl', function($scope) {
    	$scope.Login=function(){
    		if($scope.username=='malvika' &&$scope.password=='rachit'){
    			alert("Hi "+$scope.username+" you have logged in");
    		}
    		else{
    			alert("Sorry, wrong credentials!!!");
    		}
    	}
    });
