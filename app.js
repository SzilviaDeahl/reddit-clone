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
  }
})
