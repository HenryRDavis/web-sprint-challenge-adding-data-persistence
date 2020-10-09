const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json({ created: project });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id/resource", (req, res) => {
  req.body.project_id = req.params.id;
  Projects.addResource(req.body)
    .then(resource => {
      res.status(201).json({ created: resource });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
  Projects.getResources()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});


module.exports = router;