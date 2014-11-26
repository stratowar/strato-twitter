var twitterApp = angular.module('application', ['ngRoute', 'ngSanitize']);

twitterApp.controller('controller', function ($route, $scope, $templateCache, $http, $location) {
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', url: 'index.html'},
        {title: 'User', url: 'User.html'},
        {title: 'Following', url: 'Following.html'}
    ];
    $scope.page1 = {title: 'Twitter', url1: 'index.html'};
    
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
    
    $scope.loadFirstPage = function (page1) {      
        
    $scope.template = page1.url1;
    $http({method: 'GET', url: page1.url1, cache: $templateCache})
        .success(function (html) {
            $scope.html = html;
            $('jumbotron').text(html); //IE
        })
        .error(function (html, status) {
            $scope.html = 'Unable to load code: ' + status;
        });
    };
    
    $(function () {
        $('#text')
            .focus(function()
                {
                    $(this).animate({ width: 650 }, 'slow');
                })
            .blur(function()
                {
                    $(this).delay(200).animate({ width: 200 }, 'slow');
                });
        
        $('form').on('submit', function (e) {
            if ($scope.new_tweet) {
            var tweet = $scope.new_tweet.trim();  
                if (tweet == null || tweet == "") 
                {//alert("Tweet text is empty");
                    $('#alert').modal({                   
                        "backdrop"  : "static",
                        "keyboard"  : true,
                        "show"      : true                   
                    });  
                } else {
            var form =  $('form').serialize();
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: 'post.php',
                data: form,
                success: function () {
                    //console.log(form);
                   //alert('Tweet was sent');             
                    angular.element("input#text").val('');  
                    window.location.reload();
                }
            });    
        }
    } else {
        $('#alert').modal({                   
                        "backdrop"  : "static",
                        "keyboard"  : true,
                        "show"      : true                   
                    }); 
    }
        });        
    });
    
    $scope.forwardPicture = function (picture_id) {
        var str = picture_id.replace(/_normal./g, '.');
        //  console.log(str);
        picture(str); 
    };
       
    function picture(str) {
        $scope.pictureChange = str;
    };
    $(document).ready(function() {
        var text_max = 140;
        $('#textarea_feedback').html(text_max + ' characters remaining');
        $('#text').keyup(function() {
            var text_length = $('#text').val().length;
            var text_remaining = text_max - text_length;
            $('#textarea_feedback').html(text_remaining + ' characters remaining');
        });
    });
    /*
    $scope.cloudImage = {
    background: 'url(css/cloud-wallpaper.png)'
}; */
});

twitterApp.controller('UserController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'user.php';  
        
       // $scope.fetch = function() {
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
    }
]);

twitterApp.controller('TweeterController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'index.php';  
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

        $scope.deleteButton = function (tweet_id){
            //console.log(tweet_id);
            var tweet_id = tweet_id;
            $('#deleteModal').modal({                   
                "backdrop"  : "static",
                "keyboard"  : true,
                "show"      : true                   
            });  
            id(tweet_id); 
        };
       
        function id(tweet_id) {
            $scope.idChange = tweet_id;
        };
        
        $scope.deleteTweet = function (tweet_id) {   
            $.ajax({
                type: 'post',
                url: 'delete.php',
                data: {tweet_id:tweet_id},
                success: function () {
                // console.log(tweet_id);
                    window.location.reload();
                }
            });        
        };     
    }
]);

twitterApp.controller('FollowController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'follow.php';   
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
    }    
]);
/*
twitterApp.filter('clearImage', function () {
    return function (text) {
        var str = text.replace(/_normal./g, '.');
        return str;
    };
});  */
twitterApp.filter('links', function () {
    
    return function (text) {
        if(text) {
        var str = text.replace(/@([^ ']+)/g, function(u, screen_name) {
            var link = '<a target=blank href="http://twitter.com/intent/user?screen_name=' + screen_name + '">' + u + '</a>';
            return link;            
        });
        str = str.replace(/#([^ &0-9']+)/g, function(t, hash) {
            var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
            return link;
        });/* 
        str = str.replace(/#([^ 0-9']+)/g, function(t, hash) {
                var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
                return link;
            });
    /*    str = str.replace(/[^(#&)]#([^ ']+)/g, function(t, hash) {
                var link = '<a target=blank href="https://twitter.com/hashtag/' + hash + '?src=hash">' + t + '</a> ';
                return link;
            });    */
        return str;
    } 
    };
}); 