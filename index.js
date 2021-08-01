const hello = require('./routes/api/hello');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Set Templating Engine & Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/css', express.static(__dirname + '/static/css'));
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/scripts', express.static(__dirname + '/static/scripts'));

// // Rerouting Files
app.use('/', routes);

app.use('/api/hello', hello);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});