<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "stratowar";
$userid = "stratowar";
$notweets = 10;
$consumerkey = "GyMq5aB6WcBDGqgOHzvjRACqD";
$consumersecret = "Z9SjTNSZ1XlYK52UbpI7DkmB6DbZJBPB6pKSDoGoEBvZ9qoyE7";
$accesstoken = "2799661822-ZY0gDZv8nLE74EyFGgPPCSdIuqBWEjdmcXGDAaV";
$accesstokensecret = "QvxNF6j243oJcFqlCOeDMlbkP5mbJfR5BpbQctU5L9kY0";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/users/show.json?screen_name=".$twitteruser."&user_id=".$userid);
 
echo json_encode($tweets);
?>