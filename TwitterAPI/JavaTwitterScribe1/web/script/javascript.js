var app = angular.module('twitterApp', ['ngRoute', 'twitterApp.services', 'ngSanitize']);

app.config(function ($routeProvider){
    $routeProvider
        .when('/Twitter',
        {                            
            templateUrl: 'Twitter.html'
        })
        .when('/User',
        {
            templateUrl: 'User.html'
        })
        .when('/Following',
        {
            templateUrl: 'Following.html'
        })
        .when('/Twitter1',
        {
            templateUrl: 'index.html'
        })
        .otherwise({ redirectTo: '/Twitter' });                
});

app.filter('clearImage', function () {
    return function (text) {
        var str = text.replace(/_normal./g, '.');
        return str;
    };
});

app.filter('links', function () {
    return function (text) {
        if(text) {
            var str = text.replace(/@([^ ']+)/g, function(u, screen_name) {
                var link = '<a target=blank href="http://twitter.com/intent/user?screen_name=' + screen_name + '">' + u + '</a>';
                return link;            
            });
            str = str.replace(/#([^ &0-9']+)/g, function(t, hash) {
                var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
                return link;
            }); /*
            str = str.replace(/#([^ &0-9']+)/g, function(t, hash) {
                var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
                return link;
            }); */
            return str;
        } 
    };
}); 

app.filter('recognizeHashtag', function () {
    return function (text) {
        if(text) {
            var str = text.replace(/[&]#([^ &']+)/g, function(t, hash) {
                var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
                return link;
            });
            return str;
        } 
    };
});  