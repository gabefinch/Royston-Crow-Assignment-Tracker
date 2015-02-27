reporterAssignments.factory('AssignmentFactory',
  function AssignmentFactory() {
  var factory = {};

// ASSIGNMENTS
  factory.assignments = [
    {name: "UFO sightings", id: 1, reporters: [
      {name: "Bob Bobson", id: 1 , yearsWorked: 15},
      {name: "Claire Clarice", id: 2 , yearsWorked: 3},
      {name: "Sammy Samson", id: 3 , yearsWorked: 6}
      ]
    },
    {name: "Crime wire", id: 2, reporters: [
      {name: "Bob Bobson", id: 1 , yearsWorked: 15},
      {name: "Claire Clarice", id: 2 , yearsWorked: 3}
      ]
    },
    {name: "National Government", id: 3, reporters: [
      {name: "Claire Clarice", id: 2 , yearsWorked: 3},
      {name: "Sammy Samson", id: 3 , yearsWorked: 6}
      ]
    },
  ];

  factory.addAssignment = function(name) {
    factory.assignments.push({ name: name, reporters: [],
      id: factory.assignments.length + 1 });
  };

// REPORTERS

  factory.addReporter = function() {
    factory.assignments.push({ name: name, reporters: [],
      id: factory.assignments.length + 1 });
  };

  return factory;
});
