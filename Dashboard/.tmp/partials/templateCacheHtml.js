angular.module("inspinia").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div ng-controller=\"index_controller\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"widget-head-color-box red-bg p-lg text-center\"><div class=\"m-b-md\"><h2 class=\"font-bold no-margins\">{{index.user.name}}</h2><small>.Net Developer</small></div><img src=\"../assets/images/dashboard/alejandro-profile.jpg\" height=\"100\" width=\"100\" class=\"img-circle circle-border m-b-md\" alt=\"profile\"><div><span>100 Tweets</span> | <span>350 Following</span> | <span>610 Followers</span></div></div><div class=\"widget-text-box\"><h4 class=\"media-heading\">Alejandro Bermudez Vargas</h4><p>Es una persona muy proactiva, la cual le encanta trabajar en equipo.</p><div class=\"text-right\"><a class=\"btn btn-xs btn-white\"><i class=\"fa fa-thumbs-up\"></i> Like</a> <a class=\"btn btn-xs btn-primary\"><i class=\"fa fa-heart\"></i> Love</a></div></div></div></div><div class=\"row\"><div class=\"col-lg-3\"><div class=\"widget style1 red-bg\"><div class=\"row\"><div class=\"col-xs-4 text-center\"><i class=\"fa fa-trophy fa-5x\"></i></div><div class=\"col-xs-8 text-right\"><span>Today income</span><h2 class=\"font-bold\">$ 4,232</h2></div></div></div></div><div class=\"col-lg-3\"><div class=\"widget style1 red-bg\"><div class=\"row\"><div class=\"col-xs-4\"><i class=\"fa fa-cloud fa-5x\"></i></div><div class=\"col-xs-8 text-right\"><span>Today degrees</span><h2 class=\"font-bold\">26\'C</h2></div></div></div></div><div class=\"col-lg-3\"><div class=\"widget style1 red-bg\"><div class=\"row\"><div class=\"col-xs-4\"><i class=\"fa fa-envelope-o fa-5x\"></i></div><div class=\"col-xs-8 text-right\"><span>New messages</span><h2 class=\"font-bold\">260</h2></div></div></div></div><div class=\"col-lg-3\"><div class=\"widget style1 red-bg\"><div class=\"row\"><div class=\"col-xs-4\"><i class=\"fa fa-music fa-5x\"></i></div><div class=\"col-xs-8 text-right\"><span>New albums</span><h2 class=\"font-bold\">12</h2></div></div></div></div></div></div>");
$templateCache.put("app/minor/minor.html","<div id=\"fb-root\"></div><script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = \"//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7\";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, \'script\', \'facebook-jssdk\'));</script><div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"medium\" data-show-faces=\"false\" data-auto-logout-link=\"false\"></div>");
$templateCache.put("components/common/content.html","<div id=\"wrapper\"><div ng-include=\"\'components/common/navigation.html\'\"></div><div id=\"page-wrapper\" class=\"gray-bg {{$state.current.name}}\"><div ng-include=\"\'components/common/topnavbar.html\'\"></div><div ui-view=\"\"></div><div ng-include=\"\'components/common/footer.html\'\"></div></div></div>");
$templateCache.put("components/common/footer.html","<div class=\"footer\"><div class=\"pull-right\">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2014-2015</div></div>");
$templateCache.put("components/common/ibox_tools.html","<div class=\"ibox-tools dropdown\" dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-up\"></i></a> <a class=\"dropdown-toggle\" href=\"\" dropdown-toggle=\"\"><i class=\"fa fa-wrench\"></i></a><ul class=\"dropdown-menu dropdown-user\"><li><a href=\"\">Config option 1</a></li><li><a href=\"\">Config option 2</a></li></ul><a ng-click=\"closebox()\"><i class=\"fa fa-times\"></i></a></div>");
$templateCache.put("components/common/navigation.html","<nav class=\"navbar-default navbar-static-side\" role=\"navigation\"><div class=\"sidebar-collapse\"><ul side-navigation=\"\" class=\"nav metismenu\" id=\"side-menu\"><li class=\"nav-header\"><div class=\"dropdown profile-element\" dropdown=\"\"><a class=\"dropdown-toggle\" dropdown-toggle=\"\" href=\"\"><span class=\"clear\"><span class=\"block m-t-xs\"><strong class=\"font-bold\">{{main.userName}}</strong></span> <span class=\"text-muted text-xs block\">Example menu<b class=\"caret\"></b></span></span></a><ul class=\"dropdown-menu animated fadeInRight m-t-xs\"><li><a href=\"\">Logout</a></li></ul></div><div class=\"logo-element\">IN+</div></li><li ui-sref-active=\"active\"><a ui-sref=\"index.main\"><i class=\"fa fa-laptop\"></i> <span class=\"nav-label\">Main page</span></a></li><li ui-sref-active=\"active\"><a ui-sref=\"index.minor\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor page</span></a></li></ul></div></nav>");
$templateCache.put("components/common/topnavbar.html","<div class=\"row border-bottom\"><nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\"><div class=\"navbar-header\"><span minimaliza-sidebar=\"\"></span><form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\"></div></form></div><ul class=\"nav navbar-top-links navbar-right\"><li><a href=\"\"><i class=\"fa fa-sign-out\"></i> Log out</a></li></ul></nav></div>");}]);