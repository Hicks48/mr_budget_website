angular.module('templates', ['../app/assets/javascripts/app/views/home.html', '../app/assets/javascripts/app/views/tips/all.html', '../app/assets/javascripts/app/views/tips/new.html', '../app/assets/javascripts/app/views/users/login.html']);

angular.module("../app/assets/javascripts/app/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/home.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-8\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Latest tip from Mr. Budget</h3>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <blockquote>\n" +
    "          <h3 style=\"margin-top: 0px\">Lorem</h3>\n" +
    "          Panel content\n" +
    "          <footer><a href=\"#\">Tomi</a></footer>\n" +
    "        </blockquote>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Added at {{tip.created_at}}\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel panel-default\" ng-controller=\"TipOfTheDayController\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Tip of the day</h3>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <blockquote>\n" +
    "          <h3 style=\"margin-top: 0px\">{{tip.title}}</h3>\n" +
    "          {{tip.description}}\n" +
    "          <footer><a href=\"#\">Tomi</a></footer>\n" +
    "        </blockquote>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Added at {{tip.created_at}}\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel panel-default\" ng-controller=\"TipsOfTheWeekController\">\n" +
    "      <!-- Default panel contents -->\n" +
    "      <div class=\"panel-heading\"><h3 class=\"panel-title\">Tips of the week</h3></div>\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"tip in tips\">\n" +
    "          <a ng-href=\"#/tip/{{tip.id}}\">{{tip.title}}</a>\n" +
    "          <p class=\"text-muted\">\n" +
    "            Added at {{tip.created_at}}\n" +
    "          </p>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <a class=\"btn btn-success btn-sm\"><span class=\"glyphicon glyphicon-plus\"></span> Add a tip</a>\n" +
    "        <a href=\"#/tip\" class=\"btn btn-default btn-sm\">More tips <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <!-- Default panel contents -->\n" +
    "      <div class=\"panel-heading\"><h3 class=\"panel-title\">Latest sales</h3></div>\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "        <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "        <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "      </ul>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <a class=\"btn btn-success btn-sm\"><span class=\"glyphicon glyphicon-plus\"></span> Add a sale</a>\n" +
    "        <a class=\"btn btn-default btn-sm\">More sales <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/assets/javascripts/app/views/tips/all.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/tips/all.html",
    "<div class=\"page-header\">\n" +
    "  <h1>Latest tips</h1>\n" +
    "</div>\n" +
    "<ul class=\"media-list\">\n" +
    "  <li class=\"media\" ng-repeat=\"tip in tips\">\n" +
    "    <div class=\"media-body\">\n" +
    "      <h3 style=\"margin-top: 0px;\"><a ng-href=\"#/tips/{{tip.id}}\">{{tip.title}}</a></h3>\n" +
    "      <p class=\"text-muted\">\n" +
    "        Added at {{tip.created_at}}\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("../app/assets/javascripts/app/views/tips/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/tips/new.html",
    "<div class=\"page-header\">\n" +
    "  <h1>Add a tip</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert\" ng-class=\"{ 'alert-success': alert.type == 'success' }\" ng-show=\"alert\">\n" +
    "  {{alert.content}}\n" +
    "</div>\n" +
    "\n" +
    "<form ng-submit=\"add_tip()\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Title</label>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"tip.title\">\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Description</label>\n" +
    "    <textarea class=\"form-control\" rows=\"6\" ng-model=\"tip.description\"></textarea>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <button class=\"btn btn-success\" type=\"submit\">Add</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("../app/assets/javascripts/app/views/users/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/users/login.html",
    "<div class=\"page-header\">\n" +
    "  <h1>Log in</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert\" ng-class=\"{ 'alert-success': alert.type == 'success' }\" ng-show=\"alert\">\n" +
    "  {{alert.content}}\n" +
    "</div>\n" +
    "\n" +
    "<form ng-submit=\"login()\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Email</label>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.email\">\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Password</label>\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"user.password\">\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <button class=\"btn btn-primary\" type=\"submit\">Log in</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);
