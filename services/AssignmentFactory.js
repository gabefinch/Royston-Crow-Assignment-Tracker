reporterAssignments.factory('AssignmentFactory',
  function AssignmentFactory() {
  var factory = {};

  factory.assignments = [ {name: "UFO sightings", id: 1, reporters: [] },
                    {name: "Crime wire", id: 2, reporters: [] },
                    {name: "National Government", id: 3, reporters: [] },

  ];

  factory.addAssignment = function(name) {
    factory.assignments.push({ name: name, reporters: [],
      id: factory.assignments.length + 1 });
  };



  return factory;
});
