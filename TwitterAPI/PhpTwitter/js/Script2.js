var twitterApp = angular.module('application', ['ngRoute']);

twitterApp.controller('controller', function ($route, $scope, $templateCache, $http, $location) {
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', url: 'First.html'},
        {title: 'User', url: 'User.html'}
    ];
    
    $scope.loadPage = function (page) {        
        if (page.href){           
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
    $(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'http://localhost/PhpTwitterNew/post.php',
            data: $('form').serialize(),
            success: function () {
              alert('Tweet was sent');             
              angular.element("input#text").val('');  
              window.location.reload();
            }
          });

        });

      });
      $scope.mainReload = function() {
          window.location.reload();
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
      
      $(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'http://localhost/PhpTwitterNew/post.php',
            data: $('form').serialize(),
            success: function () {
           //   alert('Tweet was sent');
              angular.element("input#text").val('');
              window.location.reload();
              //location.reload;
            }
          });

        });

      });
    }]);
twitterApp.controller('TweeterController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'timeline_response.php';  
      //$scope.fetch = function() {
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
     // };

      $scope.updateModel = function(method, url) {
        $scope.method = method;
        $scope.url = url;
      };     
      
      $(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'http://localhost/PhpTwitterNew/post.php',
            data: $('form').serialize(),
            success: function () {
             // alert('Tweet was sent');
              angular.element("input#text").val('');
              window.location.reload();
              //location.reload;
            }
          });

        });

      });
      
    }]);
