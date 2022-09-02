const express = require('express');
const server = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require('path');

const animes = require('./api.json')

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static(path.join(__dirname, 'public')))

server.use(cors())

server.get('/', (req, res) => {
    res.render('index')
})

server.get('/animeapi', (req, res) => {
    res.json(animes)
})


server.listen(port, () => console.log(`http://localhost:${port}`))