angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window, $location, Auth) {
  $scope.data = {};
  console.log(Auth.isAuth());

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data){
      console.log("DATA");
      console.log(data);
      $scope.data.links = data;

      // $window.localStorage.getAllItem('com.shortly', link);
      //   $location.path('/links');
    })

    // $scope.data.push(link);
  };
  // $scope.removeLink = function(index){
  //   $scope.data.splice(index, 1);
  // }
  $scope.goTo = function(index){

  }
  if(Auth.isAuth()){
    $scope.getLinks();
  }
  else{
    $scope.data = {};
  }
});
