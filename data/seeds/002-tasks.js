
exports.seed = function(knex) {
const tasks = [
  {
    task_name: 'DNA Strand',
    description: "Get a strand of DNA from a fossil",
    notes:'Find Fossil',
    completed: false,
    project_id: 1
  },
  {
    task_name: 'Planning',
    description: "Blueprint of X-12-EMT",
    notes:'Insufficient materials',
    completed: false,
    project_id: 2
  },
  {
    task_name: 'Vigilance',
    description: 'Making sure every cellular level is clear of E-N.',
    notes:'100% complete',
    completed: true,
    project_id: 3
  },
]
  return knex('tasks').insert(tasks)
};
