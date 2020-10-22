const router = require('express').Router()
const {Thread} = require('../../Database/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const threads = await Thread.findAll()
    res.json(threads)
  } catch(err) {next(err)}
})
