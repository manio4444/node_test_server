const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('helo word');
  console.log('cached');
  // console.log(req);
});

serverListerPort = 80;

server.listen (serverListerPort, () => {
  console.log(`Server started on port ${serverListerPort}`);
});
