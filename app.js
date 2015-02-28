var reporterAssignments = angular.module('reporterAssignments', ['ui.router']);

reporterAssignments.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('addReporter', {
    url: "addReporter/:assignmentId",
    templateUrl: "partials/addReporter.html"
  });

  $stateProvider.state('detailReporter', {
    url: "detailReporter/:assignmentId/:reporterId",
    templateUrl: "partials/detailReporter.html"
  });

});
