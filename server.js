const express = require('express');
const people = require('./people.json');
const app = express();
// ...
var port = process.env.PORT || 3000;
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
// ...
app.get('/', (req, res) => {
  res.render('index', {
  title: 'Ashmi Patel'
});
});

app.listen(port, () => console.log('Server is running on port'+port));
