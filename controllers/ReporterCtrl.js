reporterAssignments.controller('ReporterCtrl',
function ReporterCtrl($scope, $state, $stateParams, AssignmentFactory, UtilityFactory) {

  $scope.AssignmentFactory = AssignmentFactory;
  $scope.assignment = UtilityFactory.findById(
    AssignmentFactory.assignments, $stateParams.assignmentId);

  $scope.addReporterThen = function(name, years, bday) {
    AssignmentFactory.addReporter( $scope.assignment, name, years, bday);
    $state.go('home');
  };

});
