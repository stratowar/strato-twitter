/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('applicationTweet', [])

  .controller('FetchController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'index.php';      
      $scope.url2 = 'user.php';
      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url, url2: $scope.url2, cache: $templateCache, config: $scope.config}).
          success(function(data, status1) {
            $scope.status1 = status1;
            $scope.data = data;
          }).
          error(function(data, status1) {
            $scope.data = data || "Request failed";
            $scope.status1 = status1;
        });
      };

      $scope.updateModel = function(method, url) {
        $scope.method = method;
        $scope.url = url;
      };
    }]);