const express = require('express');
const server = express();
const stringify = require('json-stringify-safe');

server.get('/', (req, res) => {
  // res.send('helo word' + '<br>' + req);
  res.send(stringify(req.headers  ));

  console.log('cached - ' + req.headers.host);
  // console.log(req);
});

serverListerPort = 8088;

server.listen (serverListerPort, () => {
  console.log(`Server started on port ${serverListerPort}`);
});
