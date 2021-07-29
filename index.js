// https://vercel.com/docs/runtimes#advanced-usage/advanced-node-js-usage/private-npm-modules-for-node-js

const express = require('express');
const routes = require('./routes');
const path = require('path');
// const fs = require('fs');
const app = express();
const PORT = 3000;

// Set Templating Engine & Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('static', express.static('static'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/scripts', express.static(__dirname + '/static/scripts'));

// // Rerouting Files
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});