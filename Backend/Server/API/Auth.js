const router = require('express').Router()
// const {db} = require('../../Database')
const {User} = require('../../Database/models')
const currentSession = require('../Server')



module.exports = router

// // see if cookie exists
// // Doesn't currently do anything
// router.use('/', (res, next, err) => {
//   if (req.sessionID) {
//     console.log('trying to find cookiedb: >> ', db)
//   }
// })

router.get('/me/:cookie', async (req, res) => {
  // console.log(`currentsession is  ${Object.keys(currentSession)}`)
  console.log(`in Auth api the session ID is ${req.sessionID}`)
  // console.log(`req session is  ${req.session}`)
  // console.log(`but maybe cookie is ${req.params.cookie}`)

  if (req.sessionID) {
    const userCookie = await currentSession.findOne({
      where: {
        sid: req.sessionID
      }
    })
    // pulls name from cookie data
    // data is saved as a string to need to pull it manually
    let userNameFromCookie = userCookie.data.split(":").pop()
    userNameFromCookie = userNameFromCookie.substring(1, userNameFromCookie.length - 2)

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
