reporterAssignments.controller('ReporterCtrl',
function ReporterCtrl($scope, $state, AssignmentFactory) {

  $scope.reporters = AssignmentFactory.reporters;


});
