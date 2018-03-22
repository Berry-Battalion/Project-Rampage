const express = require('express');
const path = require('path');

const app = express();

const port = 8888;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/bundle.js', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, 'build/bundle.js'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});