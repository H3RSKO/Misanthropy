//const index = require('../../public/index.html')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const server = () => {
  app.use(express.static('public/media'))
  app.use(bodyParser.json());
  app.listen(8080, () => console.log('Mysanthropy listening on Port 8080'));

}

app.get('*', (req, res, next) => {
  res.sendFIle(path.join(__dirname, 'index.html'))
})

server()
