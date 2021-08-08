const router = require('express').Router()
const {Thread} = require('../../Database/models')
module.exports = router

// get all threads
router.get('/', async (req, res, next) => {
  try {
    const threads = await Thread.findAll()
    res.json(threads)
  } catch(err) {next(err)}
})


// create thread
router.post('/', async (req, res, next) => {
  try {
    const thread = await Thread.create(req.body)
    res.json(thread)
  } catch(err) {next(err)}
})

// get specific thread info
router.get('/:threadId', async (req, res, next) => {
  try {
    const thread = await Thread.findByPk(req.params.threadId)
    res.json(thread)
  } catch(err) {next(err)}
})
// add:
//  get all threads that are stories
//  get all threads from specific author
//  get all threads sorted by date
//  get all threads sorted by upvotes
