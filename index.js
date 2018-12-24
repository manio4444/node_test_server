const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('helo word');
});

server.listen (8888, () => {
  console.log('Server started on porrt 8888');
});
