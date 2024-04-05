const express = require('express');
const app = express();
const ansis = require('ansis');
const { red, green, blue } = require('ansis');
const config = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

// Path for home file
const home = fs.readFileSync(config.home, 'utf8');
const docx = fs.readFileSync(config.docx, 'utf8');
const ukiaio = fs.readFileSync(config.ukiaio, 'utf8');

// Define directory containing static files (CSS, images)
const staticDirectory = path.join(__dirname, 'public');

// Middleware to serve static files
app.use(express.static(staticDirectory));

// Reading Home File
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(home);
});

app.get('/docx', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(docx);
});

app.get('/docx/dbh/ukiaio', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(ukiaio);
});

// Unknown requests
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, config.error));
});

// Listening to the requests
app.listen(config.port, () => {
    console.log(green`Listening on ${config.protocol}://${config.domain}:${config.port}`);
});
