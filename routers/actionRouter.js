const express = require('express');
const actions = require('../data/helpers/actionModel')
const validateAction = require('../middleware/validateAction')
const validateActionId = require('../middleware/validateActionId')

const router = express.Router();

router.get('/', (req, res, next) => {
  actions.get()
    .then(actions=>{
      return res.status(200).json(actions)
    })
    .catch(next)
});

router.get('/:id', validateActionId(), (req, res, next) => {
  return res.status(200).json(req.action)
});

router.delete('/:id', validateActionId(), (req, res, next) => {
  actions.remove(req.params.id)
    .then(success=>{
      if (success===1) {
        return res.status(200).json({message: "Action deleted"})
      } else {
        return res.status(500).json({message: "Action could not be deleted"})
      }
    })
    .catch(next)
});

router.put('/:id', validateActionId(), validateAction(), (req, res, next) => {
  actions.update(req.params.id,req.body)
    .then(action=>{
      return res.status(200).json(action)
    })
    .catch(next)
});

module.exports = router;
