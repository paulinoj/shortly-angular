angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window, $location) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data){
      $scope.data.links = data;

      // $window.localStorage.getAllItem('com.shortly', link);
      //   $location.path('/links');
    })
    // $scope.data.push(link);
  };
  $scope.removeLink = function(index){
    $scope.data.splice(index, 1);
  }

  $scope.getLinks();
});
