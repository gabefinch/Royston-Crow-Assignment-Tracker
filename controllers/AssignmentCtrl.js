reporterAssignments.controller('AssignmentCtrl',
function AssignmentCtrl($scope, $state, AssignmentFactory) {

  $scope.assignmentForm = false;
  $scope.reporterForm = false;
  $scope.assignments = AssignmentFactory.assignments;
  $scope.AssignmentFactory = AssignmentFactory;

  $scope.addAssignmentThen = function() {
    AssignmentFactory.addAssignment($scope.assignmentName);
    $scope.assignmentName = null;
    $scope.assignmentForm = false;
  };

  $scope.toggleAssignmentForm = function() {
    $scope.assignmentForm = !$scope.assignmentForm;
    $scope.reporterForm = false;
  };

  $scope.addReporterThen = function() {
  };

});
