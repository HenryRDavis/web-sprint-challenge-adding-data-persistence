const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch( err => {
        res.status(500).json({message: 'Failed to get projects'});
    })
})
router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch( err => {
        res.status(500).json({message: 'Failed to get resources'});
    })
    
})
router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch( err => {
        res.status(500).json({message: 'Failed to add projects'});
    })
    
})
router.post('/:id/resources', (req, res) => {
    Projects.addResource(req.body)
    .then(resources => {
        res.status(201).json(resources)
    })
    .catch( err => {
        res.status(500).json({message: 'Failed to add resources'});
    })
    
})
router.post('/:id/tasks', (req, res) => {
    const data = req.body
    const {id} = req.params
    Projects.addTask(data, id)
    .then(tasks => {
        res.status(201).json(tasks)
    })  
    .catch( err => {
        res.status(500).json({message: 'Failed to add tasks'});
    })
})


module.exports = router;