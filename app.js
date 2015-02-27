var reporterAssignments = angular.module('reporterAssignments', ['ui.router']);

reporterAssignments.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('addAssignment', {
    url: "addAssignment",
    templateUrl: "partials/addAssignment.html"
  });

});
