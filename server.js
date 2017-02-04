const port = process.env.PORT || 9000
const http = require('http'),
      websocket = require('ws'),
      fs = require('fs'),
      generateNewData = require('./dataRandomizer').generateNewData,
      resetData = require('./dataRandomizer').resetData,
      path = require('path')

const server = http.createServer((request, response) => {
  console.log('request starting...');

    var filePath = './build' + request.url;
    if (filePath == './build/')
        filePath += '/index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(port, () => { console.log(`Server listening on port ${port}`)})

const wsserver = new websocket.Server({ server })

wsserver.on('connection', connection => {
  fs.readFile('./mockComponents.json', 'UTF-8', (err, data) => {
    wsserver.clients.forEach(client => {
      client.send(data)
    })
  })

  connection.on('message', () => {
    wsserver.clients.forEach(client => {
      const nextData = generateNewData()
      client.send(nextData)
    })
  })

  connection.on('close', () => {
    console.log("Closing connection")
    resetData()
  });
})
