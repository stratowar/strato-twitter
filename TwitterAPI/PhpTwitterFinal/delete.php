<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
require_once("js/Script2.js"); 
$twitteruser = "stratowar";
$notweets = 10;
$deleteTweet = $_POST['tweet_id'];
$consumerkey = "GyMq5aB6WcBDGqgOHzvjRACqD";
$consumersecret = "Z9SjTNSZ1XlYK52UbpI7DkmB6DbZJBPB6pKSDoGoEBvZ9qoyE7";
$accesstoken = "2799661822-1Z6PtHHU3QAF7HDe5aNlkWeEWINAgK337uBUFYt";
$accesstokensecret = "J6WNPzn5U97RMF5UHVdtqU4Htf15Y94xI7ZSxhLrPBYA3";
//$streamopen = curl_init("index.html");
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->post("https://api.twitter.com/1.1/statuses/destroy/".$deleteTweet.".json");
//echo ($status);
//echo json_encode($tweets); 
/*
if ($tweets = 200) {
    curl_exec($streamopen);
} else {echo 'There was an error posting the message.';}
*/

?>