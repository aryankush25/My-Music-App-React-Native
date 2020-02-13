const express = require('express');

const app = express();
const HOSTNAME = '127.0.0.1';
const PORT = 2222;

app.get('/', (req, res) => {
  res.send('response from server');
});

app.listen(PORT, HOSTNAME, err => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is running on http://${HOSTNAME}:${PORT}/`);
});
