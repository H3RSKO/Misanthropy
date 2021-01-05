const router = require('express').Router()
// const {db} = require('../../Database')
const {User} = require('../../Database/models')
const sessionStore = require('../Server')

module.exports = router

// // see if cookie exists
// // Doesn't currently do anything
// router.use('/', (res, next, err) => {
//   if (req.sessionID) {
//     console.log('trying to find cookiedb: >> ', db)
//   }
// })

router.get('/me/:cookie', async (req, res) => {
  console.log(`in Auth api the session ID is ${req.sessionID}`)
  console.log(`but the cookie is ${req.body.cookie}`)
  console.logg(`but maybe cookie is ${req.params.cookie}`)
  if (req.sessionID) {
    const userCookie = await sessionStore.findOne({
      where: {
        sid: req.params.cookie
      }
    })
    // pulls name from cookie data
    const userNameFromCookie = userCookie.data.sid
    console.log(`the user is ${user}`)
    console.log(`the userName is ${userNameFromCookie}`)
    const user = await User.findOne({
      where: {
        userName: userNameFromCookie
      }
      })
    res.json(user)
  } else {
    console.log('no cookie')
    res.status(401).send('No cookie')
  }
})
