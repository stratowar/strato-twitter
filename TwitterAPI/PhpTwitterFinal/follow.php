<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$consumerkey = "GyMq5aB6WcBDGqgOHzvjRACqD";
$consumersecret = "Z9SjTNSZ1XlYK52UbpI7DkmB6DbZJBPB6pKSDoGoEBvZ9qoyE7";
$accesstoken = "2799661822-1Z6PtHHU3QAF7HDe5aNlkWeEWINAgK337uBUFYt";
$accesstokensecret = "J6WNPzn5U97RMF5UHVdtqU4Htf15Y94xI7ZSxhLrPBYA3";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/home_timeline.json");
 
echo json_encode($tweets);
    
?>