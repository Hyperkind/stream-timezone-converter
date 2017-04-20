const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening on port:', port);
});
