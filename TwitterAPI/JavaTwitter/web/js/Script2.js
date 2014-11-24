/*
var twitterApp = angular.module('application', ['ngRoute', 'ngSanitize']);


twitterApp.controller('controller', function ($route, $scope, $templateCache, $http, $location) {
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', url: 'Start.jsp', href: '#/Twitter'},
        {title: 'User', url: 'User.jsp', href: '#/User'},
        {title: 'Following', url: 'Following.html', href: '#/Following'}
    ];

    /*
    $scope.page1 = {title: 'Twitter', url1: 'Start.jsp'};  
    
    $scope.loadFirstPage = function (page1) {    
        if (page1.href){           
            document.location = page1.href; //Load new page
        }
        
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
//  });

twitterApp.controller('FollowController', function ($scope, $q, twitterService) {
    
    $scope.tweets; //array of tweets
    
    twitterService.initialize();

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function() {
        twitterService.getTheWall().then(function(data) {
            $scope.tweets = data;
            angular.element("input#text").val('');
            var text_max = 140;
            $('#textarea_feedback').html(text_max + ' characters remaining');
            //angular.element("input.form-control").val('');
        });
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.refreshTimeline();
                });
            }
        });
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut').fadeOut(function(){
            $('#connectButton').fadeIn();
        });
    }
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut').show();
        $scope.refreshTimeline();
    }
    $scope.forwardPicture = function (picture_id) {
        var str = picture_id.replace(/_normal./g, '.');
        //  console.log(str);
        picture(str); 
        $("#myModal").modal({                   
                "backdrop"  : "static",
                "keyboard"  : true,
                "show"      : true                   
            }); 
    };
       
    function picture(str) {
        $scope.pictureChange = str;
    };
});


*/