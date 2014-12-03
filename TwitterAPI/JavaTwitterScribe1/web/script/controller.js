//inject the twitterService into the controller
app.controller('TwitterController', function($route, $scope, $q, twitterService) {
    
    $scope.template = '';
    $scope.html = '';
    $scope.pages = [
        {title: 'Twitter', href: '#/Twitter'},
        {title: 'User', href: '#/User'},
        {title: 'Following', href: '#/Following'}
    ];

    $scope.tweets; //array of tweets
    
   // twitterService.initialize();
    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function() {
        twitterService.getLatestTweets().then(function(data) {
            $scope.tweets = data;
            angular.element("input#text").val('');
            var text_max = 140;
            $('#textarea_feedback').html(text_max + ' characters remaining');
            //angular.element("input.form-control").val('');
        });
    };

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.getLatestTweets().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut, #userForm').fadeIn();
                    $scope.refreshTimeline();
                });
            }
        });
    };

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut, #userForm').fadeOut(function(){
            $('#connectButton').fadeIn();
        });
    };
    
    $scope.newTweetButton = function () {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut, #userForm').fadeIn();
                    $scope.refreshTimeline();
                });
                if ($scope.new_tweet) {
                    var tweet = $scope.new_tweet.trim();  
                    if (tweet == null || tweet == "") 
                    {//alert("Tweet text is empty");
                         twitterService.modal("#alert");
                    } 
                    else {
                        tweet = encodeURIComponent($scope.new_tweet);
                        twitterService.postTweet(tweet).then(function(){
                            $scope.refreshTimeline();
                        });
                    }
                } 
                else {
                    twitterService.modal("#alert");
                }
            }
        });  
    };
    
    $scope.deleteButton = function (tweet_id){
     // console.log(tweet_id);
            var tweet_id = tweet_id;
            twitterService.modal("#deleteModal");
            id(tweet_id); 
        };
       
    function id(tweet_id) {
        $scope.idChange = tweet_id;
    };
    
    $scope.deleteTweet = function (tweet_id) {    
       // console.log(tweet_id);
        twitterService.deleteTweet(tweet_id).then(function(){
            $scope.refreshTimeline();
        });
    };        
    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut, #userForm').show();
        $scope.refreshTimeline();
    } 
    else {
        $('#getTimelineButton, #signOut, #userForm').hide();
        $('#connectButton').show();
    }
    
    $(document).ready(function() {
        var text_max = 140;
        $('#textarea_feedback').html(text_max + ' characters remaining');
        $('#text').keyup(function() {
            var text_length = $('#text').val().length;
            var text_remaining = text_max - text_length;
            $('#textarea_feedback').html(text_remaining + ' characters remaining');
        });
    });

    $(function () {
        $('#text')
        .focus(function()
            {
                $(this).animate({ width: 550 }, 'slow');
            })
        .blur(function()
            {
                $(this).delay(200).animate({ width: 200 }, 'slow');
            });
    });
    
    $scope.forwardPicture = function (picture_id) {         
        var str = picture_id.replace(/_normal./g, '.');
        //  console.log(str);
        picture(str); 
        twitterService.modal("#myModal");
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
        $('#Text').keyup(function() {
        if ($scope.Text !== "" && $scope.Text !== null ) {
            $('#submitButton').show();
        }; 
    });


        
    });
});

app.controller('FollowController', function ($scope, $q, twitterService) {
    
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
    };

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut, #userForm').fadeIn();
                    $scope.refreshTimeline();
                });
            }
        });
    };

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut, #userForm').fadeOut(function(){
            $('#connectButton').fadeIn();
        });
    };
    
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut, #userForm').show();
        $scope.refreshTimeline();
    }
    
    $scope.forwardPicture = function (picture_id) {
        var str = picture_id.replace(/_normal./g, '.');
        //  console.log(str);
        picture(str); 
        twitterService.modal("#myModal");
    };
       
    function picture(str) {
        $scope.pictureChange = str;
    };
});

app.controller('TweeterController1', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'Start.jsp'; 
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