//inject the twitterService into the controller
app.controller('TwitterController', function($scope, $q, twitterService) {

    $scope.tweets; //array of tweets    
    twitterService.initialize();

    //using the OAuth authorization result get the latest tweets from twitter for the user
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
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.refreshTimeline();
                });
            }
        });
    };

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut').fadeOut(function(){
            $('#connectButton').fadeIn();
        });
    };
    
    $scope.newTweetButton = function () {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.refreshTimeline();
                });
               
                var tweet = $scope.new_tweet;               
                tweet = $scope.new_tweet.replace(/#/g, '%23');            
                twitterService.postTweet(tweet).then(function(){
            
                    $scope.refreshTimeline();
                });
            }
        });                              
    };
    
    $scope.deleteButton = function (tweet_id) {    
       // console.log(tweet_id);
        twitterService.deleteTweet(tweet_id).then(function(){
            $scope.refreshTimeline();
        });
    };     
    
    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut').show();
        $scope.refreshTimeline();
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
});