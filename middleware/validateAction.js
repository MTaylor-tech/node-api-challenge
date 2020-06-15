module.exports = () => {
  return (req,res,next) => {
    if (!req.body || !req.body.project_id || !req.body.description || !req.body.notes) {
      res.status(400).json({
        message: "Missing Action information. Actions must include a project_id, description and notes.",
      })
    } else {
      next()
    }
  }
}
