'use strict';
angular.module('inspinia')
  .controller('index_controller', function($scope, $timeout){
    $scope.index = {
      loadingData: true,
      user: {
        userId: 0,
        picture: {},
        loginWithFacebook: function(){}
      },
      initializeFacebook: function(){

        window.fbAsyncInit = function() {
          FB.init({
            appId      : '198851790520300',
            xfbml      : true,
            version    : 'v2.7'
          });
          FB.login(function(){},
             {scope: 'user_events, user_videos, user_friends, email, publish_actions, public_profile,user_relationships, user_relationship_details' });

          FB.getLoginStatus(function(response) {
            $scope.$apply(function(){
              $scope.index.user.userId = response.authResponse.userID;
            });
            if (response.status === 'connected') {
              FB.api('/me', {'fields': 'name,last_name,picture,email,birthday,work,family{name,picture}'}, function(response) {
                $scope.$apply(function(){
                  angular.extend($scope.index.user, response);
                  $scope.index.loadingData = false;
                  console.log($scope.index);
                });
              });
            }
            else {
              FB.login();
            }


          });
        };
        
      }
    }
  	$scope.index.initializeFacebook();
});






/*FB.login(function(){
          // Note: The call will only work if you accept the permission request
          FB.api('/me/feed', 'post', {message: 'Testing publish actions using the current user profile!'});
          }, {scope: 'publish_actions'});*/
/*
          
        */

        /*FB.ui({
          method: 'share',
          href: 'https://www.facebook.com/HoneyByte-498594823683387/?skip_nax_wizard=true',
        }, function(response){});*/

/*function myFacebookLogin() {
          FB.login(function(){}, {scope: 'publish_actions'});
        }*/
        //$scope.hola = "hola";