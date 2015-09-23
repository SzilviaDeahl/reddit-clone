// var db = require('monk')('localhost/myAngular');
// var redditCollection = require('reddit');


var app = angular.module('myApp', []);
app.controller('MainController', function ($scope) {
  $scope.showForm = false;
  $scope.showComment = false;

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  $scope.toggleComment = function () {
    this.showComment = !this.showComment;

  }

  $scope.toggleComments = function () {
    this.showComments = this.Comments;
  }
  $scope.posts = [{
    title: "Snow",
    author: "Yo Mama",
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Snowboard-In-The-Snow-2008.jpg',
    description: "I love CO in the winter!",
    comments: []
  },
  {
    title: "Autumn",
    author: "Yo Sista",
    image: 'http://www.jensart.com/_07images/07B005_celebrations_of_fall.jpg',
    description: "I love CO in the fall!",
    comments: []
  }
  ];

  $scope.submitPost = function () {
    $scope.comments = [];
    $scope.posts.push($scope.post);
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

  // $scope.comments = [];

  $scope.submitComment = function (post) {
    console.log("** POST **");
    console.log(post);
    console.log('** SCOPE VARIABLES **');
    console.log(this.comment)
    this.hideform = true;
    // var entry = {authorC: $scope.authorC, text: $scope.text}
    // post.comments.push(entry);
  }

  // $scope.comments = function (comment) {
  //   comment.count +=1;
  // }
});
