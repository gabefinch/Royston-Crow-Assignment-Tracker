reporterAssignments.factory('AssignmentFactory',
  function AssignmentFactory() {
  var factory = {};

// ASSIGNMENTS
  factory.assignments = [{name: "UFO sightings", id: 1, reporters: [] },
    {name: "Notable Roadkill", id: 2, reporters: [] },
    {name: "New folks in town", id: 3, reporters: [] }
  ];

  factory.addAssignment = function(name) {
    var newAssignment = { name: name, reporters: [],
      id: factory.assignments.length + 1 }
    factory.assignments.push( newAssignment );
    return newAssignment;
  };

// REPORTERS
  factory.addReporter = function(assignment, name, years, bday) {
    assignment.reporters.push({
      name: name,
      years: years,
      bday: bday,
      id: assignment.reporters.length + 1
    });
  };

  return factory;
});
