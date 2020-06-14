const projects = require("../helpers/projectModel")

module.exports = () => {
  return (req,res,next) => {
    projects.get(req.params.id)
      .then((project) => {
        if (project) {
          req.project = project
          next()
        } else {
          res.status(404).json({
            message: "Project not found"
          })
        }
      })
      .catch(next)
  }
}
