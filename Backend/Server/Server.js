//const index = require('../../public/index.html')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')
const db = require('../Database')
const session = require('express-session')
const compression = require('compression')
const helmet = require("helmet");
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({
  db: db,
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 10 * 24 * 60 * 60 * 1000,  // The maximum age (in milliseconds) of a valid session. 10 days
})

// module.exports = sessionStore


const createApp = () => {
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: true}))
  app.use(compression())
  app.use(helmet())
}
// user session
app.use(session({
  secret: process.env.SESSION_SECRET || 'a super secret secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: true,
    httpOnly: false
  }
}))


// needs to be listed before the routes are defined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// set Port to 8080 for local and process.env for Heroku deployment
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

const startServer = () => {
  app.listen(port, () => console.log('Mysanthropy listening on Port 8080'));
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
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startServer()
}

bootApp()
