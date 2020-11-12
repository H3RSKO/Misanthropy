const router = require('express').Router()
const {User} = require('../../Database/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // dont want to return user email or pw
      attributes: ['userName', 'photo', 'createdAt', 'updatedAt']
    })
    res.json(users)
  } catch(err) {next(err)}
})

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
    where: {
      userName: req.body.userName
    }
    })
    if (!user) {
      console.log(`User ${req.body.userName} not found!`)
      res.status(401).send('Username not found')
    } else if (!user.correctPW(req.body.password)){
      console.log('Incorrect password for ', req.body.userName)
      res.status(401).send('Wrong password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch(err) {next(err)}
})

router.post('/signup', async (req ,res, next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch(err) {next(err)}
})
