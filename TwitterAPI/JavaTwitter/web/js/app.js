//twitterApp is dependent on the twitterApp.services module
var app = angular.module('twitterApp', ['twitterApp.services']);
app.filter('clearImage', function () {
    return function (text) {
        var str = text.replace(/_normal./g, '.');
        return str;
    };
});
