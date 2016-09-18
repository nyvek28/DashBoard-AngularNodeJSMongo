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
             {scope: 'user_friends, email, public_profile, user_likes, user_events'});
          FB.getLoginStatus(function(response) {

            $scope.$apply(function(){
              $scope.index.user.userId = response.authResponse.userID;
            });
            if (response.status === 'connected') {
              FB.api('/me', {'fields': 'last_name,picture{url},likes{name,category,picture{url}},events{name,picture{url}},education,name'}, function(response) {
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

angular.module('inspinia').filter('cutText', function () {
  return function (item, length) {
    var strItem = item.toString();
    if(strItem.length > length){
      return strItem.substring(0,length-2) + '..';
    }else{
      return strItem;
    }
  };
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