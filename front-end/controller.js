var searchApp = angular.module('searchApp', []);
searchApp.controller('searchController', function($scope, $http) {
  $scope.search = function() {
    //$scope.message = "That submit Worked!";
    $scope.value = "Test This"

    var apiUrl = 'http://localhost:4002/search';
    var searchVal = $scope.form.value;
    var completeUrl = apiUrl + "?value=" + searchVal;

    // $http.post(apiUrl + "?value=" + searchVal, {}).success(function(result, status) {
    //
    // });

    // Simple GET request example:
    $http({
      method: 'POST',
      url: completeUrl
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available

      console.log(response);
      //$scope.status = response.status;
      $scope.result = response.data;

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

});
