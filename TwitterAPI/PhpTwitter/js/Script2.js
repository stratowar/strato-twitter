var twitterApp = angular.module('application', []);

twitterApp.controller('controller', function ($scope, $templateCache, $http, $location) {
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', url: 'First.html'},
        {title: 'User', url: 'User.html'}
    ];

    $scope.loadPage = function (page) {
        if (page.href) {
            document.location = page.href; //Load new page
                        }
    $scope.template = page.url;
    $http({method: 'GET', url: page.url, cache: $templateCache})
        .success(function (html) {
            $scope.html = html;
            $('jumbotron').text(html); //IE
        })
        .error(function (html, status) {
            $scope.html = 'Unable to load code: ' + status;
        });
    };
});
twitterApp.controller('UserController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'user.php';      

      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url, cache: $templateCache, config: $scope.config}).
          success(function(data, status) {
            $scope.status = status;
            $scope.data = data;
          }).
          error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;
        });
      };

      $scope.updateModel = function(method, url) {
        $scope.method = method;
        $scope.url = url;
      };
    }]);
twitterApp.controller('TweeterController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'index.php';  
      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url, cache: $templateCache, config: $scope.config}).
          success(function(data, status) {
            $scope.status = status;
            $scope.data = data;
          }).
          error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;
        });
      };

      $scope.updateModel = function(method, url) {
        $scope.method = method;
        $scope.url = url;
      };
    }]);
