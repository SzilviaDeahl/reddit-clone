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
    var entry = {count: 0, title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description, date: $scope.date}
    $scope.posts.push(entry);
    console.log($scope.image);
  }
  $scope.dropdown;

  $scope.sortByVotes = function (sortValue) {
    $scope.dropdown = sortValue;
  }

  $scope.upVote = function (object){
    object.count +=1;
  }

  $scope.downVote = function (object) {
    object.count -=1;
  }


})
