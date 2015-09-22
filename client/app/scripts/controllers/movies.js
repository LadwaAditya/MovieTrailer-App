'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl',function($scope,Movie) {
  	console.log("Hello from movies controller");
    $scope.movieList = Movie.getList().$object;
  });
