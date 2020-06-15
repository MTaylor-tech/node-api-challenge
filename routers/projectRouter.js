const express = require('express')
const projects = require('../data/helpers/projectModel')
const actions = require('../data/helpers/actionModel')
const validateProject = require('../middleware/validateProject')
const validateProjectId = require('../middleware/validateProjectId')
const validateAction = require('../middleware/validateAction')

const router = express.Router();

router.post('/', validateProject(), (req, res, next) => {
  projects.insert(req.body)
		.then((project) => {
			return res.status(201).json(project)
		})
		.catch(next)
});

router.post('/:id/actions', validateProjectId(), validateAction(), (req, res, next) => {
  if (!req.body.project_id) {
    req.body.project_id = req.params.id
  }
  actions.insert(req.body)
    .then(action=>{
      return res.status(201).json(action)
    })
    .catch(next)
});

router.get('/', (req, res, next) => {
  projects.get()
    .then(projects=>{
      return res.status(200).json(projects)
    })
    .catch(next)
});

router.get('/:id', validateProjectId(), (req, res, next) => {
  return res.status(200).json(req.project)
  // projects.get(req.params.id)
  //   .then(project=>{
  //     return res.status(200).json(project)
  //   })
  //   .catch(next)
});

router.get('/:id/actions', validateProjectId(), (req, res, next) => {
  projects.getProjectActions(req.params.id)
    .then(actions=>{
      return res.status(200).json(actions)
    })
    .catch(next)
});

router.delete('/:id', validateProjectId(), (req, res, next) => {
  projects.remove(req.params.id)
    .then(success=> {
      if (success===1) {
        return res.status(200).json({message: "Project deleted"})
      } else {
        return res.status(500).json({message: "Project could not be deleted"})
      }
    })
    .catch(next)
});

router.put('/:id', validateProjectId(), validateProject(), (req, res, next) => {
  projects.update(req.params.id,req.body)
    .then(project=>{
      return res.status(200).json(project)
    })
    .catch(next)
});

module.exports = router;
