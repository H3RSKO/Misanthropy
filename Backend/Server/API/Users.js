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

router.post('/', async (req ,res, next) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    console.log('request body 2 ', user)
    res.json(user)
  } catch(err) {next(err)}
})
