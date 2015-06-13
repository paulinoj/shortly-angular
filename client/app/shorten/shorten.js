angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.addLink($scope.link)
    .then(function(link){
       $window.localStorage.setItem('com.shortly', link);
       $location.path('/links');
    })
    .catch(function (error){
      console.error(error);
    })
  }
});
