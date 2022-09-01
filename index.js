const express = require('express');
const server = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

const animes = require('./api.json')

server.use(cors())

server.get('/animeapi', (req, res) => {
    res.json(animes)
})


server.listen(port, () => console.log('server listening on port ' + port))