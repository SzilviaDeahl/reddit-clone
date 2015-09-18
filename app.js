// var db = require('monk')('localhost/myAngular');
// var redditCollection = require('reddit');


var app = angular.module('myApp', []);
app.controller('MainController', function ($scope) {
  $scope.showForm = 'false';
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  $scope.posts = [];

  $scope.submitPost = function () {
    var entry = {title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description}
    $scope.posts.push(entry);
    console.log($scope.image);
  },
  $scope.dropdown;

  $scope.sortByVotes = function () {
    $scope.dropdown;
  },

  $scope.counter = function () {
    $scope.start = 0;
  }
})
