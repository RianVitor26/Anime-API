const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

const animes = require('./api.json')

server.get('/', (req, res) => {
    res.json(animes)
})


server.listen(port, () => console.log('server listening on port ' + port))