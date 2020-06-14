const server = require('./server')

const port = process.env.PORT || 4000;
const url = process.env.URL || 'http://localhost'

server.listen(port, () => {
	console.log(`Server listening at ${url}:${port}`)
})
