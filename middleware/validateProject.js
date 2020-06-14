module.exports = () => {
  return (req,res,next) => {
    if (!req.body || !req.body.name || !req.body.description) {
      res.status(400).json({
        message: "Missing Project information. Projects must include a name and description.",
      })
    } else {
      next()
    }
  }
}
