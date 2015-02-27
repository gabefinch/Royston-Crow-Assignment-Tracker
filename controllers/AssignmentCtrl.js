reporterAssignments.controller('AssignmentCtrl',
function AssignmentCtrl($scope, AssignmentFactory) {

  $scope.assignments = AssignmentFactory.assignments;
  
  $scope.AssignmentFactory = AssignmentFactory;

});
