const port = process.env.PORT || 9000
const http = require('http'),
      websocket = require('ws'),
      fs = require('fs')

const server = http.createServer((request, response) => {

}).listen(port, () => { console.log(`Server listening on port ${port}`)})

const wsserver = new websocket.Server({ server })

wsserver.on('connection', connection => {
  fs.readFile('./mockComponents.json', 'UTF-8', (err, data) => {
    wsserver.clients.forEach(client => {
      client.send(data)
    })
  })
})