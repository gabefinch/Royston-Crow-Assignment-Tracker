reporterAssignments.factory('AssignmentFactory',
  function AssignmentFactory() {
  var factory = {};

// ASSIGNMENTS
  factory.assignments = [
    {name: "UFO sightings", id: 1, reporters: []},
    {name: "Health Inspection Fails", id: 2, reporters: []},
    {name: "National Government Fails", id: 3, reporters: []},
  ];

  factory.addAssignment = function(name) {
    var newAssignment = { name: name, reporters: [],
      id: factory.assignments.length + 1 }
    factory.assignments.push( newAssignment );
    return newAssignment;
  };

// REPORTERS

factory.reporters = [
  {name: "Bob Bobson", id: 1, yearsWorked: 13, birthday: Date(1978, 1, 1) },
  {name: "Dob Dobson", id: 2, yearsWorked: 1, birthday: Date(1987, 5, 1)},
  {name: "Shana Shanason", id: 3, yearsWorked: 3, birthday: Date(1967, 6, 1)},
];

  factory.addReporter = function() {
    factory.assignments.push({ name: name, reporters: [],
      id: factory.assignments.length + 1 });
  };

  return factory;
});
