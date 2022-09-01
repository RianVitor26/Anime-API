const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

server.get('/', (req, res) => {
    res.json({nome: 'API de animes'})
})


server.listen(port, () => console.log('server listening on port ' + port))