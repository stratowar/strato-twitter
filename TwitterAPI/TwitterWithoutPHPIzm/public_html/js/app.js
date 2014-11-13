//twitterApp is dependent on the twitterApp.services module
var app = angular.module('twitterApp', ['twitterApp.services', 'ngSanitize']);
app.filter('clearImage', function () {
    return function (text) {
        var str = text.replace(/_normal./g, '.');
        return str;
    };
});
app.filter('links', function () {
    return function (text) {
        var str = text.replace(/@([^ ']+)/g, function(u, screen_name) {
            var link = '<a target=blank href="http://twitter.com/intent/user?screen_name=' + screen_name + '">' + u + '</a>';
            return link;            
        });
        str = str.replace(/#([^ ']+)/g, function (t, hash) {
            var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
            return link;
                    
        });
        return str;
    };
}); 