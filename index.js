const express = require('express');
const server = express();
const fs = require('fs');

server.get('/', (req, res) => {
  res.send('helo word');
  console.log(req.headers);
  // console.log(req);
  // fs.writeFile('lastRequest.json', JSON.stringify(req), 'utf8');
});

serverListerPort = 80;

server.listen (serverListerPort, () => {
  console.log(`Server started on port ${serverListerPort}`);
});
