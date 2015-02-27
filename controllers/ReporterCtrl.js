reporterAssignments.controller('ReporterCtrl',
function ReporterCtrl($scope, $state, $stateParams, AssignmentFactory, UtilityFactory) {


  $scope.hello = 'hello kitty'
  $scope.AssignmentFactory = AssignmentFactory;
  $scope.assignment = UtilityFactory.findById(
    AssignmentFactory.assignments, $stateParams.assignmentId);

  $scope.addReporterThen = function() {
    debugger;
  };

});
