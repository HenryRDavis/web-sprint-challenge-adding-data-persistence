const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  getByProjectId,
};

function getProjects() {
  return db('projects');
};

function getResources() {
  return db('resources');
};

function getTasks() {
  return db('tasks');
};

function getByProjectId(id) {
  return db("projects").where({ id }).first();
}

function getByResourceId(id) {
  return db("resources").where({ id }).first();
}

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
