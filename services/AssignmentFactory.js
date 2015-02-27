reporterAssignments.factory('AssignmentFactory',
  function AssignmentFactory() {
  var factory = {};

// ASSIGNMENTS
  factory.assignments = [
    {name: "UFO sightings", id: 1, reporters: [{name: "Bob Bobson", id: 1, yearsWorked: 13, birthday: Date(1978, 1, 1) }]},
    {name: "Health Inspection Fails", id: 2, reporters: [{name: "Bob Bobson", id: 1, yearsWorked: 13, birthday: Date(1978, 1, 1) }]},
    {name: "National Government Fails", id: 3, reporters: [{name: "Bob Bobson", id: 1, yearsWorked: 13, birthday: Date(1978, 1, 1) }]},
  ];

  factory.addAssignment = function(name) {
    var newAssignment = { name: name, reporters: [],
      id: factory.assignments.length + 1 }
    factory.assignments.push( newAssignment );
    return newAssignment;
  };

// REPORTERS

  factory.addReporter = function(assignment, name, years, bday) {
    assignment.reporters.push({name: name, years: years, bday: bday});
  };

  return factory;
});
