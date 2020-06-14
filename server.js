const express = require('express')
const cors = require('cors')
const projectRouter = require('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

const logStyle = process.env.LOGSTYLE || 'short'
const welcomeMessage = process.env.WELCOME || `<h2>Welcome to the Projects/Actions API</h2>`

const server = express()

server.use(cors())
server.use(express.json())

server.use(logger(logStyle))

server.get('/', (req, res) => {
  res.send(welcomeMessage);
})

server.use('/projects', projectRouter)
server.use('/actions', actionRouter)
server.use(errorHandler())

module.exports = server;
