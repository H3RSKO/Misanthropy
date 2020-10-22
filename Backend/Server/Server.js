//const index = require('../../public/index.html')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')
const db = require('../Database')


const createApp = () => {
  app.use(express.static('public'))
  app.use(bodyParser.json());
}

const startServer = () => {
  app.listen(8080, () => console.log('Mysanthropy listening on Port 8080'));
}

// connect to backend APIs
app.use('/api/', require('./API'))

// used to block backend routing while allowing api calls
const historyMiddleware = history({verbose: true})
app.use((req, res, next) => {
  if (req.path === '/api') next()
  else {
    historyMiddleware(req, res, next)
  }
});

// sync db
const syncDb = () => db.sync()

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

const bootApp = async () => {
  await syncDb()
  await createApp()
  await startServer()
}

bootApp()
