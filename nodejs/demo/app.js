
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('hello express')
});

console.log('start listening');
app.listen(3000);

