angular.module('templates', ['../app/assets/javascripts/app/views/home.html', '../app/assets/javascripts/app/views/tips/new.html']);

angular.module("../app/assets/javascripts/app/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/home.html",
    "Lorem\n" +
    "");
}]);

angular.module("../app/assets/javascripts/app/views/tips/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/assets/javascripts/app/views/tips/new.html",
    "<div class=\"page-header\">\n" +
    "  <h1>Add a tip</h1>\n" +
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
