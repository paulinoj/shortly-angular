angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.addLink($scope.link)
    .then(function(link){
       $window.localStorage.setItem('com.shortly', link);
       $location.path('/links');
        console.log("THIS IS LINK "+link)
    })
    .catch(function (error){
      console.error(error);
    })
  }

  // $scope.addLink = function(newLink){
  //   console.log("THIS IS SCOPE.LINK "+ $scope.link)
  //   Links.addLink(newLink)
  //   .then(function(link){
  //       console.log("THIS IS LINK "+link);
  //       return link;
  //   })
  //   .catch(function (error){
  //     console.error(error);
  //   })
  // }

});
