reporterAssignments.controller('AssignmentCtrl',
function AssignmentCtrl($scope, $state, AssignmentFactory) {

  $scope.assignments = AssignmentFactory.assignments;

  $scope.AssignmentFactory = AssignmentFactory;

  $scope.addThenHome = function() {
    var newAssignment = AssignmentFactory.addAssignment($scope.assignmentName);
    $scope.reportersPush.forEach( function(reporter) {
      newAssignment.reporters.push(reporter);
    });
    $state.go('home');
  };

});
