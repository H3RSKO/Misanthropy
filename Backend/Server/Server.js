//const index = require('../../public/index.html')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')

const server = () => {
  app.use(express.static('public'))
  // app.use('/public', express.static(path.join(__dirname, "public")));
  app.use(bodyParser.json());

  app.listen(8080, () => console.log('Mysanthropy listening on Port 8080'));

}
// used to block backend routing
app.use(history());

app.get('/', async (req, res, next) => {
  try {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
  } catch(err) {next(err)}
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

server()
