
exports.seed = function(knex) {
  const projects = [
    {
      project_name: "Project D-Trice",
      description: "Creating a new DNA strand from an old Triceratops fossil",
      completed: false,
    },
    {
      project_name: "X-12-EMT",
      description: "Making a EMT that also knocks people out",
      completed: false,
    },
    {
      project_name: "C.L.E.A.N",
      description: "Clearing Levels of Eradicits and Analyzing Nuero-Phomontics",
      completed: true,
    },
  ]
 return knex('projects').insert(projects)
};
