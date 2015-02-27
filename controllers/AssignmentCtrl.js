reporterAssignments.controller('AssignmentCtrl',
function AssignmentCtrl($scope, $state, AssignmentFactory) {

  $scope.assignments = AssignmentFactory.assignments;

  $scope.AssignmentFactory = AssignmentFactory;

  $scope.addThenHome = function(name) {
    AssignmentFactory.addAssignment(name);
    $state.go('home');
  };

});
