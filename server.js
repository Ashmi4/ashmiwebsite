const express = require('express');
const people = require('./people.json');
const app = express();
// ...
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
// ...
app.get('/', (req, res) => {
  res.render('index', {
  title: 'Ashmi Patel'
});
});


const server = app.listen(app.get('port'));
