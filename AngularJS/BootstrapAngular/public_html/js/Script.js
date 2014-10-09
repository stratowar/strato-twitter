var twitterApp = angular.module('application', []);

twitterApp.controller('controller', function ($scope, $templateCache, $http, $location) {
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', url: '/Bootstrap1/PictureInModal.html'},
        {title: 'User', url: ''}
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