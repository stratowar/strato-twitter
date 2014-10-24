angular.module('applicationUser', [])

  .controller('FetchController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'user.php';      

      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url, cache: $templateCache, config: $scope.config}).
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