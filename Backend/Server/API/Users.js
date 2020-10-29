const router = require('express').Router()
const {User} = require('../../Database/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // dont want to return user email or pw
      attributes: ['name', 'photo', 'createdAt', 'updatedAt']
    })
    res.json(users)
  } catch(err) {next(err)}
})

router.post('/', async (req ,res, next) => {
  try {
    console.log('request body ', req.body)
    const user = await User.create(req.body)
    res.send(user)
  } catch(err) {next(err)}
})
