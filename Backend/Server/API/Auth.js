const router = require("express").Router();
// const {db} = require('../../Database')
const { User } = require("../../Database/models");
const db = require("../../Database");

module.exports = router;

// // see if cookie exists
// // Doesn't currently do anything
// router.use('/', (res, next, err) => {
//   if (req.sessionID) {
//     console.log('trying to find cookiedb: >> ', db)
//   }
// })
const sessionStore = db.models.Session;

router.get("/me/:cookie", async (req, res) => {
  try {
    if (req.sessionID) {
      const userCookie = await sessionStore.findOne({
        where: {
          sid: req.sessionID,
        },
      });
      // pulls name from cookie data
      let userNameFromCookie = JSON.parse(userCookie.data).sid;

      const user = await User.findOne({
        where: {
          userName: userNameFromCookie,
        },
      });
      res.json(user);
    } else {
      res.status(401).send("No cookie");
    }
  } catch (err) {
    console.log(err);
  }
});
