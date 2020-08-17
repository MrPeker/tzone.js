const express = require('express');
const fs = require('fs');
const app = express();

const port = 5000;

const provinces = require('./routes/provinces');
const counties = require('./routes/counties');
const towns = require('./routes/towns');
const villages = require('./routes/villages');

// Body parser
app.use(express.urlencoded({extended: false}));

// Home route
app.get('/', (req, res) => {
  res.send(`Welcome to a tzone.js API<br/> <br/>
  <a href="https://github.com/enesusta/tzone#readme" target="_blank">API Documentation</a> <br/>
  <a href="https://github.com/mrpeker/tzone.js" target="_blank">tzone.js repository</a>`);
});

app.use('/provinces', provinces);
app.use('/counties', counties);
app.use('/towns', towns);
app.use('/villages', villages);

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
