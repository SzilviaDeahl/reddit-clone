// var db = require('monk')('localhost/myAngular');
// var redditCollection = require('reddit');


var app = angular.module('myApp', []);
app.controller('MainController', function ($scope) {
  $scope.showForm = 'false';
  $scope.showComment = 'false';
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  $scope.toggleComment = function () {
    $scope.showComment = !$scope.showComment;
  }

  $scope.toggleComments = function () {
    $scope.showComments = !showComments;
  }
  $scope.posts = [];

  $scope.submitPost = function () {
    var entry = {count: 0, title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description, date: $scope.date, comments: $scope.comments}
    $scope.posts.push(entry);
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

  $scope.comments = [];

  $scope.submitComment = function () {
    var entry = {authorC: $scope.authorC, text: $scope.text}
    $scope.comments.push(entry);
  }

  // $scope.comments = function (comment) {
  //   comment.count +=1;
  // }
});
