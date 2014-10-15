var countryApp = angular.module('countryApp', ['ngRoute', 'countryControllers']);

    countryApp.config(function($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'snapshot45/country-list.html',
                    controller: 'CountryListCtrl'
                })
                .when('/:countryId', {
                    templateUrl: 'snapshot45/country-detail.html',
                    controller: 'CountryDetailCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });      
    });

    countryApp.factory('countries', function($http){
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: 'snapshot45/countries.json',
                    cache: true
                } 
                ).success(callback);
            },
            find: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'snapshot45/country_' + id + '.json',
                    cache: true
                } 
                ).success(callback);
            }                    
        };
    });

countryApp.filter('encodeURI', function(){
                    return window.encodeURI;
                });