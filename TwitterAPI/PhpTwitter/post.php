<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "stratowar";
$notweets = 10;
$status = $_POST['tweet'];
$consumerkey = "GyMq5aB6WcBDGqgOHzvjRACqD";
$consumersecret = "Z9SjTNSZ1XlYK52UbpI7DkmB6DbZJBPB6pKSDoGoEBvZ9qoyE7";
$accesstoken = "2799661822-ZY0gDZv8nLE74EyFGgPPCSdIuqBWEjdmcXGDAaV";
$accesstokensecret = "QvxNF6j243oJcFqlCOeDMlbkP5mbJfR5BpbQctU5L9kY0";
$streamopen = curl_init("http://localhost/PhpTwitter/Main.html");
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->post("https://api.twitter.com/1.1/statuses/update.json?status=".$status."&display_coordinates=false");
 
//echo json_encode($tweets); 

if ($tweets = 200) {
    curl_exec($streamopen);
} else {echo 'There was an error posting the message.';}


?>