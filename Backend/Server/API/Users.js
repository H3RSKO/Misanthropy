const router = require('express').Router()
const {User} = require('../../Database/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['name', 'photo']
    })
    res.json(users)
  } catch(err) {next(err)}
})
