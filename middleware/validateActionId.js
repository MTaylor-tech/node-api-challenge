const actions = require("../helpers/actionModel")

module.exports = () => {
  return (req,res,next) => {
    actions.get(req.params.id)
      .then((action) => {
        if (action) {
          req.action = action
          next()
        } else {
          res.status(404).json({
            message: "Action not found"
          })
        }
      })
      .catch(next)
  }
}
