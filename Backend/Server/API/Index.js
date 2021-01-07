const router = require('express').Router()
module.exports = router

router.use('/auth', require('./Auth'))
router.use('/users', require('./Users'))
router.use('/posts', require('./Posts'))
router.use('/threads', require('./Threads'))

// If route does not exist
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
