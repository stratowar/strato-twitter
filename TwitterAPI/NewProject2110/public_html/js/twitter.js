/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('Twitter', ['ngResource']);

function TwitterCtrl($scope, $resource) {
    $scope.twitter = $resource('https://api.twitter.com/1.1/statuses/user_timeline.json?:action',
        {action:'user_id=stratowar&screen_name=Nemanja%20Paripovic', q:'angularjs', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});
    
        $scope.twitterResult = $scope.twitter.get();
   
}

