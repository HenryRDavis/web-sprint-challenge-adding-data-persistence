const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addTask,
  addResource,

};

function getProjects() {
  return db('projects');
};

function getResources() {
  return db('resources');
};

function getTasks(id) {
    return db('projects as pt')
    .join('tasks as t', 'pt.id', 't.project_id')
    .select('t.notes', 'pt.id', 't.task_name', 't.description as description')
    .where('pt.id', id);
};

function addProject(data) {
  return db('projects').insert(data, "id")
  .then(ids => {
    const id = ids[0];
    return getByProjectId(id);
  })
}
function addResource(data) {
    return db('resources').insert(data, "id")
    .then(ids => {
      const id = ids[0];
      return getByResourceId(id);
    })
}
function addTask(data, id) {
    return db('tasks').insert({...data, project_id: id})
    .then(ids => {
        ids[0]
    })
}
