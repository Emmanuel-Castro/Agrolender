const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>I am beginning my backend developer path with Express.js</h1>');
});

app.listen(PORT, () => {
  console.log('App running succesfully');
});